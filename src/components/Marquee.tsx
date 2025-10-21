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
    <div className="w-full flex justify-center py-0 sm:py-2 px-4">
      <div className="w-full max-w-xs sm:max-w-3xl overflow-hidden py-6">
        <div className="relative flex">
          <div className="flex animate-marquee whitespace-nowrap">
            {icons.map(({ Icon, name, color }, index) => (
              <div
                key={index}
                className="mx-4 sm:mx-8 flex items-center justify-center"
                title={name}
              >
                <Icon className={`h-8 w-8 sm:h-12 sm:w-12 ${color}`} />
              </div>
            ))}
          </div>

          <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
            {icons.map(({ Icon, name, color }, index) => (
              <div
                key={index}
                className="mx-4 sm:mx-8 flex items-center justify-center"
                title={name}
              >
                <Icon className={`h-8 w-8 sm:h-12 sm:w-12 ${color}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


