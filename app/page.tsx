"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const targetTime = new Date(2024, 5, 23, 14, 30, 0, 0).getTime();
  const diff = targetTime - currentTime;
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const diffMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const diffSeconds = Math.floor((diff % (1000 * 60)) / 1000);

  return (
    <div className="flex flex-col w-full min-h-full gap-6 p-12  items-center justify-between  text-center text-[#4D5D26] text-2xl max-w-[700px] mx-auto">
      <div>Odbrojavajte sa nama do velikog dana:</div>
      <div className="grid grid-cols-1 sm:grid-cols-4 text-center w-full">
        <div className="text-[#d64578] text-7xl font-bold">{diffDays}</div>
        <div className="text-2xl">dana</div>
        <div className="text-[#d64578] text-6xl font-bold">{diffHours}</div>
        <div className="text-lg">sati</div>
        <div className="text-[#d64578] text-5xl font-bold">{diffMinutes}</div>
        <div className="text-sm">minuta</div>
        <div className="text-[#d64578] text-4xl font-bold">{diffSeconds}</div>
        <div className="text-sm">sekundi</div>
      </div>
      <a
        className="w-full text-[#d64578] border-[1px] border-[#d64578] rounded-xl bg-[#d64578] bg-opacity-10"
        href="/pozivnica"
      >
        Tvoja pozivnica
      </a>
      <a
        className="w-full text-[#d64578] border-[1px] border-[#d64578] rounded-xl bg-[#d64578] bg-opacity-10"
        href="/fotograf"
      >
        Budi naš fotograf
      </a>
    </div>
  );
}
