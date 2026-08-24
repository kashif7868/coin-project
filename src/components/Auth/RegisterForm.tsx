"use client";

import Link from "next/link";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
} from "lucide-react";
import {
  useState,
  type FormEvent,
} from "react";
import { toast } from "sonner";

const emailPattern =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RegisterForm = () => {
  const [fullName, setFullName] =
    useState("");
  const [email, setEmail] =
    useState("");
  const [password, setPassword] =
    useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");
  const [acceptedTerms, setAcceptedTerms] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const cleanName = fullName.trim();
    const cleanEmail = email.trim();

    if (
      !cleanName ||
      !cleanEmail ||
      !password ||
      !confirmPassword
    ) {
      toast.error(
        "Please complete all required fields."
      );
      return;
    }

    if (!emailPattern.test(cleanEmail)) {
      toast.error(
        "Please enter a valid email address."
      );
      return;
    }

    if (password.length < 8) {
      toast.error(
        "Password must be at least 8 characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      toast.error(
        "Passwords do not match."
      );
      return;
    }

    if (!acceptedTerms) {
      toast.error(
        "Please accept the Terms and Privacy Policy."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      // Later:
      // registerMutation.mutate({
      //   fullName: cleanName,
      //   email: cleanEmail,
      //   password,
      // });

      await new Promise((resolve) =>
        setTimeout(resolve, 700)
      );

      toast.success(
        "Registration form is ready",
        {
          description:
            "Backend account creation will be connected later.",
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full min-w-0 space-y-4 sm:space-y-5"
      noValidate
    >
      {/* Full Name */}
      <div className="min-w-0">
        <label
          htmlFor="fullName"
          className="mb-2 block text-[11px] font-medium text-neutral-700 sm:text-[12px]"
        >
          Full Name
        </label>

        <div className="relative min-w-0">
          <UserRound
            size={17}
            strokeWidth={1.8}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 sm:left-4"
          />

          <input
            id="fullName"
            type="text"
            autoComplete="name"
            value={fullName}
            onChange={(event) =>
              setFullName(event.target.value)
            }
            placeholder="Enter your full name"
            disabled={isSubmitting}
            className="h-11 w-full min-w-0 rounded-xl border border-neutral-200 bg-white pl-10 pr-3 text-[12px] text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-[#d99a31] focus:ring-2 focus:ring-[#d99a31]/10 disabled:cursor-not-allowed disabled:bg-neutral-50 sm:h-12 sm:pl-11 sm:pr-4 sm:text-sm"
          />
        </div>
      </div>

      {/* Email */}
      <div className="min-w-0">
        <label
          htmlFor="registerEmail"
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
            id="registerEmail"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            placeholder="Enter your email"
            disabled={isSubmitting}
            className="h-11 w-full min-w-0 rounded-xl border border-neutral-200 bg-white pl-10 pr-3 text-[12px] text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-[#d99a31] focus:ring-2 focus:ring-[#d99a31]/10 disabled:cursor-not-allowed disabled:bg-neutral-50 sm:h-12 sm:pl-11 sm:pr-4 sm:text-sm"
          />
        </div>
      </div>

      {/* Password */}
      <div className="min-w-0">
        <label
          htmlFor="registerPassword"
          className="mb-2 block text-[11px] font-medium text-neutral-700 sm:text-[12px]"
        >
          Password
        </label>

        <div className="relative min-w-0">
          <LockKeyhole
            size={17}
            strokeWidth={1.8}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 sm:left-4"
          />

          <input
            id="registerPassword"
            type={
              showPassword
                ? "text"
                : "password"
            }
            autoComplete="new-password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            placeholder="Create a password"
            disabled={isSubmitting}
            className="h-11 w-full min-w-0 rounded-xl border border-neutral-200 bg-white pl-10 pr-11 text-[12px] text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-[#d99a31] focus:ring-2 focus:ring-[#d99a31]/10 disabled:cursor-not-allowed disabled:bg-neutral-50 sm:h-12 sm:pl-11 sm:pr-12 sm:text-sm"
          />

          <button
            type="button"
            aria-label={
              showPassword
                ? "Hide password"
                : "Show password"
            }
            aria-pressed={showPassword}
            onClick={() =>
              setShowPassword(
                (current) => !current
              )
            }
            disabled={isSubmitting}
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700 disabled:cursor-not-allowed disabled:opacity-50 sm:right-2.5"
          >
            {showPassword ? (
              <EyeOff size={17} />
            ) : (
              <Eye size={17} />
            )}
          </button>
        </div>

        <p className="mt-1.5 text-[9px] text-neutral-400 sm:text-[10px]">
          Use at least 8 characters.
        </p>
      </div>

      {/* Confirm Password */}
      <div className="min-w-0">
        <label
          htmlFor="confirmPassword"
          className="mb-2 block text-[11px] font-medium text-neutral-700 sm:text-[12px]"
        >
          Confirm Password
        </label>

        <div className="relative min-w-0">
          <LockKeyhole
            size={17}
            strokeWidth={1.8}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 sm:left-4"
          />

          <input
            id="confirmPassword"
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(event) =>
              setConfirmPassword(
                event.target.value
              )
            }
            placeholder="Confirm your password"
            disabled={isSubmitting}
            className="h-11 w-full min-w-0 rounded-xl border border-neutral-200 bg-white pl-10 pr-11 text-[12px] text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-[#d99a31] focus:ring-2 focus:ring-[#d99a31]/10 disabled:cursor-not-allowed disabled:bg-neutral-50 sm:h-12 sm:pl-11 sm:pr-12 sm:text-sm"
          />

          <button
            type="button"
            aria-label={
              showConfirmPassword
                ? "Hide confirmed password"
                : "Show confirmed password"
            }
            aria-pressed={showConfirmPassword}
            onClick={() =>
              setShowConfirmPassword(
                (current) => !current
              )
            }
            disabled={isSubmitting}
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700 disabled:cursor-not-allowed disabled:opacity-50 sm:right-2.5"
          >
            {showConfirmPassword ? (
              <EyeOff size={17} />
            ) : (
              <Eye size={17} />
            )}
          </button>
        </div>
      </div>

      {/* Terms */}
      <label className="flex cursor-pointer items-start gap-2">
        <input
          type="checkbox"
          checked={acceptedTerms}
          onChange={(event) =>
            setAcceptedTerms(
              event.target.checked
            )
          }
          disabled={isSubmitting}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-neutral-300 accent-[#d99a31]"
        />

        <span className="min-w-0 text-[9px] leading-4 text-neutral-500 sm:text-[10px]">
          I agree to the{" "}
          <Link
            href="/terms"
            className="font-medium text-[#b87516] hover:text-[#8f5c13]"
          >
            Terms &amp; Conditions
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy-policy"
            className="font-medium text-[#b87516] hover:text-[#8f5c13]"
          >
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex h-11 w-full items-center justify-center rounded-xl bg-[#d99a31] px-4 text-[12px] font-semibold text-black shadow-[0_10px_24px_rgba(217,154,49,0.18)] transition-all hover:bg-[#e6aa43] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:h-12 sm:text-sm"
      >
        {isSubmitting
          ? "Creating Account..."
          : "Create Account"}
      </button>
    </form>
  );
};

export default RegisterForm;