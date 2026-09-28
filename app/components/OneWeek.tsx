"use client";

import { motion } from "framer-motion";

interface OneWeekProps {
  onNext: () => void;
}

const moments = [
  {
    number: "01",
    label: "THE START",
    text: "We met at a club.",
  },
  {
    number: "02",
    label: "THE LOOK",
    text: "There was some eye contact.",
  },
  {
    number: "03",
    label: "THE MOMENT",
    text: "There was some dancing.",
  },
  {
    number: "04",
    label: "THE PLOT TWIST",
    text: "Then somehow... we kept talking.",
  },
];

export default function OneWeek({ onNext }: OneWeekProps) {
  return (
    <section className="page-shell flex min-h-screen items-center py-20 sm:py-24">
      <div className="content-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-end justify-between border-b border-white/[0.08] pb-6"
        >
          <div className="eyebrow">L / 02</div>

          <div className="hidden text-[9px] uppercase tracking-[0.25em] text-[#4f4a45] sm:block">
            The beginning
          </div>
        </motion.div>

        {/* Main */}
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="eyebrow mb-7"
            >
              Current status
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: 0.2,
                duration: 0.95,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="display-text text-[clamp(5rem,12vw,10rem)] font-medium"
            >
              ONE
              <br />
              <span className="relative inline-block">
                WEEK
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    delay: 0.9,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute bottom-[7%] left-0 h-[2px] bg-[#e9d8c7]/40"
                />
              </span>
              <motion.span
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-[#e9d8c7]"
              >
                .
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-7 text-lg text-[#aaa39c]"
            >
              That&apos;s it.
            </motion.p>
          </div>

          <div className="flex flex-col justify-end lg:pb-3">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="max-w-xl text-base leading-8 text-[#858079] sm:text-lg"
            >
              We haven&apos;t known each other for very long.
              <br />
              Which makes this whole thing slightly ridiculous.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7 }}
              className="mt-5 max-w-md text-sm leading-7 text-[#5f5a54]"
            >
              But sometimes a week is enough to make you curious about what
              happens next.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 80 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mt-7 h-px bg-[#e9d8c7]/30"
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 0.65,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="origin-left border-t border-white/[0.08]"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {moments.map((moment, index) => (
              <motion.div
                key={moment.number}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.8 + index * 0.12,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.25 },
                }}
                className="group relative min-h-[190px] border-b border-white/[0.08] p-6 transition-colors duration-300 hover:bg-white/[0.025] sm:border-r lg:border-b-0"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.18em] text-[#55504b]">
                    {moment.number}
                  </span>

                  <motion.span
                    animate={{
                      opacity: [0.35, 0.7, 0.35],
                    }}
                    transition={{
                      delay: index * 0.3,
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-[#3a3632] transition-colors duration-300 group-hover:bg-[#e9d8c7]"
                  />
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-[9px] font-bold tracking-[0.2em] text-[#706a63]">
                    {moment.label}
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[#aaa39c] transition-colors duration-300 group-hover:text-[#eee9e2]">
                    {moment.text}
                  </p>
                </div>

                <motion.span
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="absolute bottom-0 left-0 h-px bg-[#e9d8c7]/60"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="mt-2 h-px bg-[#e9d8c7]/50"
            />

            <p className="max-w-md text-sm italic leading-7 text-[#8e8780]">
              Honestly, that&apos;s a pretty interesting start.
            </p>
          </div>

          <motion.button
            onClick={onNext}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="secondary-button sm:w-auto"
          >
            Continue
            <span>→</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}