import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-16">
      <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-8">Hi, welcome to my website!</h1>

      <div className="flex flex-wrap gap-4 md:gap-6 mb-8 md:mb-12 justify-center md:justify-start">
        <div className="relative w-40 h-48 md:w-48 md:h-56 bg-white p-3 rotate-[-3deg] shadow-lg">
          <Image
            src="/pointlobos.webp"
            alt="Point Lobos, 2024"
            width={192}
            height={224}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative w-40 h-48 md:w-48 md:h-56 bg-white p-3 rotate-[1deg] shadow-lg">
          <Image
            src="/bigsur.webp"
            alt="Big Sur, 2024"
            width={192}
            height={224}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="space-y-6 text-white">
        <p>
          I&apos;m Saul from <span className="underline">Los Banos, CA</span> and am currently studying computer science at CSU Fresno. I&apos;m currently looking for any experience I can get in the world of software engineering.
        </p>

        <p>
          I love creating things and always have a project or two going on. I started drawing as a kid, which led me to video editing, making a clothing brand in high school, and eventually programming. I enjoy working on web apps, exploring AI, and building useful tools.
        </p>

        <p>
          Most days you&apos;ll find me <span className="underline">running</span> or in the gym. I also like hiking and eating food, lots of food. When I want to chill, I usually play Souls games or doomscroll.
        </p>

        <p>
          There&apos;s so much in this world that I want to understand and countless problems I want to solve. Thanks for stopping by! 👋
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-white mb-6">Elsewhere</h2>
        <div className="flex flex-wrap gap-4">
          <a href="https://github.com/rgeful" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/saul-plascencia-86460128a/" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="mailto:saulplascencia09@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
