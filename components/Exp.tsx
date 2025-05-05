import Image from "next/image";
import { GlowingEffect } from "./ui/glowing-effect";

export function Exp() {
  return (
    <div className="mt-16">
      <h1 className="font-bold text-xl">Experiences 🚀</h1>
      <div>
        <div className="relative mt-4 flex flex-wrap gap-4  dark:bg-card/40 bg-slate-100  p-2 rounded-md">
          <GlowingEffect
            blur={0}
            borderWidth={1}
            spread={80}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <Image
            src="/images/MIM.jpg"
            alt="Avatar"
            width={50}
            height={50}
            className="rounded-md"
          ></Image>
          <div>
            <h2 className="font-bold text-md">
              DIRMIM Fianarantsoa - Internship
            </h2>
            <small>Août-Nov 2024</small>
          </div>
        </div>

        <div className="relative mt-4 flex flex-wrap gap-4 dark:bg-card/40 bg-slate-100 p-2 rounded-md">
          <GlowingEffect
            blur={0}
            borderWidth={1}
            spread={80}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <Image
            src="/images/CUF.png"
            alt="Avatar"
            width={50}
            height={50}
            className="rounded-md"
          ></Image>
          <div>
            <h2 className="font-bold text-md">CUF Fianarantsoa - Internship</h2>
            <small>Sept-Nov 2023</small>
          </div>
        </div>
      </div>
    </div>
  );
}
