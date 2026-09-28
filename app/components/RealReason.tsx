"use client";

import { motion } from "framer-motion";

interface RealReasonProps {
  onNext: () => void;
}

export default function RealReason({ onNext }: RealReasonProps) {
  return (
    <section className="page-shell flex min-h-screen items-center py-16 sm:py-20">
      <div className="content-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex items-end justify-between border-b border-white/[0.08] pb-6"
        >
          <div className="eyebrow">L / 05</div>

          <div className="hidden text-[9px] uppercase tracking-[0.25em] text-[#4f4a45] sm:block">
            The actual reason
          </div>
        </motion.div>

        {/* Main */}
        <div className="grid min-h-[65vh] items-center gap-14 lg:grid-cols-[0.3fr_1fr] lg:gap-20">
          {/* Side label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.7,
            }}
            className="hidden lg:block"
          >
            <div className="flex items-center gap-4">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                }}
                className="h-px bg-[#e9d8c7]/40"
              />

              <span className="text-[9px] uppercase tracking-[0.22em] text-[#5a554f]">
                Plot twist
              </span>
            </div>

            <p className="mt-5 max-w-[150px] text-[10px] leading-5 text-[#403c38]">
              The research phase is officially over.
            </p>
          </motion.div>

          {/* Content */}
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="eyebrow mb-8"
            >
              Okay.
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 35,
                filter: "blur(12px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                delay: 0.35,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="display-text text-[clamp(3.8rem,9vw,8rem)] font-medium"
            >
              I&apos;LL
              <br />
              BE HONEST
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

            {/* Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1,
                duration: 0.7,
              }}
              className="mt-10 max-w-xl"
            >
              <p className="text-lg leading-8 text-[#aaa39c] sm:text-xl">
                This website wasn&apos;t really about getting to know you.
              </p>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  delay: 1.25,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="my-7 h-px max-w-sm bg-white/[0.08]"
              />

              <p className="text-base leading-8 text-[#77716b]">
                I already wanted to ask you something.
              </p>

              <motion.div
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 1.55,
                  duration: 0.7,
                }}
                className="mt-6 flex items-start gap-4"
              >
                <span className="mt-3 h-px w-8 shrink-0 bg-[#e9d8c7]/50" />

                <div>
                  <p className="text-base leading-8 text-[#9a938c]">
                    I just thought...
                  </p>

                  <p className="mt-1 text-lg font-medium leading-8 text-[#e9d8c7] sm:text-xl">
                    making a website would be more interesting.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 2,
                duration: 0.7,
              }}
              className="mt-14"
            >
              <motion.button
                onClick={onNext}
                whileHover="hover"
                whileTap={{
                  scale: 0.97,
                }}
                className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.18em] text-[#dcd5ce]"
              >
                <span className="relative">
                  There&apos;s more

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
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] transition-all duration-300 group-hover:border-[#e9d8c7]/40 group-hover:bg-[#e9d8c7] group-hover:text-[#11100f]"
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.25,
            duration: 0.8,
          }}
          className="hidden items-center justify-between sm:flex"
        >
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#45413d]">
            No elaborate explanation required
          </span>

          <span className="text-[9px] uppercase tracking-[0.25em] text-[#45413d]">
            05 / 07
          </span>
        </motion.div>
      </div>
    </section>
  );
}