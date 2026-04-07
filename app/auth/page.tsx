"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function AuthForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("from") || "/";

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!password.trim()) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (data.success) {
        router.replace(redirectTo);
        router.refresh();
      } else {
        setError(data.error || "Incorrect password.");
        setPassword("");
        setShake(true);
        setTimeout(() => setShake(false), 600);
        inputRef.current?.focus();
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{ background: "#030508" }}
    >
      {/* Ambient glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,200,224,0.07) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(201,168,76,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Top rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,200,224,0.3), transparent)",
        }}
      />

      {/* Card */}
      <div
        className={`relative w-full max-w-sm transition-transform duration-100 ${shake ? "animate-shake" : ""}`}
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow:
            "0 8px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.06)",
          borderRadius: "2px",
          padding: "48px 40px",
        }}
      >
        {/* Brand */}
        <div className="text-center mb-10">
          <div className="mb-4 flex justify-center">
            <span
              style={{
                display: "inline-block",
                width: "32px",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(0,200,224,0.6), transparent)",
              }}
            />
          </div>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "2rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              color: "#F0F2F8",
              lineHeight: 1,
              marginBottom: "8px",
            }}
          >
            EMBARQX
          </h1>
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#5A6478",
              fontWeight: 500,
            }}
          >
            Private Preview
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
            marginBottom: "32px",
          }}
        />

        <form onSubmit={handleSubmit} noValidate>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="password"
              style={{
                display: "block",
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#5A6478",
                fontWeight: 500,
                marginBottom: "10px",
              }}
            >
              Access Password
            </label>
            <input
              ref={inputRef}
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError("");
              }}
              placeholder="Enter password"
              autoComplete="current-password"
              required
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.03)",
                border: error
                  ? "1px solid rgba(220,80,80,0.5)"
                  : "1px solid rgba(255,255,255,0.08)",
                borderRadius: "2px",
                padding: "12px 16px",
                fontSize: "0.9rem",
                color: "#F0F2F8",
                outline: "none",
                transition: "border-color 0.2s",
                boxSizing: "border-box",
                letterSpacing: "0.1em",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "rgba(0,200,224,0.35)";
                e.target.style.boxShadow =
                  "0 0 0 3px rgba(0,200,224,0.06)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = error
                  ? "rgba(220,80,80,0.5)"
                  : "rgba(255,255,255,0.08)";
                e.target.style.boxShadow = "none";
              }}
            />
            {error && (
              <p
                style={{
                  fontSize: "0.7rem",
                  color: "rgba(220,80,80,0.9)",
                  marginTop: "8px",
                  letterSpacing: "0.03em",
                }}
                role="alert"
              >
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || !password.trim()}
            style={{
              width: "100%",
              padding: "13px 24px",
              background: loading
                ? "rgba(0,200,224,0.1)"
                : "rgba(0,200,224,0.12)",
              border: "1px solid rgba(0,200,224,0.3)",
              borderRadius: "2px",
              color: "#00C8E0",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              cursor: loading || !password.trim() ? "not-allowed" : "pointer",
              opacity: !password.trim() ? 0.5 : 1,
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => {
              if (!loading && password.trim()) {
                (e.target as HTMLButtonElement).style.background =
                  "rgba(0,200,224,0.18)";
                (e.target as HTMLButtonElement).style.borderColor =
                  "rgba(0,200,224,0.5)";
              }
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.background =
                "rgba(0,200,224,0.12)";
              (e.target as HTMLButtonElement).style.borderColor =
                "rgba(0,200,224,0.3)";
            }}
          >
            {loading ? (
              <>
                <span
                  style={{
                    width: "12px",
                    height: "12px",
                    border: "1.5px solid rgba(0,200,224,0.3)",
                    borderTopColor: "#00C8E0",
                    borderRadius: "50%",
                    display: "inline-block",
                    animation: "spin 0.7s linear infinite",
                  }}
                />
                Verifying
              </>
            ) : (
              "Enter"
            )}
          </button>
        </form>

        {/* Footer note */}
        <p
          style={{
            textAlign: "center",
            fontSize: "0.6rem",
            color: "#2E3446",
            marginTop: "32px",
            letterSpacing: "0.06em",
          }}
        >
          This site is confidential and by invitation only.
        </p>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          15% { transform: translateX(-6px); }
          30% { transform: translateX(6px); }
          45% { transform: translateX(-4px); }
          60% { transform: translateX(4px); }
          75% { transform: translateX(-2px); }
          90% { transform: translateX(2px); }
        }
        .animate-shake {
          animation: shake 0.6s ease-in-out;
        }
        input::placeholder {
          color: #2E3446;
          letter-spacing: 0.05em;
        }
      `}</style>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense>
      <AuthForm />
    </Suspense>
  );
}
