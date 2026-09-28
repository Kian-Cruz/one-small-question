"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface InterestCheckProps {
  onNext: () => void;
}

const questions = [
  {
    number: "01",
    question: "Perfect evening?",
    options: [
      {
        label: "STAY IN",
        reaction: "Honestly? Fair.",
      },
      {
        label: "GO OUT",
        reaction: "Okay, I like that answer.",
      },
      {
        label: "DEPENDS",
        reaction: "Mysterious. I respect it.",
      },
    ],
  },
  {
    number: "02",
    question: "Choose your weapon.",
    options: [
      {
        label: "FOOD",
        reaction: "Extremely reasonable.",
      },
      {
        label: "MUSIC",
        reaction: "We definitely have something here.",
      },
      {
        label: "BASKETBALL",
        reaction: "Now we're talking.",
      },
      {
        label: "RANDOM ADVENTURE",
        reaction: "That could get interesting.",
      },
    ],
  },
];

export default function InterestCheck({ onNext }: InterestCheckProps) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [reaction, setReaction] = useState<string | null>(null);

  const currentQuestion = questions[questionIndex];

  const handleSelect = (
    option: {
      label: string;
      reaction: string;
    }
  ) => {
    setSelected(option.label);
    setReaction(option.reaction);

    setTimeout(() => {
      if (questionIndex < questions.length - 1) {
        setQuestionIndex((current) => current + 1);
        setSelected(null);
        setReaction(null);
      }
    }, 900);
  };

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
          <div className="eyebrow">L / 04</div>

          <div className="hidden text-[9px] uppercase tracking-[0.25em] text-[#4f4a45] sm:block">
            A very serious investigation
          </div>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="eyebrow mb-6"
            >
              One last thing
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.95,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="display-text text-[clamp(3.8rem,9vw,7.5rem)] font-medium"
            >
              LET&apos;S
              <br />
              SEE
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
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-7 max-w-sm text-sm leading-7 text-[#706a63]"
            >
              Two completely unscientific questions.
              <br />
              There are no wrong answers.
            </motion.p>

            {/* Question progress */}
            <div className="mt-10 flex items-center gap-3">
              {questions.map((_, index) => (
                <motion.div
                  key={index}
                  animate={{
                    width: index === questionIndex ? 40 : index < questionIndex ? 20 : 12,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`h-1 rounded-full ${
                    index === questionIndex
                      ? "bg-[#e9d8c7]"
                      : index < questionIndex
                        ? "bg-[#77716b]"
                        : "bg-[#2c2926]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion.number}
                initial={{
                  opacity: 0,
                  x: 30,
                  filter: "blur(6px)",
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  x: -30,
                  filter: "blur(6px)",
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full"
              >
                {/* Question header */}
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#514c47]">
                    QUESTION {currentQuestion.number}
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.18em] text-[#45413d]">
                    {questionIndex + 1} / {questions.length}
                  </span>
                </div>

                {/* Question */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                  className="mb-10 text-[clamp(2rem,5vw,4rem)] font-medium tracking-[-0.045em] text-[#eee9e2]"
                >
                  {currentQuestion.question}
                </motion.h2>

                {/* Options */}
                <div
                  className={`grid gap-3 ${
                    currentQuestion.options.length === 3
                      ? "sm:grid-cols-3"
                      : "sm:grid-cols-2"
                  }`}
                >
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = selected === option.label;

                    return (
                      <motion.button
                        key={option.label}
                        onClick={() => handleSelect(option)}
                        disabled={selected !== null}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.2 + index * 0.07,
                          duration: 0.45,
                        }}
                        whileHover={
                          selected === null
                            ? {
                                y: -4,
                                borderColor: "rgba(233,216,199,0.4)",
                              }
                            : undefined
                        }
                        whileTap={
                          selected === null
                            ? {
                                scale: 0.97,
                              }
                            : undefined
                        }
                        className={`group relative min-h-[92px] overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 ${
                          isSelected
                            ? "border-[#e9d8c7]/50 bg-[#e9d8c7] text-[#11100f]"
                            : "border-white/[0.1] bg-white/[0.025] text-[#d9d3cc] hover:bg-white/[0.05]"
                        }`}
                      >
                        {/* Number */}
                        <span
                          className={`absolute right-5 top-5 text-[9px] ${
                            isSelected
                              ? "text-[#11100f]/40"
                              : "text-[#514c47]"
                          }`}
                        >
                          0{index + 1}
                        </span>

                        {/* Label */}
                        <span className="relative z-10 text-xs font-bold tracking-[0.15em]">
                          {option.label}
                        </span>

                        {/* Arrow */}
                        <motion.span
                          animate={
                            isSelected
                              ? {
                                  x: 0,
                                  opacity: 1,
                                }
                              : {
                                  x: 5,
                                  opacity: 0,
                                }
                          }
                          whileHover={{
                            x: 0,
                            opacity: 0.7,
                          }}
                          className="absolute bottom-5 right-5 text-sm"
                        >
                          →
                        </motion.span>

                        {/* Glow */}
                        <span
                          className={`absolute -bottom-10 -right-10 h-28 w-28 rounded-full blur-3xl transition-opacity duration-500 ${
                            isSelected
                              ? "bg-white/20 opacity-100"
                              : "bg-[#e9d8c7]/10 opacity-0 group-hover:opacity-100"
                          }`}
                        />
                      </motion.button>
                    );
                  })}
                </div>

                {/* Reaction */}
                <div className="mt-8 min-h-[55px]">
                  <AnimatePresence mode="wait">
                    {reaction && (
                      <motion.div
                        key={reaction}
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
                        className="flex items-center gap-3"
                      >
                        <motion.span
                          initial={{ width: 0 }}
                          animate={{ width: 24 }}
                          className="h-px bg-[#e9d8c7]/50"
                        />

                        <p className="text-sm italic text-[#8c857e]">
                          {reaction}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Continue */}
                {questionIndex === questions.length - 1 && selected && (
                  <motion.button
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.25,
                      duration: 0.45,
                    }}
                    onClick={onNext}
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="secondary-button mt-3 sm:w-auto"
                  >
                    I&apos;ve Seen Enough
                    <span>→</span>
                  </motion.button>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}