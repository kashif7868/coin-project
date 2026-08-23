"use client";

import { ArrowLeft, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

interface ForgotPasswordFormProps {
  onBackToLogin: () => void;
}

const ForgotPasswordForm = ({
  onBackToLogin,
}: ForgotPasswordFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const cleanEmail = email.trim();

    if (!cleanEmail) {
      toast.error("Please enter your email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) =>
        setTimeout(resolve, 700)
      );

      toast.success("Reset link request received", {
        description:
          "Password reset API will be connected with the backend later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={onBackToLogin}
        className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium text-neutral-500 transition-colors hover:text-[#b87516]"
      >
        <ArrowLeft size={15} strokeWidth={1.8} />
        Back to Sign In
      </button>

      <div className="mb-6">
        <h2 className="font-serif text-2xl font-semibold text-neutral-900">
          Forgot Password?
        </h2>

        <p className="mt-2 text-[12px] leading-5 text-neutral-500">
          Enter the email linked with your CoinHeritage account. We’ll send
          password reset instructions when the backend authentication service is
          connected.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <div>
          <label
            htmlFor="forgotEmail"
            className="mb-2 block text-[12px] font-medium text-neutral-700"
          >
            Email Address
          </label>

          <div className="relative">
            <Mail
              size={17}
              strokeWidth={1.8}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
            />

            <input
              id="forgotEmail"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              placeholder="Enter your email"
              className="h-12 w-full rounded-xl border border-neutral-200 bg-white pl-11 pr-4 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-[#d99a31] focus:ring-2 focus:ring-[#d99a31]/10"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-12 w-full items-center justify-center rounded-xl bg-[#d99a31] text-sm font-semibold text-black shadow-[0_10px_24px_rgba(217,154,49,0.18)] transition-colors hover:bg-[#e6aa43] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting
            ? "Sending..."
            : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;