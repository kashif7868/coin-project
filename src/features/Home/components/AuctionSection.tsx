"use client";

import Image from "next/image";
import { Gavel } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

import { useAuthStore } from "@/store/authStore";
import { useUIStore } from "@/store/uiStore";

const AUCTION_END = new Date("2026-08-26T23:59:59").getTime();

const AuctionSection = () => {
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  const openAuthRequired = useUIStore(
    (state) => state.openAuthRequired
  );

  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const remaining = useMemo(() => {
    const difference = Math.max(AUCTION_END - now, 0);

    const days = Math.floor(
      difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
      (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
      (difference / 1000) % 60
    );

    return {
      days,
      hours,
      minutes,
      seconds,
      ended: difference === 0,
    };
  }, [now]);

  const handleBid = () => {
    if (!isAuthenticated) {
      openAuthRequired();
      return;
    }

    if (remaining.ended) {
      toast.error("This auction has ended");
      return;
    }

    // Later:
    // open bid modal or call auction API.

    toast.info("Bid panel coming next", {
      description: "British India 1/2 Anna · Current bid $42.00",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full overflow-hidden rounded-2xl bg-[#0b1115] text-white shadow-[0_14px_34px_rgba(0,0,0,0.16)]"
    >
      <div className="grid min-h-[300px] grid-cols-1 sm:grid-cols-2">
        {/* LEFT */}
        <div className="flex min-w-0 flex-col justify-center p-5">
          <div className="inline-flex w-fit items-center gap-2 rounded-md border border-[#d99a31]/30 bg-[#d99a31]/10 px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>

            <Gavel
              size={12}
              strokeWidth={1.8}
              className="text-[#d99a31]"
            />

            <span className="text-[9px] font-semibold text-[#d99a31]">
              Live Auction
            </span>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-2">
            <TimeBox
              value={remaining.days}
              label="Days"
            />

            <TimeBox
              value={remaining.hours}
              label="Hours"
            />

            <TimeBox
              value={remaining.minutes}
              label="Min"
            />

            <TimeBox
              value={remaining.seconds}
              label="Sec"
            />
          </div>

          <div className="mt-5">
            <h3 className="text-[13px] font-semibold leading-5">
              British India 1/2 Anna
            </h3>

            <p className="mt-1 text-[9px] text-white/55">
              1943 · George VI
            </p>

            <p className="mt-1.5 text-[9px] font-medium text-emerald-400">
              Rare Find
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-[8px] text-white/45">
                Current Bid
              </p>

              <p className="mt-1 text-[15px] font-semibold">
                $42.00
              </p>
            </div>

            <div className="text-right">
              <p className="text-[8px] text-white/45">
                Total Bids
              </p>

              <p className="mt-1 text-[12px] font-semibold">
                18
              </p>
            </div>
          </div>

          <motion.button
            type="button"
            onClick={handleBid}
            whileHover={{
              y: -1,
            }}
            whileTap={{
              scale: 0.97,
            }}
            disabled={remaining.ended}
            className="mt-4 flex h-10 w-full items-center justify-center rounded-lg bg-[#dfa02d] text-[10px] font-semibold text-black transition-colors hover:bg-[#eab148] disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/35"
          >
            {remaining.ended
              ? "Auction Ended"
              : "Place a Bid"}
          </motion.button>
        </div>

        {/* RIGHT */}
        <div className="relative min-h-[260px] overflow-hidden sm:min-h-[300px]">
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="absolute inset-0"
          >
            <Image
              src="/images/home/auction-coin.webp"
              alt="British India Half Anna live auction"
              fill
              sizes="320px"
              className="object-cover object-center"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1115]/40 via-transparent to-transparent" />

          <div className="absolute bottom-3 right-3 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 backdrop-blur-md">
            <span className="text-[8px] font-medium text-white/70">
              Verified Auction
            </span>
          </div>
        </div>
      </div>

      <div className="flex h-9 items-center justify-center gap-2 border-t border-white/[0.07]">
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
      </div>
    </motion.div>
  );
};

interface TimeBoxProps {
  value: number;
  label: string;
}

const TimeBox = ({
  value,
  label,
}: TimeBoxProps) => {
  return (
    <div className="rounded-md border border-white/[0.05] bg-white/[0.05] px-1 py-2 text-center">
      <motion.p
        key={value}
        initial={{
          opacity: 0.4,
          y: -2,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="text-[12px] font-semibold leading-none"
      >
        {String(value).padStart(2, "0")}
      </motion.p>

      <p className="mt-1 text-[6px] text-white/40">
        {label}
      </p>
    </div>
  );
};

export default AuctionSection;