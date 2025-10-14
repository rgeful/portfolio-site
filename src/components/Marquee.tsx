import Image from "next/image";

const logos = [
  { name: "HTML5", src: "/HTML5.svg" },
  { name: "CSS", src: "/CSS.svg" },
  { name: "JavaScript", src: "/js.svg" },
  { name: "TypeScript", src: "/ts.svg" },
  { name: "React", src: "/react.svg" },
  { name: "Node.js", src: "/nodejs.svg" },
  { name: "Next.js", src: "/nextjs.svg" },
  { name: "Tailwind CSS", src: "/tailwindcss.svg" },
  { name: "Git", src: "/git.svg" },
  {name: "CSharp", src: "/csharp.svg"},
  { name: "Vercel", src: "/vercel.svg" },
];

export default function Marquee() {
  return (
    <div className="w-full flex justify-center py-0 sm:py-2 px-4">
      <div className="w-full max-w-xs sm:max-w-3xl overflow-hidden py-6">
        <div className="relative flex">
          <div className="flex animate-marquee whitespace-nowrap">
            {logos.map((logo, index) => (
              <div key={index} className="mx-4 sm:mx-8 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={48}
                  height={48}
                  className="h-8 w-8 sm:h-12 sm:w-12 object-contain flex-shrink-0"
                />
              </div>
            ))}
          </div>
          <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
            {logos.map((logo, index) => (
              <div key={index} className="mx-4 sm:mx-8 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={48}
                  height={48}
                  className="h-8 w-8 sm:h-12 sm:w-12 object-contain flex-shrink-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

