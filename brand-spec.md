# Soulparodox brand spec (extracted)

Source audited from existing implementation:
- `src/app/globals.css`
- `src/app/page.tsx`
- `src/app/layout.tsx`
- attempted live brand endpoints: `soulparodox.com/brand`, `/press`, `/about` (not available)

## Color tokens (OKLch)

```css
:root {
  --bg:      oklch(96.8% 0.009 85); /* extracted from #f7f4ee */
  --surface: oklch(98.9% 0.006 85); /* extracted from #fdfbf7 */
  --fg:      oklch(17.8% 0.000 90); /* extracted from #111111 */
  --muted:   oklch(57.0% 0.004 85); /* extracted from current black/55 treatment */
  --border:  oklch(89.9% 0.008 85); /* extracted from current black/10 treatment */
  --accent:  oklch(38.3% 0.002 85); /* extracted from current dark panel treatment */
}
```

## Typography stacks

```css
--font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
--font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
--font-mono: ui-monospace, "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
```

## Observed layout posture

1. Editorial minimal with light display weights and aggressive negative tracking on major headlines.
2. Warm-paper background with charcoal text and quiet border contrast, avoiding saturated accents.
3. Hairline borders and sparse shadows; hierarchy mostly created through type scale and spacing.
4. Monochrome confidence moments via dark blocks with warm-light reversed text.
5. Uppercase micro-label system with high letterspacing as navigational rhythm.

