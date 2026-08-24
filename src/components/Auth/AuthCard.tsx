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
    <div className="w-full min-w-0 max-w-[460px]">
      <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.10)] sm:rounded-3xl">
        {/* Brand */}
        <div className="border-b border-neutral-100 px-4 py-4 sm:px-6 sm:py-5 lg:px-7">
          <Link
            href="/"
            aria-label="CoinHeritage home"
            className="inline-flex min-w-0 items-center gap-2.5 sm:gap-3"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d99a31]/30 bg-gradient-to-br from-[#f2c56c] via-[#d99a31] to-[#8a5917] shadow-[0_8px_24px_rgba(217,154,49,0.20)] sm:h-11 sm:w-11">
              <span className="font-serif text-[12px] font-bold text-black/70 sm:text-[13px]">
                CH
              </span>
            </div>

            <div className="min-w-0">
              <p className="whitespace-nowrap font-serif text-[18px] font-semibold leading-none text-neutral-900 sm:text-[20px]">
                Coin
                <span className="text-[#c88925]">
                  Heritage
                </span>
              </p>

              <p className="mt-1 hidden whitespace-nowrap text-[7px] uppercase tracking-[0.12em] text-neutral-400 min-[350px]:block sm:text-[8px] sm:tracking-[0.13em]">
                Discover. Collect. Own History.
              </p>
            </div>
          </Link>
        </div>

        {/* Content */}
        <div className="px-4 py-5 sm:px-6 sm:py-6 lg:px-7 lg:py-7">
          <div className="mb-5 min-w-0 sm:mb-6">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#d99a31]/20 bg-[#d99a31]/10 px-3 py-1.5">
              <Sparkles
                size={12}
                className="shrink-0 text-[#c88925]"
              />

              <span className="truncate text-[8px] font-semibold uppercase tracking-[0.1em] text-[#b87516] sm:text-[9px] sm:tracking-[0.12em]">
                CoinHeritage Account
              </span>
            </div>

            <h1 className="mt-4 break-words font-serif text-[25px] font-semibold leading-tight tracking-tight text-neutral-900 sm:text-[28px] lg:text-3xl">
              {title}
            </h1>

            <p className="mt-2 text-[11px] leading-5 text-neutral-500 sm:text-[12px] lg:text-[13px]">
              {description}
            </p>
          </div>

          <div className="min-w-0">
            {children}
          </div>
        </div>

        {footerText &&
          footerLinkText &&
          footerHref && (
            <div className="border-t border-neutral-100 bg-[#fffdf9] px-4 py-4 text-center sm:px-6 lg:px-7">
              <span className="text-[10px] text-neutral-500 sm:text-[11px]">
                {footerText}{" "}
              </span>

              <Link
                href={footerHref}
                className="text-[10px] font-semibold text-[#b87516] transition-colors hover:text-[#8f5c13] sm:text-[11px]"
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