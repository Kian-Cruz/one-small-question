"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Intro from "./components/Intro";
import OneWeek from "./components/OneWeek";
import ThingsIKnow from "./components/ThingsIKnow";
import InterestCheck from "./components/InterestCheck";
import RealReason from "./components/RealReason";
import AskOut from "./components/AskOut";
import DatePlan from "./components/DatePlan";

const TOTAL_SCREENS = 7;

export default function Home() {
  const [screen, setScreen] = useState(1);
  const [answer, setAnswer] = useState<"yes" | "maybe" | null>(null);

  const nextScreen = () => {
    setScreen((current) => Math.min(current + 1, TOTAL_SCREENS));
  };

  const handleAnswer = (value: "yes" | "maybe") => {
    setAnswer(value);
    nextScreen();
  };

  const screens = [
    <Intro key="intro" onNext={nextScreen} />,
    <OneWeek key="one-week" onNext={nextScreen} />,
    <ThingsIKnow key="things" onNext={nextScreen} />,
    <InterestCheck key="interest" onNext={nextScreen} />,
    <RealReason key="reason" onNext={nextScreen} />,
    <AskOut key="ask" onAnswer={handleAnswer} />,
    <DatePlan key="plan" answer={answer} />,
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-[#f5f2ec]">
      <div className="noise" />

      <div className="relative z-10 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={screen}
            initial={{
              opacity: 0,
              filter: "blur(12px)",
              y: 18,
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            exit={{
              opacity: 0,
              filter: "blur(10px)",
              y: -18,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="min-h-screen"
          >
            {screens[screen - 1]}
          </motion.div>
        </AnimatePresence>
      </div>

      {screen > 1 && screen < 7 && (
        <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2">
          <div className="flex items-center gap-2">
            {Array.from({ length: TOTAL_SCREENS }).map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index + 1 === screen
                    ? "w-7 bg-[#e9d8c7]"
                    : index + 1 < screen
                      ? "w-3 bg-[#81776e]"
                      : "w-2 bg-[#292724]"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}