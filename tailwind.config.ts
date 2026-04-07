import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base surfaces
        "bg-deep": "#030508",
        "bg-base": "#07080F",
        "bg-elevated": "#0D1117",
        "bg-card": "#111827",
        "bg-card-hover": "#151E2E",

        // Foreground
        "fg-primary": "#F0F2F8",
        "fg-secondary": "#A8B3C8",
        "fg-muted": "#5A6478",
        "fg-subtle": "#2E3748",

        // Accent — Electric Cyan
        cyan: {
          DEFAULT: "#00C8E0",
          glow: "rgba(0,200,224,0.15)",
          dim: "rgba(0,200,224,0.08)",
          border: "rgba(0,200,224,0.2)",
          bright: "#33D6EC",
          deep: "#00A8BE",
        },

        // Accent — Champagne Gold
        gold: {
          DEFAULT: "#C9A84C",
          light: "#D4B96A",
          dim: "rgba(201,168,76,0.6)",
          glow: "rgba(201,168,76,0.12)",
          border: "rgba(201,168,76,0.25)",
        },

        // UI tokens
        border: {
          DEFAULT: "rgba(255,255,255,0.07)",
          strong: "rgba(255,255,255,0.12)",
          cyan: "rgba(0,200,224,0.2)",
          gold: "rgba(201,168,76,0.25)",
        },
        glass: "rgba(255,255,255,0.04)",
        scrim: "rgba(3,5,8,0.85)",
      },

      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        label: ["var(--font-inter)", "system-ui", "sans-serif"],
      },

      fontSize: {
        "display-2xl": ["clamp(4rem, 10vw, 8rem)", { lineHeight: "0.92", letterSpacing: "-0.02em" }],
        "display-xl": ["clamp(3rem, 7vw, 6rem)", { lineHeight: "0.94", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.0", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "label-lg": ["0.875rem", { lineHeight: "1", letterSpacing: "0.12em" }],
        "label-md": ["0.75rem", { lineHeight: "1", letterSpacing: "0.15em" }],
        "label-sm": ["0.625rem", { lineHeight: "1", letterSpacing: "0.2em" }],
      },

      spacing: {
        "section-y": "clamp(5rem, 10vw, 8rem)",
        "section-x": "clamp(1.25rem, 5vw, 5rem)",
      },

      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-ocean": "linear-gradient(180deg, #030508 0%, #050A14 50%, #030508 100%)",
        "gradient-hero": "linear-gradient(to bottom, rgba(3,5,8,0) 0%, rgba(3,5,8,0.6) 50%, rgba(3,5,8,0.98) 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
        "gradient-cyan-glow": "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,200,224,0.12) 0%, transparent 100%)",
        "gradient-gold-glow": "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(201,168,76,0.08) 0%, transparent 100%)",
        "gradient-section": "linear-gradient(180deg, rgba(3,5,8,0) 0%, rgba(13,17,23,0.5) 50%, rgba(3,5,8,0) 100%)",
      },

      boxShadow: {
        "cyan-glow": "0 0 40px rgba(0,200,224,0.15), 0 0 80px rgba(0,200,224,0.05)",
        "cyan-sm": "0 0 20px rgba(0,200,224,0.12)",
        "gold-glow": "0 0 40px rgba(201,168,76,0.15), 0 0 80px rgba(201,168,76,0.05)",
        "card": "0 1px 1px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        "card-hover": "0 2px 4px rgba(0,0,0,0.6), 0 8px 32px rgba(0,0,0,0.5), 0 0 60px rgba(0,200,224,0.06), inset 0 1px 0 rgba(255,255,255,0.08)",
        "modal": "0 8px 64px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)",
      },

      animation: {
        "blob": "blob 7s infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
      },

      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(20px, -20px) scale(1.05)" },
          "66%": { transform: "translate(-10px, 10px) scale(0.97)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      backdropBlur: {
        xs: "2px",
      },

      transitionTimingFunction: {
        "premium": "cubic-bezier(0.16,1,0.3,1)",
        "smooth": "cubic-bezier(0.4,0,0.2,1)",
      },
    },
  },
  plugins: [],
};

export default config;
