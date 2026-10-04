"use client";

import { useEffect, useRef } from "react";

import styles from "@/app/hero.module.css";

const heroVideoSource =
  "/videos/WhatsApp%20Video%202026-09-19%20at%209.26.25%20PM.mp4";
const heroVideoCrossfadeSeconds = 1.15;

export function SeamlessHeroVideo() {
  const primaryVideoRef = useRef<HTMLVideoElement>(null);
  const secondaryVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const primaryVideo = primaryVideoRef.current;
    const secondaryVideo = secondaryVideoRef.current;
    if (!primaryVideo || !secondaryVideo) return;

    const videos = [primaryVideo, secondaryVideo];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videos.forEach((video) => {
        video.pause();
        video.currentTime = 0;
      });
      return;
    }

    let activeIndex = 0;
    let crossfading = false;
    let resetTimer: number | undefined;

    const beginCrossfade = () => {
      if (crossfading) return;

      const activeVideo = videos[activeIndex];
      const nextIndex = activeIndex === 0 ? 1 : 0;
      const nextVideo = videos[nextIndex];
      const remainingTime = activeVideo.duration - activeVideo.currentTime;

      if (
        !Number.isFinite(remainingTime) ||
        remainingTime > heroVideoCrossfadeSeconds ||
        nextVideo.readyState < HTMLMediaElement.HAVE_CURRENT_DATA
      ) {
        return;
      }

      crossfading = true;
      nextVideo.currentTime = 0;

      void nextVideo
        .play()
        .then(() => {
          nextVideo.classList.add(styles.backgroundVideoActive);
          activeVideo.classList.remove(styles.backgroundVideoActive);

          resetTimer = window.setTimeout(() => {
            activeVideo.pause();
            activeVideo.currentTime = 0;
            activeIndex = nextIndex;
            crossfading = false;
          }, heroVideoCrossfadeSeconds * 1000);
        })
        .catch(() => {
          crossfading = false;
        });
    };

    const keepPlaybackContinuous = (event: Event) => {
      const endedVideo = event.currentTarget as HTMLVideoElement;
      const endedIndex = videos.indexOf(endedVideo);

      if (endedIndex !== activeIndex || crossfading) return;

      endedVideo.currentTime = 0;
      void endedVideo.play().catch(() => undefined);
    };

    videos.forEach((video) => {
      video.addEventListener("timeupdate", beginCrossfade);
      video.addEventListener("ended", keepPlaybackContinuous);
    });

    void primaryVideo.play().catch(() => undefined);

    return () => {
      if (resetTimer !== undefined) window.clearTimeout(resetTimer);

      videos.forEach((video) => {
        video.removeEventListener("timeupdate", beginCrossfade);
        video.removeEventListener("ended", keepPlaybackContinuous);
      });
    };
  }, []);

  return (
    <>
      <video
        ref={primaryVideoRef}
        className={`${styles.backgroundVideo} ${styles.backgroundVideoActive}`}
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        disablePictureInPicture
      >
        <source src={heroVideoSource} type="video/mp4" />
      </video>
      <video
        ref={secondaryVideoRef}
        className={styles.backgroundVideo}
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        disablePictureInPicture
      >
        <source src={heroVideoSource} type="video/mp4" />
      </video>
    </>
  );
}
