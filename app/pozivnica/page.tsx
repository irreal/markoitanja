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
      <p className="flex flex-col">
        <a href="#" className="underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline icon icon-tabler icon-tabler-building-church"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l18 0" />
            <path d="M10 21v-4a2 2 0 0 1 4 0v4" />
            <path d="M10 5l4 0" />
            <path d="M12 3l0 5" />
            <path d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7" />
          </svg>
          mapa do crkve
        </a>
        <a href="#" className="underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline icon icon-tabler icon-tabler-tools-kitchen-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
          </svg>
          mapa do restorana
        </a>
      </p>
    </div>
  );
}
