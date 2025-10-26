import Image from "next/image";
import { RiGithubLine, RiLinkedinLine, RiMailLine } from "react-icons/ri";

export default function Hero() {
  return (
    <div className="p-4 sm:p-8 flex items-start justify-center pt-16 sm:pt-32 pb-8 sm:pb-16">
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
        <Image
          src="/me.jpg"
          alt="Saul"
          width={160}
          height={160}
          className="rounded-full w-32 h-32 sm:w-40 sm:h-40"
        />
        <div>
          <h1 className="text-2xl sm:text-4xl font-semi-bold">Hi, I&apos;m Saul</h1>
          <p className="text-lg sm:text-xl mt-2 text-gray-400">Computer science student<br />at Fresno State</p>
          <div className="flex gap-6 sm:gap-8 mt-4 sm:mt-6 justify-center sm:justify-start">
            <a href="https://github.com/rgeful" target="_blank" className="hover:opacity-75 transition-opacity">
              <RiGithubLine size={24} className="sm:w-8 sm:h-8" />
            </a>
            <a href="https://www.linkedin.com/in/saul-plascencia-86460128a/" target="_blank" className="hover:opacity-75 transition-opacity">
              <RiLinkedinLine size={24} className="sm:w-8 sm:h-8" />
            </a>
            <a href="mailto:saulplascencia09@gmail.com" className="hover:opacity-75 transition-opacity">
              <RiMailLine size={24} className="sm:w-8 sm:h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}