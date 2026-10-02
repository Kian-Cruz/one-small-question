"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AskOutProps {
  onAnswer: (value: "yes" | "maybe") => void;
}

const maybeMessages = [
  {
    button: "OH, REALLY?",
    note: "I saw that. 👀",
    cat: "🤨",
  },
  {
    button: "YOU SURE?",
    note: "Okay... I respect the hesitation.",
    cat: "🐱",
  },
  {
    button: "PLEASE",
    note: "Please go out with me! 🥺",
    cat: "🥺",
  },
];

export default function AskOut({ onAnswer }: AskOutProps) {
  const [maybeAttempts, setMaybeAttempts] = useState(0);
  const [isReacting, setIsReacting] = useState(false);

  const handleMaybe = () => {
    if (maybeAttempts < 2) {
      setMaybeAttempts((current) => current + 1);
      setIsReacting(true);

      window.setTimeout(() => {
        setIsReacting(false);
      }, 650);

      return;
    }

    onAnswer("maybe");
  };

  const currentMaybe =
    maybeMessages[
      Math.min(maybeAttempts, maybeMessages.length - 1)
    ];

  return (
    <section className="page-shell flex min-h-screen items-center py-16 sm:py-20">
      {/* Cat atmosphere */}
      <div className="cat-atmosphere" />

      {/* Main floating cat */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.65,
          rotate: -10,
        }}
        animate={{
          opacity: 0.2,
          scale: 1,
          rotate: -4,
        }}
        transition={{
          delay: 0.7,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute right-[5%] top-[15%] hidden sm:block"
      >
        <motion.div
          animate={{
            y: [0, -6, 0],
            rotate: [-4, -1, -4],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex h-28 w-28 items-center justify-center rounded-[32px] border border-[#e9d8c7]/10 bg-white/[0.025] text-6xl shadow-[0_25px_70px_rgba(0,0,0,0.3)] backdrop-blur-md"
        >
          🐱
        </motion.div>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.4,
            duration: 0.5,
          }}
          className="mt-3 text-center text-[8px] uppercase tracking-[0.2em] text-[#4a4540]"
        >
          choose wisely
        </motion.p>
      </motion.div>

      {/* Little cat in the corner */}
      <motion.div
        initial={{
          opacity: 0,
          x: -15,
          rotate: -8,
        }}
        animate={{
          opacity: 0.14,
          x: 0,
          rotate: -5,
        }}
        transition={{
          delay: 1.2,
          duration: 0.7,
        }}
        className="pointer-events-none absolute bottom-[15%] left-[5%] hidden sm:block"
      >
        <div className="text-4xl">😼</div>

        <div className="mt-1 flex gap-1 text-xs opacity-50">
          <span>🐾</span>
          <span>🐾</span>
        </div>
      </motion.div>

      <div className="content-width relative z-10">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-12 flex items-end justify-between border-b border-white/[0.08] pb-6"
        >
          <div className="eyebrow">L / 06</div>

          <div className="hidden items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-[#4f4a45] sm:flex">
            <span>The question</span>
            <span>🐾</span>
          </div>
        </motion.div>

        <div className="flex min-h-[65vh] flex-col justify-center">
          {/* Eyebrow */}
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
              delay: 0.2,
              duration: 0.6,
            }}
            className="eyebrow mb-7"
          >
            So...
          </motion.div>

          {/* Question */}
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
            className="display-text max-w-5xl text-[clamp(3rem,7vw,6.5rem)] font-medium"
          >
            WANT TO GO
            <br />
            ON A DATE
            <br />
            WITH ME
            <motion.span
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block text-[#e9d8c7]"
            >
              ?
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.95,
              duration: 0.7,
            }}
            className="mt-8 max-w-lg"
          >
            <p className="text-base leading-7 text-[#aaa39c] sm:text-lg">
              I was thinking food + arcade.
            </p>

            <p className="mt-2 text-sm leading-6 text-[#66615b]">
              Nothing complicated. Just a chance to hang out and have some
              fun.
            </p>

            <motion.div
              initial={{
                opacity: 0,
                x: -10,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 1.15,
                duration: 0.6,
              }}
              className="mt-5 flex items-center gap-2"
            >
              <span className="text-xs text-[#4e4944]">
                cheesecake remains a possible bonus
              </span>

              <span className="text-sm">🍰</span>
            </motion.div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.25,
              duration: 0.7,
            }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            {/* YES */}
            <motion.button
              onClick={() => onAnswer("yes")}
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="primary-button group relative overflow-hidden sm:w-auto"
            >
              <span className="relative z-10">
                YES
              </span>

              <motion.span
                animate={{
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                →
              </motion.span>

              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
            </motion.button>

            {/* MAYBE */}
            <motion.button
              onClick={handleMaybe}
              animate={
                isReacting
                  ? {
                      x: [0, -15, 15, -8, 8, 0],
                      rotate: [0, -2, 2, -1, 1, 0],
                    }
                  : {
                      x: 0,
                      rotate: 0,
                    }
              }
              transition={{
                duration: 0.45,
                ease: "easeInOut",
              }}
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="secondary-button relative overflow-hidden sm:w-auto"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentMaybe.button}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  {maybeAttempts === 0
                    ? "MAYBE"
                    : currentMaybe.button}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </motion.div>

          {/* Maybe reaction */}
          <AnimatePresence mode="wait">
            {maybeAttempts > 0 && (
              <motion.div
                key={maybeAttempts}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="mt-6 flex items-center gap-3"
              >
                <motion.span
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: 24,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="h-px bg-[#e9d8c7]/40"
                />

                <motion.span
                  key={currentMaybe.cat}
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="text-sm"
                >
                  {currentMaybe.cat}
                </motion.span>

                <p className="text-xs italic text-[#77716b]">
                  {currentMaybe.note}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* No pressure */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.75,
              duration: 0.8,
            }}
            className="mt-8 flex items-center gap-3"
          >
            <span className="h-px w-5 bg-white/[0.08]" />

            <p className="text-[9px] uppercase tracking-[0.16em] text-[#45413d]">
              No pressure. Seriously.
            </p>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2,
            duration: 0.8,
          }}
          className="hidden items-center justify-between sm:flex"
        >
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#45413d]">
            One small question
          </span>

          <span className="text-[9px] uppercase tracking-[0.25em] text-[#45413d]">
            06 / 07
          </span>
        </motion.div>
      </div>
    </section>
  );
}