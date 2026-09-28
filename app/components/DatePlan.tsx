"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import html2canvas from "html2canvas-pro";

interface DatePlanProps {
  answer: "yes" | "maybe" | null;
}

const dates = [
  {
    day: "FRI",
    date: "02",
    month: "OCT",
  },
  {
    day: "SAT",
    date: "03",
    month: "OCT",
  },
  {
    day: "SUN",
    date: "04",
    month: "OCT",
  },
];

const times = ["5:00 PM", "6:00 PM", "7:00 PM"];

export default function DatePlan({ answer }: DatePlanProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const dateCardRef = useRef<HTMLDivElement>(null);

  const canConfirm =
    selectedDate !== null && selectedTime !== null;

  const saveDateCard = async () => {
    if (!dateCardRef.current || saving) return;

    try {
      setSaving(true);
      setSaved(false);

      const canvas = await html2canvas(dateCardRef.current, {
        backgroundColor: "#0d0d0c",
        scale: 2,
        useCORS: true,
      });

      const image = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = image;
      link.download = "our-date-plan.png";
      link.click();

      setSaved(true);

      window.setTimeout(() => {
        setSaved(false);
      }, 2500);
    } catch (error) {
      console.error("Could not save date card:", error);
    } finally {
      setSaving(false);
    }
  };

  /*
   * MAYBE ending
   */
  if (answer === "maybe") {
    return (
      <section className="page-shell flex min-h-screen items-center py-16 sm:py-20">
        <div className="content-width">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex items-end justify-between border-b border-white/[0.08] pb-6"
          >
            <div className="eyebrow">L / 07</div>

            <div className="hidden text-[9px] uppercase tracking-[0.25em] text-[#4f4a45] sm:block">
              No rush
            </div>
          </motion.div>

          <div className="flex min-h-[65vh] items-center">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.15,
                  duration: 0.6,
                }}
                className="eyebrow mb-7"
              >
                That&apos;s okay.
              </motion.p>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 25,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="display-text text-[clamp(3.5rem,8vw,7rem)] font-medium"
              >
                NO RUSH
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
                  delay: 0.9,
                  duration: 0.7,
                }}
                className="mt-9 max-w-lg"
              >
                <p className="text-base leading-8 text-[#aaa39c] sm:text-lg">
                  You can think about it.
                </p>

                <p className="mt-3 text-sm leading-7 text-[#68625c]">
                  Either way, I&apos;m glad you made it this far.
                </p>
              </motion.div>

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
                  delay: 1.3,
                  duration: 0.7,
                }}
                className="mt-12"
              >
                <div className="flex items-start gap-4">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: 32 }}
                    transition={{
                      delay: 1.45,
                      duration: 0.5,
                    }}
                    className="mt-3 h-px shrink-0 bg-[#e9d8c7]/40"
                  />

                  <div>
                    <p className="max-w-md text-sm italic leading-7 text-[#77716b]">
                      P.S. Yes, I really built an entire website instead of
                      just asking.
                    </p>

                    <p className="mt-3 text-[9px] uppercase tracking-[0.16em] text-[#45413d]">
                      Respectfully ridiculous.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.8,
              duration: 0.8,
            }}
            className="hidden items-center justify-between sm:flex"
          >
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#45413d]">
              Take your time
            </span>

            <span className="text-[9px] uppercase tracking-[0.25em] text-[#45413d]">
              07 / 07
            </span>
          </motion.div>
        </div>
      </section>
    );
  }

  /*
   * YES → DATE PLANNER
   */
  return (
    <section className="page-shell min-h-screen py-16 sm:py-20">
      <div className="content-width">
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
            duration: 0.6,
          }}
          className="mb-12 flex items-end justify-between border-b border-white/[0.08] pb-6"
        >
          <div className="eyebrow">L / 07</div>

          <div className="hidden text-[9px] uppercase tracking-[0.25em] text-[#4f4a45] sm:block">
            Okay. We have a plan.
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {!confirmed ? (
            <motion.div
              key="picker"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                {/* LEFT */}
                <div>
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.15,
                      duration: 0.6,
                    }}
                    className="eyebrow mb-6"
                  >
                    First date
                  </motion.p>

                  <motion.h1
                    initial={{
                      opacity: 0,
                      y: 25,
                      filter: "blur(8px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      delay: 0.25,
                      duration: 0.85,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="display-text text-[clamp(3.5rem,8vw,7rem)] font-medium"
                  >
                    LET&apos;S
                    <br />
                    PLAN
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
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.8,
                      duration: 0.6,
                    }}
                    className="mt-6 max-w-sm text-sm leading-7 text-[#706a63]"
                  >
                    You pick the day.
                    <br />
                    You pick the time.
                    <br />
                    I&apos;ll figure out the rest.
                  </motion.p>

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
                      delay: 1.05,
                      duration: 0.6,
                    }}
                    className="mt-10 flex items-center gap-3"
                  >
                    <span className="h-px w-8 bg-[#e9d8c7]/30" />

                    <span className="text-[9px] uppercase tracking-[0.18em] text-[#45413d]">
                      Food + arcade
                    </span>
                  </motion.div>
                </div>

                {/* RIGHT */}
                <div>
                  {/* DATE */}
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
                      delay: 0.45,
                      duration: 0.6,
                    }}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#5b554f]">
                        Pick a day
                      </span>

                      <span className="text-[9px] uppercase tracking-[0.15em] text-[#403c38]">
                        01
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {dates.map((item, index) => {
                        const value = `${item.day} ${item.date} ${item.month}`;
                        const isSelected = selectedDate === value;

                        return (
                          <motion.button
                            key={value}
                            onClick={() => setSelectedDate(value)}
                            whileHover={{
                              y: -3,
                            }}
                            whileTap={{
                              scale: 0.98,
                            }}
                            initial={{
                              opacity: 0,
                              y: 15,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              delay: 0.55 + index * 0.08,
                              duration: 0.45,
                            }}
                            className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 ${
                              isSelected
                                ? "border-[#e9d8c7]/50 bg-[#e9d8c7] text-[#11100f] shadow-[0_15px_40px_rgba(233,216,199,0.08)]"
                                : "border-white/[0.1] bg-white/[0.025] text-[#d8d2cb] hover:border-white/[0.18] hover:bg-white/[0.05]"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[9px] font-bold tracking-[0.18em] opacity-60">
                                {item.day}
                              </span>

                              {isSelected && (
                                <motion.span
                                  initial={{
                                    opacity: 0,
                                    scale: 0.5,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    scale: 1,
                                  }}
                                  className="text-xs"
                                >
                                  ✓
                                </motion.span>
                              )}
                            </div>

                            <div className="mt-3 text-3xl font-medium tracking-[-0.04em]">
                              {item.date}
                            </div>

                            <div className="mt-1 text-[9px] font-bold tracking-[0.18em] opacity-50">
                              {item.month}
                            </div>

                            {!isSelected && (
                              <span className="absolute -bottom-8 -right-8 h-20 w-20 rounded-full bg-[#e9d8c7]/[0.07] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* TIME */}
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
                      delay: 0.7,
                      duration: 0.6,
                    }}
                    className="mt-10"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#5b554f]">
                        Pick a time
                      </span>

                      <span className="text-[9px] uppercase tracking-[0.15em] text-[#403c38]">
                        02
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {times.map((time, index) => {
                        const isSelected = selectedTime === time;

                        return (
                          <motion.button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            whileHover={{
                              y: -3,
                            }}
                            whileTap={{
                              scale: 0.98,
                            }}
                            initial={{
                              opacity: 0,
                              y: 12,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              delay: 0.8 + index * 0.08,
                              duration: 0.45,
                            }}
                            className={`rounded-full border px-4 py-4 text-xs font-bold tracking-[0.08em] transition-all duration-300 ${
                              isSelected
                                ? "border-[#e9d8c7]/50 bg-[#e9d8c7] text-[#11100f] shadow-[0_12px_30px_rgba(233,216,199,0.07)]"
                                : "border-white/[0.1] bg-white/[0.025] text-[#aaa39c] hover:border-white/[0.18] hover:bg-white/[0.05]"
                            }`}
                          >
                            {time}
                          </motion.button>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* SUMMARY */}
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: 1.05,
                      duration: 0.6,
                    }}
                    className="mt-10 border-t border-white/[0.08] pt-6"
                  >
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#4e4944]">
                          Your choice
                        </p>

                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <span
                            className={
                              selectedDate
                                ? "text-sm text-[#dcd5ce]"
                                : "text-sm text-[#4a4540]"
                            }
                          >
                            {selectedDate || "Choose a day"}
                          </span>

                          <span className="text-[#4a4540]">·</span>

                          <span
                            className={
                              selectedTime
                                ? "text-sm text-[#dcd5ce]"
                                : "text-sm text-[#4a4540]"
                            }
                          >
                            {selectedTime || "Choose a time"}
                          </span>
                        </div>
                      </div>

                      <motion.button
                        disabled={!canConfirm}
                        onClick={() => setConfirmed(true)}
                        whileHover={
                          canConfirm
                            ? {
                                y: -3,
                              }
                            : undefined
                        }
                        whileTap={
                          canConfirm
                            ? {
                                scale: 0.97,
                              }
                            : undefined
                        }
                        className={`primary-button sm:w-auto ${
                          !canConfirm
                            ? "cursor-not-allowed opacity-25"
                            : ""
                        }`}
                      >
                        LOCK IT IN
                        <span>→</span>
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ) : (
            /*
             * CONFIRMED
             */
            <motion.div
              key="confirmed"
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex min-h-[65vh] items-center"
            >
              <div className="w-full">
                <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:gap-20">
                  {/* LEFT */}
                  <div>
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.15,
                        duration: 0.5,
                      }}
                      className="eyebrow mb-7"
                    >
                      Confirmed
                    </motion.div>

                    <motion.h1
                      initial={{
                        opacity: 0,
                        y: 25,
                        filter: "blur(10px)",
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      }}
                      transition={{
                        delay: 0.25,
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="display-text text-[clamp(3.5rem,8vw,7rem)] font-medium"
                    >
                      OKAY
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
                      <br />
                      WE HAVE
                      <br />
                      A PLAN
                      <span className="text-[#e9d8c7]">.</span>
                    </motion.h1>

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
                        delay: 1,
                        duration: 0.7,
                      }}
                      className="mt-8"
                    >
                      <p className="text-base leading-7 text-[#aaa39c]">
                        Food + arcade.
                      </p>

                      <p className="mt-2 text-sm leading-7 text-[#66615b]">
                        {selectedDate} · {selectedTime}
                      </p>
                    </motion.div>

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
                        delay: 1.25,
                        duration: 0.6,
                      }}
                      className="mt-10 flex items-center gap-3"
                    >
                      <span className="h-px w-8 bg-[#e9d8c7]/40" />

                      <span className="text-[9px] uppercase tracking-[0.18em] text-[#45413d]">
                        I&apos;ll handle the rest
                      </span>
                    </motion.div>
                  </div>

                  {/* RIGHT / DATE CARD */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 25,
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.45,
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div
                      ref={dateCardRef}
                      className="date-card p-7 sm:p-8"
                    >
                      <div className="relative z-10">
                        {/* CARD HEADER */}
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#e9d8c7]">
                            ONE SMALL QUESTION
                          </span>

                          <span className="text-[9px] uppercase tracking-[0.18em] text-[#4d4843]">
                            L / 07
                          </span>
                        </div>

                        {/* CARD TITLE */}
                        <div className="mt-12">
                          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#514c47]">
                            First date
                          </p>

                          <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em] text-[#eee9e2] sm:text-4xl">
                            FOOD + ARCADE
                          </h2>
                        </div>

                        {/* DIVIDER */}
                        <div className="my-8 h-px bg-white/[0.08]" />

                        {/* DATE + TIME */}
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#514c47]">
                              Date
                            </p>

                            <p className="mt-2 text-sm font-medium text-[#dcd5ce]">
                              {selectedDate}
                            </p>
                          </div>

                          <div>
                            <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#514c47]">
                              Time
                            </p>

                            <p className="mt-2 text-sm font-medium text-[#dcd5ce]">
                              {selectedTime}
                            </p>
                          </div>
                        </div>

                        {/* LITTLE DETAILS */}
                        <div className="mt-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                          <div className="flex items-center justify-between">
                            <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#4b4641]">
                              Current plan
                            </span>

                            <span className="h-1.5 w-1.5 rounded-full bg-[#e9d8c7]" />
                          </div>

                          <div className="mt-4 grid grid-cols-2 gap-3">
                            <div>
                              <p className="text-[9px] text-[#5d5751]">
                                FOOD
                              </p>

                              <p className="mt-1 text-xs text-[#96908a]">
                                Definitely.
                              </p>
                            </div>

                            <div>
                              <p className="text-[9px] text-[#5d5751]">
                                ARCADE
                              </p>

                              <p className="mt-1 text-xs text-[#96908a]">
                                Obviously.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* CARD FOOTER */}
                        <div className="mt-8 flex items-end justify-between">
                          <div>
                            <p className="text-[9px] italic leading-5 text-[#5f5953]">
                              cheesecake remains
                              <br />
                              under consideration.
                            </p>
                          </div>

                          <motion.span
                            animate={{
                              x: [0, 4, 0],
                            }}
                            transition={{
                              duration: 1.8,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="text-lg text-[#e9d8c7]"
                          >
                            →
                          </motion.span>
                        </div>
                      </div>
                    </div>

                    {/* SAVE BUTTON */}
                    <motion.button
                      onClick={saveDateCard}
                      disabled={saving}
                      whileHover={{
                        y: -3,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className="secondary-button mt-4 w-full"
                    >
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={
                            saving
                              ? "saving"
                              : saved
                                ? "saved"
                                : "save"
                          }
                          initial={{
                            opacity: 0,
                            y: 6,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: -6,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                        >
                          {saving
                            ? "CREATING CARD..."
                            : saved
                              ? "CARD SAVED"
                              : "SAVE DATE CARD"}
                        </motion.span>
                      </AnimatePresence>

                      <motion.span
                        animate={
                          saving
                            ? {
                                rotate: 360,
                              }
                            : saved
                              ? {
                                  scale: [1, 1.2, 1],
                                }
                              : {
                                  y: [0, 3, 0],
                                }
                        }
                        transition={
                          saving
                            ? {
                                duration: 0.8,
                                repeat: Infinity,
                                ease: "linear",
                              }
                            : {
                                duration: 1.6,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }
                        }
                      >
                        {saved ? "✓" : "↓"}
                      </motion.span>
                    </motion.button>

                    <motion.p
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        delay: 1.4,
                        duration: 0.6,
                      }}
                      className="mt-3 text-center text-[9px] uppercase tracking-[0.15em] text-[#45413d]"
                    >
                      {saved
                        ? "Your little reminder is ready"
                        : "Save this little reminder"}
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FOOTER */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.7,
            duration: 0.8,
          }}
          className="mt-12 hidden items-center justify-between sm:flex"
        >
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#45413d]">
            That&apos;s the whole website
          </span>

          <span className="text-[9px] uppercase tracking-[0.25em] text-[#45413d]">
            07 / 07
          </span>
        </motion.div>
      </div>
    </section>
  );
}