"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Send, ChevronDown } from "lucide-react";

const inquiryTypes = [
  { value: "investor", label: "Investor", description: "Explore investment and capital partnership opportunities" },
  { value: "operator", label: "Cruise Operator", description: "Discuss programming and vessel partnership models" },
  { value: "talent", label: "Talent / Celebrity Representation", description: "Explore branded voyage concepts built around you" },
  { value: "sponsor", label: "Sponsor / Brand Partner", description: "Access premium immersive brand opportunities at sea" },
  { value: "collaborator", label: "Strategic Collaborator", description: "Discuss concept co-development or capability partnerships" },
  { value: "general", label: "General Inquiry", description: "Any other inquiry or conversation starter" },
];

export function InquiryForm({ defaultType = "" }: { defaultType?: string }) {
  const [type, setType] = useState(defaultType);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!type) e.type = "Please select your inquiry type.";
    if (!form.name.trim()) e.name = "Your name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "A valid email address is required.";
    if (!form.message.trim() || form.message.length < 20)
      e.message = "Please provide a brief message (at least 20 characters).";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const first = document.querySelector("[data-field-error]");
      (first as HTMLElement)?.focus();
      return;
    }
    setErrors({});
    setLoading(true);
    // TODO: Wire to actual form backend / API
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const selectedType = inquiryTypes.find((t) => t.value === type);

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="p-10 rounded-sm text-center"
        style={{
          background: "linear-gradient(135deg, rgba(0,200,224,0.06) 0%, rgba(255,255,255,0.02) 100%)",
          border: "1px solid rgba(0,200,224,0.2)",
        }}
      >
        <CheckCircle className="mx-auto mb-5 text-cyan-DEFAULT" size={40} strokeWidth={1.5} aria-hidden />
        <h3
          className="text-fg-primary mb-3"
          style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.75rem", fontWeight: 500 }}
        >
          Message received.
        </h3>
        <p className="text-fg-muted text-sm leading-relaxed max-w-sm mx-auto">
          Thank you for reaching out. A member of the EmbarqX team will be in
          touch within 2 business days to continue the conversation.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Partnership inquiry form">
      {/* Inquiry type selector */}
      <fieldset className="mb-8">
        <legend className="label-tag text-fg-muted mb-5 block">
          I am reaching out as a <span className="text-cyan-DEFAULT">*</span>
        </legend>
        {errors.type && (
          <p role="alert" className="text-red-400 text-xs mb-3" data-field-error tabIndex={-1}>
            {errors.type}
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {inquiryTypes.map((t) => (
            <label
              key={t.value}
              className="relative flex flex-col gap-1 p-4 rounded-sm cursor-pointer transition-all duration-200"
              style={
                type === t.value
                  ? {
                      background: "rgba(0,200,224,0.07)",
                      border: "1px solid rgba(0,200,224,0.3)",
                    }
                  : {
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }
              }
            >
              <input
                type="radio"
                name="inquiryType"
                value={t.value}
                checked={type === t.value}
                onChange={() => setType(t.value)}
                className="sr-only"
                aria-describedby={`type-desc-${t.value}`}
              />
              <span
                className="text-xs font-semibold uppercase tracking-[0.08em]"
                style={{ color: type === t.value ? "#00C8E0" : "var(--fg-secondary)" }}
              >
                {t.label}
              </span>
              <span id={`type-desc-${t.value}`} className="text-fg-subtle text-[0.65rem] leading-snug">
                {t.description}
              </span>
              {type === t.value && (
                <div
                  className="absolute top-3 right-3 w-2 h-2 rounded-full"
                  style={{ background: "#00C8E0" }}
                  aria-hidden
                />
              )}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="inquiry-name" className="label-tag text-fg-muted block mb-2">
            Full Name <span className="text-cyan-DEFAULT" aria-hidden>*</span>
          </label>
          <input
            id="inquiry-name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="w-full px-4 py-3 text-sm bg-glass border rounded-sm text-fg-primary placeholder-fg-subtle focus:outline-none transition-all duration-200"
            style={{
              border: errors.name ? "1px solid rgba(220,38,38,0.5)" : "1px solid rgba(255,255,255,0.1)",
            }}
            placeholder="Your full name"
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-red-400 text-xs mt-1.5">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="inquiry-email" className="label-tag text-fg-muted block mb-2">
            Email Address <span className="text-cyan-DEFAULT" aria-hidden>*</span>
          </label>
          <input
            id="inquiry-email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full px-4 py-3 text-sm bg-glass border rounded-sm text-fg-primary placeholder-fg-subtle focus:outline-none transition-all duration-200"
            style={{
              border: errors.email ? "1px solid rgba(220,38,38,0.5)" : "1px solid rgba(255,255,255,0.1)",
            }}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-red-400 text-xs mt-1.5">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="inquiry-company" className="label-tag text-fg-muted block mb-2">
          Company / Organization <span className="text-fg-subtle">(Optional)</span>
        </label>
        <input
          id="inquiry-company"
          type="text"
          autoComplete="organization"
          value={form.company}
          onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
          className="w-full px-4 py-3 text-sm bg-glass border border-border rounded-sm text-fg-primary placeholder-fg-subtle focus:outline-none transition-all duration-200 focus:border-border-strong"
          placeholder="Your company or organization"
        />
      </div>

      <div className="mb-8">
        <label htmlFor="inquiry-message" className="label-tag text-fg-muted block mb-2">
          Your Message <span className="text-cyan-DEFAULT" aria-hidden>*</span>
        </label>
        <textarea
          id="inquiry-message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : "message-hint"}
          className="w-full px-4 py-3 text-sm bg-glass border rounded-sm text-fg-primary placeholder-fg-subtle focus:outline-none transition-all duration-200 resize-none"
          style={{
            border: errors.message ? "1px solid rgba(220,38,38,0.5)" : "1px solid rgba(255,255,255,0.1)",
          }}
          placeholder={
            selectedType
              ? `Tell us about your ${selectedType.label.toLowerCase()} interest — what you're looking to explore, your background, and any relevant context that would help us prepare for a conversation.`
              : "Tell us about your interest and how you envision working with EmbarqX."
          }
        />
        <p id="message-hint" className="text-fg-subtle text-xs mt-1.5">
          All conversations are treated with complete discretion.
        </p>
        {errors.message && (
          <p id="message-error" role="alert" className="text-red-400 text-xs mt-1.5">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        aria-label={loading ? "Sending your message..." : "Submit inquiry"}
      >
        {loading ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
              <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={14} />
          </>
        )}
      </button>
    </form>
  );
}
