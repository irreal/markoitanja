"use client";
import "./globals.css";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";
import { useEffect, useMemo, useState } from "react";
import { loadAll } from "@tsparticles/all";

// export const metadata: Metadata = {
//   title: "Tatjana i Marko",
//   description: "",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadAll(engine);
      //await loadFull(engine);
      // await loadSlim(engine);
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
    <html lang="en">
      <body className={`bg-bgf bg-cover bg-right-top md:bg-fill md:bg-center`}>
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
        )}
        <div className="w-full h-full bg-transparent">{children}</div>
      </body>
    </html>
  );
}
