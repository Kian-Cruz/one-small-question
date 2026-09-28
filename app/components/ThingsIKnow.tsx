"use client";

import { motion } from "framer-motion";

interface ThingsIKnowProps {
  onNext: () => void;
}

const discoveries = [
  {
    number: "01",
    title: "CHEESECAKE",
    note: "Important information.",
    description: "This has been officially added to the research.",
    tag: "NOTED",
  },
  {
    number: "02",
    title: "MUSIC",
    note: "Okay, we have this.",
    description: "One thing we can definitely talk about.",
    tag: "SHARED",
  },
  {
    number: "03",
    title: "GUITAR",
    note: "That’s actually cool.",
    description: "I can’t play, so I’ll let you have this one.",
    tag: "YOUR THING",
  },
  {
    number: "04",
    title: "DRAWING",
    note: "Also cool.",
    description: "Another talent I’ll respectfully not pretend to have.",
    tag: "YOUR THING",
  },
  {
    number: "05",
    title: "BASKETBALL",
    note: "Now we’re talking.",
    description: "Finally, something I can confidently discuss.",
    tag: "SHARED",
  },
  {
    number: "06",
    title: "FOOD",
    note: "Obviously.",
    description: "A conversation topic with almost zero risk.",
    tag: "SHARED",
  },
];

export default function ThingsIKnow({ onNext }: ThingsIKnowProps) {
  return (
    <section className="page-shell min-h-screen py-16 sm:py-20">
      <div className="content-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex items-end justify-between border-b border-white/[0.08] pb-6"
        >
          <div className="eyebrow">L / 03</div>

          <div className="hidden text-[9px] uppercase tracking-[0.25em] text-[#4f4a45] sm:block">
            Getting to know you
          </div>
        </motion.div>

        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="eyebrow mb-6"
            >
              A few discoveries
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: 0.2,
                duration: 0.95,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="display-text max-w-3xl text-[clamp(3.5rem,9vw,7.5rem)] font-medium"
            >
              THINGS
              <br />
              I KNOW
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
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="flex items-end"
          >
            <div className="max-w-md">
              <p className="text-base leading-8 text-[#918a83] sm:text-lg">
                I&apos;m still getting to know you.
                <br />
                But I&apos;ve already picked up a few things.
              </p>

              <p className="mt-5 text-sm leading-7 text-[#5f5a54]">
                Consider this my extremely unofficial research.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="h-px w-8 bg-[#e9d8c7]/30" />

                <span className="text-[9px] uppercase tracking-[0.18em] text-[#4f4a45]">
                  Research status: ongoing
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Discovery grid */}
        <div className="mt-16 border-t border-white/[0.08]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {discoveries.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.55 + index * 0.08,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.25 },
                }}
                className="group relative min-h-[220px] overflow-hidden border-b border-white/[0.08] p-6 transition-colors duration-300 hover:bg-white/[0.025] sm:border-r"
              >
                {/* Card top */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#514c47]">
                    {item.number}
                  </span>

                  <motion.span
                    initial={{ opacity: 0.45 }}
                    whileHover={{
                      opacity: 1,
                      scale: 1.15,
                    }}
                    className="text-[8px] font-bold tracking-[0.18em] text-[#4b4641] transition-colors duration-300 group-hover:text-[#e9d8c7]"
                  >
                    {item.tag}
                  </motion.span>
                </div>

                {/* Card content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.h2
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                    transition={{
                      duration: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-2xl font-semibold tracking-[-0.035em] text-[#e9e4dd] sm:text-3xl"
                  >
                    {item.title}
                  </motion.h2>

                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.13em] text-[#77716b]">
                    {item.note}
                  </p>

                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    whileHover={{
                      height: "auto",
                      opacity: 1,
                    }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-xs pt-4 text-sm leading-6 text-[#8f8881]">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Bottom accent */}
                <motion.span
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute bottom-0 left-0 h-px bg-[#e9d8c7]/60"
                />

                {/* Corner detail */}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute right-5 top-16 h-1 w-1 rounded-full bg-[#e9d8c7]"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.7 }}
          className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{
                delay: 1.45,
                duration: 0.5,
              }}
              className="mt-2 h-px bg-[#e9d8c7]/50"
            />

            <div>
              <p className="text-sm italic leading-7 text-[#77716b]">
                I&apos;m collecting data.
              </p>

              <p className="text-[10px] uppercase tracking-[0.14em] text-[#45413d]">
                For completely innocent reasons.
              </p>
            </div>
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