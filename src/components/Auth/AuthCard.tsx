import Link from "next/link";
import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";

interface AuthCardProps {
  title: string;
  description: string;
  children: ReactNode;
  footerText?: string;
  footerLinkText?: string;
  footerHref?: string;
}

const AuthCard = ({
  title,
  description,
  children,
  footerText,
  footerLinkText,
  footerHref,
}: AuthCardProps) => {
  return (
    <div className="w-full max-w-[460px]">
      <div className="overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.10)]">
        {/* BRAND */}
        <div className="border-b border-neutral-100 px-6 py-5 sm:px-7">
          <Link
            href="/"
            className="inline-flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d99a31]/30 bg-gradient-to-br from-[#f2c56c] via-[#d99a31] to-[#8a5917] shadow-[0_8px_24px_rgba(217,154,49,0.20)]">
              <span className="font-serif text-[13px] font-bold text-black/70">
                CH
              </span>
            </div>

            <div>
              <p className="font-serif text-[20px] font-semibold leading-none text-neutral-900">
                Coin
                <span className="text-[#c88925]">
                  Heritage
                </span>
              </p>

              <p className="mt-1 text-[8px] uppercase tracking-[0.13em] text-neutral-400">
                Discover. Collect. Own History.
              </p>
            </div>
          </Link>
        </div>

        {/* CONTENT */}
        <div className="px-6 py-6 sm:px-7 sm:py-7">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d99a31]/20 bg-[#d99a31]/10 px-3 py-1.5">
              <Sparkles
                size={12}
                className="text-[#c88925]"
              />

              <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#b87516]">
                CoinHeritage Account
              </span>
            </div>

            <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-neutral-900">
              {title}
            </h1>

            <p className="mt-2 text-[13px] leading-5 text-neutral-500">
              {description}
            </p>
          </div>

          {children}
        </div>

        {footerText &&
          footerLinkText &&
          footerHref && (
            <div className="border-t border-neutral-100 bg-[#fffdf9] px-6 py-4 text-center sm:px-7">
              <span className="text-[11px] text-neutral-500">
                {footerText}{" "}
              </span>

              <Link
                href={footerHref}
                className="text-[11px] font-semibold text-[#b87516] transition-colors hover:text-[#8f5c13]"
              >
                {footerLinkText}
              </Link>
            </div>
          )}
      </div>
    </div>
  );
};

export default AuthCard;