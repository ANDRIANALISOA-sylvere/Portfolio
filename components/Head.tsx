import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
export function Head() {
  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Image
          src="/images/avatar.png"
          alt="Avatar"
          width={50}
          height={50}
          className="rounded-full"
        ></Image>
        <div>
          <span className="font-bold">Joséphin Sylvère</span>
          <br />
          <i className="font-normal">Backend Developer</i>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* <span>About</span>
        <span>Techs</span>
        <span>Projects</span>
        <span>Contact</span> */}
        <ModeToggle></ModeToggle>
      </div>
    </header>
  );
}
