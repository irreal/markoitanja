"use client";
import { Style_Script } from "next/font/google";
import { useEffect, useMemo, useState } from "react";

const styleScript = Style_Script({
  weight: "400",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-full gap-6 p-6 items-center text-center text-[#4D5D26] text-2xl max-w-[700px] mx-auto">
      <div>
        U nedelju <span className="text-[#d64578] font-bold">23.06.2024.</span>
      </div>
      <div
        className={`flex flex-col justify-center items-center text-6xl ${styleScript.className}`}
      >
        <span className="-ml-6 -mb-2">Tatjana</span>
        <span className="mt-2">&</span>
        <span className="-ml-6 mt-[-0.8rem]">Marko</span>
      </div>
      <div className="font-bold italic">
        imaju nešto važno{" "}
        <span className="text-[#d64578] italic text-3xl font-bold">DA</span>{" "}
        kažu. <br />
        Ukoliko želite da saznate šta, kao i:
      </div>
      <div>
        <ul className="flex flex-col gap-4">
          <li>Ko će bidermajer uhvatiti?</li>
          <li>Ko će kome na cipelu stati?</li>
          <li>Ko će kum i kuma biti?</li>
          <li>Čiji se talenat za pevanje više neće kriti?</li>
        </ul>
      </div>
      <div className="font-bold italic">Dođite i ulepšajte naše veselje!</div>
      <div className="font-bold">
        Crkveno venčanje će se obaviti u{" "}
        <span className="text-[#d64578]">14:30h</span> u{" "}
        <a
          href="https://maps.app.goo.gl/q5g6awD6ZaYJ4K3j8"
          className="underline"
        >
          Crkvi Sv.&nbsp;Vaznesenja Gospodnjeg
        </a>{" "}
        u Žarkovu.
        <br />
        Prijem u restoranu{" "}
        <a
          href="https://maps.app.goo.gl/ubfGrfeGbUsWURT58"
          className="underline"
        >
          Lipovačka šuma
        </a>{" "}
        u <span className="text-[#d64578]">15:30h</span> sa građanskim venčanjem
        u <span className="text-[#d64578]">16:30h</span>.
      </div>
      <div className="text-[#d64578] italic">
        Matičar i muzičari potvrdili su dolazak na veselje, a mi ćemo biti
        srećni ako i vi to učinite do{" "}
        <span className="font-extrabold">09.06.2024.</span>
        <br />
        <span className="block">Hvala, vidimo se!</span>
      </div>
    </div>
  );
}
