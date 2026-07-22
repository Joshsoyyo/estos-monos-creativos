export const designTokens = {
  colors: {
    ink: "#111111",
    yellow: "#FFD400",
    white: "#FFFFFF",
    transparent: "transparent",
  },
  spacing: {
    pageX: "var(--space-page-x)",
    sectionY: "var(--space-section-y)",
    container: "var(--container-max)",
  },
  borders: {
    hairline: "1px solid var(--border-subtle)",
    yellow: "1px solid var(--border-yellow)",
  },
  radius: {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)",
    full: "var(--radius-full)",
  },
  shadows: {
    soft: "var(--shadow-soft)",
    glass: "var(--shadow-glass)",
    yellow: "var(--shadow-yellow)",
    panel: "var(--shadow-panel)",
  },
  blur: {
    sm: "var(--blur-sm)",
    md: "var(--blur-md)",
    lg: "var(--blur-lg)",
    xl: "var(--blur-xl)",
  },
  durations: {
    fast: "var(--duration-fast)",
    base: "var(--duration-base)",
    slow: "var(--duration-slow)",
    reveal: "var(--duration-reveal)",
  },
  transitions: {
    easeOut: "var(--ease-out)",
    premium: "var(--ease-premium)",
    spring: "var(--ease-spring)",
  },
  zIndex: {
    base: "var(--z-base)",
    content: "var(--z-content)",
    nav: "var(--z-nav)",
    overlay: "var(--z-overlay)",
  },
} as const;

export type DesignTokens = typeof designTokens;
