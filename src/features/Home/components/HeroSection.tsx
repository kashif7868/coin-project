import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  Camera,
  Globe2,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Upload,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-w-0 overflow-hidden bg-[#070707] text-white">
      {/* =====================================================
          DESKTOP BACKGROUND
          ===================================================== */}

      <div className="absolute inset-0 hidden xl:block">
        <Image
          src="/images/home/hero-background.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />
      </div>

      {/* =====================================================
          MOBILE / TABLET BACKGROUND
          ===================================================== */}

      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0c0b09] to-[#171006] xl:hidden" />

      {/* =====================================================
          CONTENT CONTAINER
          ===================================================== */}

      <div className="relative mx-auto w-full min-w-0 max-w-[1540px]">
        <div
          className="
            grid w-full min-w-0 grid-cols-1

            lg:grid-cols-[minmax(0,1fr)_360px]
            lg:items-center
            lg:gap-6

            xl:min-h-[440px]
            xl:grid-cols-[minmax(0,1.35fr)_minmax(260px,1fr)_minmax(330px,0.9fr)]
            xl:gap-0
          "
        >
          {/* =================================================
              LEFT CONTENT
              ================================================= */}

          <div className="relative z-10 min-w-0 px-4 pb-5 pt-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 xl:px-7 xl:py-8">
            <div className="inline-flex max-w-full items-center gap-2 rounded-md border border-[#b77a1f]/40 bg-[#b77a1f]/10 px-3 py-1.5">
              <Sparkles
                size={12}
                strokeWidth={1.8}
                className="shrink-0 text-[#d89a2b]"
              />

              <span className="truncate text-[8px] font-semibold uppercase tracking-[0.08em] text-[#d89a2b] min-[360px]:text-[9px] xl:text-[10px]">
                AI Powered Coin Identification
              </span>
            </div>

            <h1
              className="
                mt-4
                max-w-[600px]
                font-serif
                text-[31px]
                font-semibold
                leading-[1.08]
                tracking-[-0.025em]

                min-[360px]:text-[34px]
                sm:text-[42px]
                lg:text-[46px]
                xl:text-[50px]
              "
            >
              Discover Rare Coins.
              <br />
              Own a Piece of{" "}
              <span className="text-[#d99a31]">
                History.
              </span>
            </h1>

            <p className="mt-4 max-w-[470px] text-[12px] leading-5 text-white/70 min-[360px]:text-[13px] sm:text-[14px] lg:text-[15px] lg:leading-6">
              Scan or upload any coin to get instant details,
              history, value and add it to your collection.
            </p>

            {/* ACTIONS */}

            <div className="mt-5 grid w-full max-w-[430px] grid-cols-1 gap-2.5 min-[360px]:grid-cols-2 sm:flex sm:gap-3">
              <Link
                href="/scan"
                className="inline-flex h-11 min-w-0 items-center justify-center gap-2 rounded-lg bg-[#dfa02d] px-4 text-[11px] font-semibold text-black transition hover:bg-[#ebb247] active:scale-[0.98] sm:px-5 sm:text-[12px] xl:text-[13px]"
              >
                <Camera
                  size={16}
                  strokeWidth={1.8}
                  className="shrink-0"
                />

                <span className="whitespace-nowrap">
                  Scan a Coin
                </span>
              </Link>

              <Link
                href="/scan?mode=upload"
                className="inline-flex h-11 min-w-0 items-center justify-center gap-2 rounded-lg border border-[#a87527] bg-black/20 px-4 text-[11px] font-semibold text-white transition hover:bg-white/5 active:scale-[0.98] sm:px-5 sm:text-[12px] xl:text-[13px]"
              >
                <Upload
                  size={16}
                  strokeWidth={1.8}
                  className="shrink-0"
                />

                <span className="whitespace-nowrap">
                  Upload Images
                </span>
              </Link>
            </div>

            {/* TRUST ROW */}

            <div className="mt-6 grid w-full max-w-[600px] grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 xl:gap-x-4">
              <TrustItem
                icon={<Sparkles size={14} />}
                title="AI Identified"
                subtitle="High Accuracy"
              />

              <TrustItem
                icon={<ShieldCheck size={14} />}
                title="Trusted Data"
                subtitle="Verified Sources"
              />

              <TrustItem
                icon={<LockKeyhole size={14} />}
                title="Secure & Safe"
                subtitle="100% Protected"
              />

              <TrustItem
                icon={<Globe2 size={14} />}
                title="Worldwide"
                subtitle="Fast Shipping"
              />
            </div>
          </div>

          {/* =================================================
              CENTER COIN ART — LARGE DESKTOP ONLY
              ================================================= */}

          <div className="relative hidden min-w-0 xl:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[310px] w-[310px] rounded-full bg-[#b8751d]/10 blur-3xl" />
            </div>

            <div className="relative h-[420px] w-full min-w-0">
              <Image
                src="/images/home/hero-coins.webp"
                alt="Historical collectible coins"
                fill
                priority
                sizes="(min-width: 1280px) 32vw, 0px"
                className="object-contain object-center"
              />
            </div>
          </div>

          {/* =================================================
              AI SCANNER
              ================================================= */}

          <div className="relative z-10 min-w-0 px-4 pb-7 pt-1 sm:px-6 lg:px-0 lg:py-7 lg:pr-6 xl:px-5 xl:py-5 xl:pr-6">
            <div
              className="
                mx-auto
                w-full
                min-w-0
                max-w-[520px]
                rounded-2xl
                bg-[#fffefd]
                p-4
                text-[#151515]
                shadow-[0_20px_55px_rgba(0,0,0,0.28)]

                sm:p-5

                lg:mx-0
                lg:max-w-[360px]

                xl:ml-auto
                xl:max-w-[350px]
              "
            >
              <div className="flex min-w-0 items-center gap-2">
                <Sparkles
                  size={16}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#c88925]"
                />

                <h2 className="truncate text-[14px] font-semibold xl:text-[15px]">
                  AI Coin Scanner
                </h2>
              </div>

              <p className="mt-1.5 text-[10px] leading-4 text-neutral-500 xl:text-[11px]">
                Get instant details about any coin using our
                AI technology.
              </p>

              <div
                className="
                  mt-4
                  flex
                  min-h-[180px]
                  w-full
                  min-w-0
                  flex-col
                  items-center
                  justify-center
                  rounded-xl
                  border border-dashed border-[#ddb978]
                  bg-[#fffdfa]
                  px-4
                  py-5
                  text-center

                  sm:min-h-[200px]
                  sm:px-5

                  xl:min-h-[225px]
                "
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-[#f8f2e9] sm:h-[62px] sm:w-[62px] xl:h-[68px] xl:w-[68px]">
                  <Camera
                    size={24}
                    strokeWidth={1.6}
                  />
                </div>

                <p className="mt-3 text-[12px] font-medium xl:text-[13px]">
                  Scan with camera
                </p>

                <p className="mt-1 text-[10px] leading-4 text-neutral-500 xl:text-[11px]">
                  or upload coin images
                  <br />
                  (Obverse &amp; Reverse)
                </p>

                <Link
                  href="/scan"
                  className="mt-4 inline-flex h-9 items-center justify-center rounded-lg bg-[#12171c] px-5 text-[10px] font-semibold text-white transition hover:bg-black active:scale-[0.98] sm:px-6 sm:text-[11px]"
                >
                  Start Scanning
                </Link>
              </div>

              <p className="mt-3 text-center text-[8px] text-neutral-400 sm:text-[9px]">
                Supported formats: JPG, PNG, WEBP
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TrustItemProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

const TrustItem = ({
  icon,
  title,
  subtitle,
}: TrustItemProps) => {
  return (
    <div className="flex min-w-0 items-center gap-2 rounded-lg border border-white/[0.06] bg-black/20 p-2 xl:border-0 xl:bg-black/30 xl:px-2 xl:py-2">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/[0.05] text-[#d99a31]">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="truncate text-[9px] font-semibold text-white xl:text-[10px]">
          {title}
        </p>

        <p className="mt-0.5 truncate text-[7px] text-white/45 sm:text-[8px]">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;