import Image from "next/image";
import { RiGithubLine, RiLinkedinLine, RiMailLine, RiMapPinLine } from "react-icons/ri";

export default function Hero() {
  return (
    <div className="p-4 sm:p-8 flex items-start justify-center pt-16 sm:pt-32 pb-8 sm:pb-16 lg:pt-0 lg:pb-0 lg:justify-end lg:pr-4">
      <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-6 sm:gap-8 text-center sm:text-left lg:text-left lg:items-start">
        <Image
          src="/me.jpg"
          alt="Saul"
          width={160}
          height={160}
          className="rounded-full w-32 h-32 sm:w-40 sm:h-40"
        />
        <div className="lg:max-w-md">
          <h1 className="text-2xl sm:text-4xl font-bold text-black">Hi, I&apos;m Saul Plascencia</h1>
          <div className="flex items-center gap-1.5 mt-2 justify-center sm:justify-start">
            <RiMapPinLine className="text-gray-500 w-4 h-4" />
            <p className="text-sm text-gray-500">Los Banos, CA</p>
          </div>
          <p className="text-lg sm:text-xl mt-3 text-gray-600">Computer science student<br />at Fresno State. I like building web applications and exploring AI technologies.</p>
          <div className="flex gap-5 sm:gap-7 mt-4 sm:mt-5 justify-center sm:justify-start">
            <a href="https://github.com/rgeful" target="_blank" className="text-gray-600 hover:text-black transition-colors">
              <RiGithubLine size={24} className="sm:w-8 sm:h-8" />
            </a>
            <a href="https://www.linkedin.com/in/saul-plascencia-86460128a/" target="_blank" className="text-gray-600 hover:text-black transition-colors">
              <RiLinkedinLine size={24} className="sm:w-8 sm:h-8" />
            </a>
            <a href="mailto:saulplascencia09@gmail.com" className="text-gray-600 hover:text-black transition-colors">
              <RiMailLine size={24} className="sm:w-8 sm:h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}