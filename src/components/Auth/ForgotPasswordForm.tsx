"use client";

import {
  ArrowLeft,
  Mail,
} from "lucide-react";
import {
  useState,
  type FormEvent,
} from "react";
import { toast } from "sonner";

interface ForgotPasswordFormProps {
  onBackToLogin: () => void;
}

const emailPattern =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ForgotPasswordForm = ({
  onBackToLogin,
}: ForgotPasswordFormProps) => {
  const [email, setEmail] =
    useState("");
  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const cleanEmail = email.trim();

    if (!cleanEmail) {
      toast.error(
        "Please enter your email address."
      );
      return;
    }

    if (!emailPattern.test(cleanEmail)) {
      toast.error(
        "Please enter a valid email address."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      // Later:
      // forgotPasswordMutation.mutate({
      //   email: cleanEmail,
      // });

      await new Promise((resolve) =>
        setTimeout(resolve, 700)
      );

      toast.success(
        "Reset link request received",
        {
          description:
            "Password reset API will be connected with the backend later.",
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-w-0">
      <button
        type="button"
        onClick={onBackToLogin}
        disabled={isSubmitting}
        className="mb-4 inline-flex items-center gap-2 rounded-lg text-[10px] font-medium text-neutral-500 transition-colors hover:text-[#b87516] disabled:cursor-not-allowed disabled:opacity-50 sm:mb-5 sm:text-[11px]"
      >
        <ArrowLeft
          size={15}
          strokeWidth={1.8}
        />

        Back to Sign In
      </button>

      <div className="mb-5 min-w-0 sm:mb-6">
        <h2 className="font-serif text-[22px] font-semibold leading-tight text-neutral-900 sm:text-2xl">
          Forgot Password?
        </h2>

        <p className="mt-2 text-[11px] leading-5 text-neutral-500 sm:text-[12px]">
          Enter the email linked with your CoinHeritage account.
          We&apos;ll send password reset instructions when the
          backend authentication service is connected.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full min-w-0 space-y-4 sm:space-y-5"
        noValidate
      >
        <div className="min-w-0">
          <label
            htmlFor="forgotEmail"
            className="mb-2 block text-[11px] font-medium text-neutral-700 sm:text-[12px]"
          >
            Email Address
          </label>

          <div className="relative min-w-0">
            <Mail
              size={17}
              strokeWidth={1.8}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 sm:left-4"
            />

            <input
              id="forgotEmail"
              type="email"
              inputMode="email"
              autoComplete="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              placeholder="Enter your email"
              disabled={isSubmitting}
              className="h-11 w-full min-w-0 rounded-xl border border-neutral-200 bg-white pl-10 pr-3 text-[12px] text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-[#d99a31] focus:ring-2 focus:ring-[#d99a31]/10 disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:text-neutral-500 sm:h-12 sm:pl-11 sm:pr-4 sm:text-sm"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-11 w-full items-center justify-center rounded-xl bg-[#d99a31] px-4 text-[12px] font-semibold text-black shadow-[0_10px_24px_rgba(217,154,49,0.18)] transition-colors hover:bg-[#e6aa43] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:h-12 sm:text-sm"
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