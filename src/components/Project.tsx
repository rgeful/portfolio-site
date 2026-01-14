import Image from 'next/image';
import { PROJECTS, WIP_PROJECTS } from '@/constants/projects';

export default function Project() {
    return (
        <div className="p-3 sm:p-6 pt-3 sm:pt-6 pb-12 sm:pb-24 lg:pb-32 max-w-3xl lg:max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 text-white">Projects</h2>

            <div className="grid grid-cols-1 gap-4">
                {PROJECTS.map((project, index) => {
                    const projectLink = project.liveUrl || project.githubUrl;
                    return (
                        <a
                            key={index}
                            href={projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-4 border border-zinc-700 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                        >
                            <div className="flex gap-3 items-center">
                                {project.video ? (
                                    <div className="flex-shrink-0">
                                        <video
                                            src={project.video}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="rounded-md object-cover w-20 h-20"
                                        />
                                    </div>
                                ) : project.image ? (
                                    <div className="flex-shrink-0">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={80}
                                            height={80}
                                            className="rounded-md object-cover"
                                        />
                                    </div>
                                ) : null}
                                <div className="flex-1">
                                    <h3 className="text-lg text-white font-bold mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-zinc-400 mb-2 text-sm">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="text-zinc-300 text-[10px]">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>

            {/* Work in Progress Section */}
            {WIP_PROJECTS.length > 0 && (
                <div className="mt-12 sm:mt-16">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">Work in Progress</h2>

                    <div className="grid grid-cols-1 gap-4">
                        {WIP_PROJECTS.map((project, index) => {
                            const projectLink = project.liveUrl || project.githubUrl;
                            return (
                                <a
                                    key={index}
                                    href={projectLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block p-4 border border-zinc-700 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                                >
                                    <h3 className="text-lg text-white font-bold mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-zinc-400 mb-3 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="text-zinc-300 text-[10px]">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}