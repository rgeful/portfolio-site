import { FaReact, FaGitAlt, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, SiVercel } from "react-icons/si";

const icons = [
  { name: "HTML5", Icon: FaHtml5, color: "text-gray-300" },
  { name: "CSS", Icon: FaCss3Alt, color: "text-white" },
  { name: "JavaScript", Icon: SiJavascript, color: "text-gray-300" },
  { name: "TypeScript", Icon: SiTypescript, color: "text-white" },
  { name: "React", Icon: FaReact, color: "text-gray-300" },
  { name: "Node.js", Icon: FaNodeJs, color: "text-white" },
  { name: "Next.js", Icon: SiNextdotjs, color: "text-gray-300" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-white" },
  { name: "Git", Icon: FaGitAlt, color: "text-gray-300" },
  { name: "Vercel", Icon: SiVercel, color: "text-white" },
];

export default function Marquee() {
  return (
    <div className="w-full flex justify-center py-0 sm:py-1 px-3">
      <div className="w-full max-w-sm sm:max-w-xl relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

        <div className="relative flex">
          <div className="flex animate-marquee whitespace-nowrap">
            {icons.map(({ Icon, name, color }, index) => (
              <div
                key={index}
                className="mx-3 sm:mx-6 flex items-center justify-center"
                title={name}
              >
                <Icon className={`h-6 w-6 sm:h-10 sm:w-10 ${color}`} />
              </div>
            ))}
          </div>

          <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
            {icons.map(({ Icon, name, color }, index) => (
              <div
                key={index}
                className="mx-3 sm:mx-6 flex items-center justify-center"
                title={name}
              >
                <Icon className={`h-6 w-6 sm:h-10 sm:w-10 ${color}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


