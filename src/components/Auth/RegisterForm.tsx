"use client";

import Link from "next/link";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

const RegisterForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

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
      toast.error("Please complete all required fields.");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Temporary frontend-only behavior.
      // Later this will call the register API.

      await new Promise((resolve) =>
        setTimeout(resolve, 700)
      );

      toast.success("Registration form is ready", {
        description:
          "Backend account creation will be connected later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* FULL NAME */}
      <div>
        <label
          htmlFor="fullName"
          className="mb-2 block text-[12px] font-medium text-neutral-700"
        >
          Full Name
        </label>

        <div className="relative">
          <UserRound
            size={17}
            strokeWidth={1.8}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
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
            className="h-12 w-full rounded-xl border border-neutral-200 bg-white pl-11 pr-4 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-[#d99a31] focus:ring-2 focus:ring-[#d99a31]/10"
          />
        </div>
      </div>

      {/* EMAIL */}
      <div>
        <label
          htmlFor="registerEmail"
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
            id="registerEmail"
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

      {/* PASSWORD */}
      <div>
        <label
          htmlFor="registerPassword"
          className="mb-2 block text-[12px] font-medium text-neutral-700"
        >
          Password
        </label>

        <div className="relative">
          <LockKeyhole
            size={17}
            strokeWidth={1.8}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
          />

          <input
            id="registerPassword"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            placeholder="Create a password"
            className="h-12 w-full rounded-xl border border-neutral-200 bg-white pl-11 pr-12 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-[#d99a31] focus:ring-2 focus:ring-[#d99a31]/10"
          />

          <button
            type="button"
            aria-label={
              showPassword
                ? "Hide password"
                : "Show password"
            }
            onClick={() =>
              setShowPassword((current) => !current)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 transition-colors hover:text-neutral-700"
          >
            {showPassword ? (
              <EyeOff size={17} />
            ) : (
              <Eye size={17} />
            )}
          </button>
        </div>

        <p className="mt-1.5 text-[10px] text-neutral-400">
          Use at least 8 characters.
        </p>
      </div>

      {/* CONFIRM PASSWORD */}
      <div>
        <label
          htmlFor="confirmPassword"
          className="mb-2 block text-[12px] font-medium text-neutral-700"
        >
          Confirm Password
        </label>

        <div className="relative">
          <LockKeyhole
            size={17}
            strokeWidth={1.8}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
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
              setConfirmPassword(event.target.value)
            }
            placeholder="Confirm your password"
            className="h-12 w-full rounded-xl border border-neutral-200 bg-white pl-11 pr-12 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-[#d99a31] focus:ring-2 focus:ring-[#d99a31]/10"
          />

          <button
            type="button"
            aria-label={
              showConfirmPassword
                ? "Hide confirmed password"
                : "Show confirmed password"
            }
            onClick={() =>
              setShowConfirmPassword(
                (current) => !current
              )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 transition-colors hover:text-neutral-700"
          >
            {showConfirmPassword ? (
              <EyeOff size={17} />
            ) : (
              <Eye size={17} />
            )}
          </button>
        </div>
      </div>

      {/* TERMS */}
      <label className="flex cursor-pointer items-start gap-2">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-neutral-300 accent-[#d99a31]"
        />

        <span className="text-[10px] leading-4 text-neutral-500">
          I agree to the{" "}
          <Link
            href="/terms"
            className="font-medium text-[#b87516]"
          >
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy-policy"
            className="font-medium text-[#b87516]"
          >
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex h-12 w-full items-center justify-center rounded-xl bg-[#d99a31] text-sm font-semibold text-black shadow-[0_10px_24px_rgba(217,154,49,0.18)] transition-all hover:bg-[#e6aa43] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting
          ? "Creating Account..."
          : "Create Account"}
      </button>

      {/* EXISTING USER */}
      <div className="relative py-1">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-neutral-200" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-[10px] uppercase tracking-[0.1em] text-neutral-400">
            Already a member?
          </span>
        </div>
      </div>

      <Link
        href="/login"
        className="flex h-12 w-full items-center justify-center rounded-xl border border-neutral-200 bg-white text-sm font-semibold text-neutral-800 transition-all hover:border-[#d99a31]/50 hover:bg-[#fffaf2]"
      >
        Sign In
      </Link>
    </form>
  );
};

export default RegisterForm;