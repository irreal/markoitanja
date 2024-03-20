"use client";
import { Style_Script } from "next/font/google";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";

import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.

const styleScript = Style_Script({
  weight: "400",
  subsets: ["latin"],
});
export default function Home() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      // await loadAll(engine);
      //await loadFull(engine);
      await loadAll(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (
    container: Container | undefined
  ): Promise<void> => {
    console.log(container);
  };
  // const options: ISourceOptions = useMemo<ISourceOptions>(
  //   () => ({
  //     spread: 360,
  //     ticks: 100,
  //     gravity: 0,
  //     decay: 0.94,
  //     startVelocity: 30,
  //     shapes: ["heart"],
  //     colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
  //     particleCount: 50,
  //     scalar: 2,
  //   }),
  //   []
  // );

  const options: ISourceOptions = useMemo<any>(
    () => ({
      fpsLimit: 120,
      particles: {
        color: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
        opacity: {
          value: 0.5,
        },
        move: {
          direction: "bottom",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 180,
        },
        shape: {
          type: "heart",
        },
        size: {
          value: { min: 15, max: 25 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="flex flex-col w-full min-h-full gap-6  items-center text-center text-[#4D5D26] text-2xl max-w-[700px] mx-auto">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}

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
        <span className="text-[#d64578] italic text-3xl font-bold">DA</span> vam
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
      </div>
    </div>
  );
}
