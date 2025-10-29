import Image from "next/image";
import { RiGithubLine, RiLinkedinLine, RiMailLine } from "react-icons/ri";

export default function Hero() {
  return (
    <div className="p-3 sm:p-6 flex items-start justify-center pt-12 sm:pt-24 pb-6 sm:pb-12">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
        <Image
          src="/me.jpg"
          alt="Saul"
          width={120}
          height={120}
          className="rounded-full w-24 h-24 sm:w-32 sm:h-32"
        />
        <div>
          <h1 className="text-xl sm:text-2xl font-semi-bold">Hi, I&apos;m Saul Plascencia</h1>
          <p className="text-base sm:text-lg mt-2 text-gray-400">Computer science student<br />at Fresno State 🐾</p>
          <div className="flex gap-4 sm:gap-6 mt-3 sm:mt-4 justify-center sm:justify-start">
            <a href="https://github.com/rgeful" target="_blank" className="hover:opacity-75 transition-opacity">
              <RiGithubLine size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a href="https://www.linkedin.com/in/saul-plascencia-86460128a/" target="_blank" className="hover:opacity-75 transition-opacity">
              <RiLinkedinLine size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a href="mailto:saulplascencia09@gmail.com" className="hover:opacity-75 transition-opacity">
              <RiMailLine size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}