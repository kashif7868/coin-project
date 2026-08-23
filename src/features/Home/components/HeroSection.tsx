import Image from "next/image";
import Link from "next/link";
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
    <section className="relative overflow-hidden bg-[#070707] text-white">
      {/* DESKTOP BACKGROUND */}
      <div className="absolute inset-0 hidden lg:block">
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

      {/* MOBILE BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0c0b09] to-[#171006] lg:hidden" />

      <div className="relative mx-auto w-full max-w-[1540px]">
        <div className="grid grid-cols-1 lg:min-h-[420px] lg:grid-cols-[40%_33%_27%]">
          {/* LEFT CONTENT */}
          <div className="relative z-10 flex flex-col justify-center px-4 pb-5 pt-6 sm:px-6 sm:py-8 lg:px-7 lg:py-7">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-md border border-[#b77a1f]/40 bg-[#b77a1f]/10 px-3 py-1.5">
              <Sparkles
                size={12}
                strokeWidth={1.8}
                className="text-[#d89a2b]"
              />

              <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[#d89a2b] lg:text-[10px]">
                AI Powered Coin Identification
              </span>
            </div>

            <h1 className="max-w-[560px] font-serif text-[34px] font-semibold leading-[1.07] tracking-[-0.025em] sm:text-[42px] lg:text-[48px] xl:text-[50px]">
              Discover Rare Coins.
              <br />
              Own a Piece of{" "}
              <span className="text-[#d99a31]">
                History.
              </span>
            </h1>

            <p className="mt-4 max-w-[460px] text-[13px] leading-5 text-white/70 sm:text-[14px] lg:text-[15px] lg:leading-6">
              Scan or upload any coin to get instant details, history,
              value and add it to your collection.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:flex">
              <Link
                href="/scan"
                className="inline-flex h-[44px] items-center justify-center gap-2 rounded-md bg-[#dfa02d] px-5 text-[12px] font-semibold text-black transition hover:bg-[#ebb247] lg:text-[13px]"
              >
                <Camera size={16} strokeWidth={1.8} />
                Scan a Coin
              </Link>

              <Link
                href="/scan?mode=upload"
                className="inline-flex h-[44px] items-center justify-center gap-2 rounded-md border border-[#a87527] bg-black/20 px-5 text-[12px] font-semibold text-white transition hover:bg-white/5 lg:text-[13px]"
              >
                <Upload size={16} strokeWidth={1.8} />
                Upload Images
              </Link>
            </div>

            {/* TRUST ROW */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:max-w-[590px] lg:gap-x-4">
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
                title="Worldwide Shipping"
                subtitle="Fast & Reliable"
              />
            </div>
          </div>

          {/* DESKTOP COIN ART */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[310px] w-[310px] rounded-full bg-[#b8751d]/10 blur-3xl" />
            </div>

            <Image
              src="/images/home/hero-coins.webp"
              alt="British India historical coins"
              fill
              priority
              sizes="520px"
              className="object-contain object-center scale-[1.08]"
            />
          </div>

          {/* AI SCANNER */}
          <div className="relative z-10 px-4 pb-7 pt-2 sm:px-6 lg:flex lg:items-center lg:justify-end lg:px-5 lg:py-4 lg:pr-6">
            <div className="mx-auto w-full max-w-[390px] rounded-[16px] bg-[#fffefd] p-4 text-[#151515] shadow-[0_20px_55px_rgba(0,0,0,0.28)] lg:mx-0 lg:max-w-[350px] lg:p-5">
              <div className="flex items-center gap-2">
                <Sparkles
                  size={16}
                  strokeWidth={1.8}
                  className="text-[#c88925]"
                />

                <h2 className="text-[14px] font-semibold lg:text-[15px]">
                  AI Coin Scanner
                </h2>
              </div>

              <p className="mt-1.5 text-[10px] leading-[16px] text-neutral-500 lg:text-[11px]">
                Get instant details about any coin using our AI technology.
              </p>

              <div className="mt-4 flex min-h-[190px] flex-col items-center justify-center rounded-[12px] border border-dashed border-[#ddb978] bg-[#fffdfa] px-5 text-center lg:min-h-[225px]">
                <div className="flex h-[62px] w-[62px] items-center justify-center rounded-[20px] bg-[#f8f2e9] lg:h-[68px] lg:w-[68px]">
                  <Camera
                    size={25}
                    strokeWidth={1.6}
                  />
                </div>

                <p className="mt-3 text-[12px] font-medium lg:text-[13px]">
                  Scan with camera
                </p>

                <p className="mt-1 text-[10px] leading-[16px] text-neutral-500 lg:text-[11px]">
                  or upload coin images
                  <br />
                  (Obverse & Reverse)
                </p>

                <Link
                  href="/scan"
                  className="mt-4 inline-flex h-[38px] items-center justify-center rounded-md bg-[#12171c] px-6 text-[11px] font-semibold text-white transition hover:bg-black"
                >
                  Start Scanning
                </Link>
              </div>

              <p className="mt-3 text-center text-[9px] text-neutral-400">
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
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const TrustItem = ({
  icon,
  title,
  subtitle,
}: TrustItemProps) => {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-black/20 p-2 lg:border-0 lg:bg-black/30 lg:px-2 lg:py-2">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/[0.05] text-[#d99a31]">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="whitespace-nowrap text-[9px] font-semibold text-white lg:text-[10px]">
          {title}
        </p>

        <p className="mt-0.5 whitespace-nowrap text-[8px] text-white/45">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;