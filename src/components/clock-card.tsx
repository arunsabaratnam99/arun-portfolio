"use client";

import { portfolioData } from "@/config/portfolio-data";
import { useEffect, useState } from "react";

export function ClockCard() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: portfolioData.personal.timezone,
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const formattedTime = now.toLocaleTimeString("en-US", options);
      setTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-neutral-900 p-4 h-full rounded-lg flex flex-col text-white transform transition-transform duration-300 hover:scale-[1.02]">
      <div className="font-bold font-geist-mono uppercase">Clock</div>
      <div className="font-geist text-xl mb-2">Current Time.</div>
      <div className="flex flex-col">
        <div className="font-geist-mono text-xl">{time || "Loading..."}</div>
        <div className="font-geist-mono text-md text-neutral-400">
          {portfolioData.personal.location}
        </div>
      </div>
    </div>
  );
}
