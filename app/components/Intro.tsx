"use client";

import { motion } from "framer-motion";

interface IntroProps {
  onNext: () => void;
}

export default function Intro({ onNext }: IntroProps) {
  return (
    <section className="page-shell flex min-h-screen items-center">
      <div className="soft-glow left-[-180px] top-[-180px]" />

      <div className="content-width relative z-10">
        {/* Top bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-center justify-between"
        >
          <div className="eyebrow">L / 01</div>

          <div className="text-[9px] uppercase tracking-[0.25em] text-[#4f4a45]">
            one small question
          </div>
        </motion.div>

        <div className="max-w-5xl">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-7 text-xs font-medium uppercase tracking-[0.2em] text-[#77716b]"
          >
            Hey, Lisa.
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: 0.3,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="display-text text-[clamp(4rem,11vw,9rem)] font-medium"
          >
            I made
            <br />
            something
            <motion.span
              className="inline-block text-[#e9d8c7]"
              animate={{
                opacity: [0.45, 1, 0.45],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              .
            </motion.span>
          </motion.h1>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
            className="mt-10 max-w-md"
          >
            <p className="text-lg leading-8 text-[#aaa39c] sm:text-xl">
              For you.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{
                  delay: 1.15,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-px bg-[#e9d8c7]/40"
              />

              <p className="text-xs leading-6 text-[#68625c]">
                Don&apos;t worry.
                <br />
                It&apos;s not weird.
                <br />
                Probably.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.7 }}
            className="mt-12"
          >
            <motion.button
              onClick={onNext}
              whileHover="hover"
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.18em] text-[#dcd5ce]"
            >
              <span className="relative">
                Let&apos;s see

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#e9d8c7] transition-all duration-300 group-hover:w-full" />
              </span>

              <motion.span
                variants={{
                  hover: {
                    x: 5,
                  },
                }}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] transition-all duration-300 group-hover:border-[#e9d8c7]/40 group-hover:bg-[#e9d8c7] group-hover:text-[#11100f]"
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.8 }}
          className="absolute bottom-8 left-0 right-0 hidden items-center justify-between sm:flex"
        >
          <div className="flex items-center gap-3">
            <motion.span
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1 w-1 rounded-full bg-[#e9d8c7]"
            />

            <span className="text-[9px] uppercase tracking-[0.25em] text-[#45413d]">
              A tiny interactive experiment
            </span>
          </div>

          <span className="text-[9px] uppercase tracking-[0.25em] text-[#45413d]">
            01 / 07
          </span>
        </motion.div>
      </div>
    </section>
  );
}