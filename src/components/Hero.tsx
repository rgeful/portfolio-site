import Image from "next/image";
import { RiGithubLine, RiLinkedinLine, RiMailLine } from "react-icons/ri";

export default function Hero() {
  return (
    <div className="min-h-screen p-8 flex items-start justify-center pt-32">
      <div className="flex items-center gap-6">
        <Image
          src="/me.jpg"
          alt="Saul"
          width={180}
          height={122}
          className="rounded-full"
        />
        <div>
          <h1 className="text-4xl font-bold">Hi, I&apos;m Saul</h1>
          <p className="text-lg">Computer science student</p>
          <div className="flex gap-6 mt-4">
            <a href="https://github.com/rgeful" target="_blank" className="hover:opacity-75 transition-opacity">
              <RiGithubLine size={24} />
            </a>
            <a href="https://www.linkedin.com/in/saul-plascencia-86460128a/" target="_blank" className="hover:opacity-75 transition-opacity">
              <RiLinkedinLine size={24} />
            </a>
            <a href="mailto:saulplascencia09@gmail.com" className="hover:opacity-75 transition-opacity">
              <RiMailLine size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}