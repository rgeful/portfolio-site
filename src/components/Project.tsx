import { RiGithubLine } from 'react-icons/ri';
import Image from 'next/image';

export default function Project() {
    return (
        <div className="p-3 sm:p-6 pt-3 sm:pt-6 pb-12 sm:pb-24 lg:pb-32 max-w-3xl lg:max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 text-black">Projects</h2>
            
            <div className="grid grid-cols-1 gap-4">
                <div className="block p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex gap-3 items-center">
                        <div className="flex-shrink-0">
                            <Image 
                                src="/topsecret.png" 
                                alt="TopSecretTint"
                                width={80}
                                height={80}
                                className="rounded-md object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg text-black font-bold mb-2">
                                TopSecretTint
                            </h3>
                            <p className="text-gray-600 mb-2 text-sm">
                                Freelance project for a tinting business featuring automated email integration and Google Sheets connectivity.
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                <span className="text-black text-[10px]">React</span>
                                <span className="text-black text-[10px]">Vite</span>
                                <span className="text-black text-[10px]">Express</span>
                                <span className="text-black text-[10px]">JavaScript</span>
                                <span className="text-black text-[10px]">Tailwind</span>
                            </div>
                            <div className="flex justify-end mt-2">
                                <a 
                                    href="https://topsecrettint.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-black transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex gap-3 items-center">
                        <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center">
                            <Image 
                                src="/altura.png" 
                                alt="Altura Software Solutions"
                                width={60}
                                height={60}
                                className="rounded-md object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg text-black font-bold mb-2">
                                Altura Software Solutions
                            </h3>
                            <p className="text-gray-600 mb-2 text-sm">
                                Business website offering modern websites and automation tools to help scale small businesses in my area.
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                <span className="text-black text-[10px]">Next.js</span>
                                <span className="text-black text-[10px]">JavaScript</span>
                                <span className="text-black text-[10px]">Tailwind</span>
                            </div>
                            <div className="flex justify-end gap-2 mt-2">
                                <a 
                                    href="https://alturasoftwaresolutions.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-black transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                                <a 
                                    href="https://github.com/rgeful/altura-website" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-black transition-colors"
                                >
                                    <RiGithubLine className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg text-black font-bold mb-2">
                        Motivator SMS
                    </h3>
                    <p className="text-gray-600 mb-2 text-sm">
                        A simple, serverless app that sends motivational messages directly to your Telegram 3 times per day.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                        <span className="text-black text-[10px]">Next.js</span>
                        <span className="text-black text-[10px]">TypeScript</span>
                        <span className="text-black text-[10px]">Vercel</span>
                        <span className="text-black text-[10px]">Telegram API</span>
                    </div>
                    <div className="flex justify-end mt-2">
                        <a 
                            href="https://github.com/rgeful/motivator-sms" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-black transition-colors"
                        >
                            <RiGithubLine className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Upcoming Projects Section */}
            <div className="mt-12 sm:mt-16">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black">Work in Progress</h2>
                
                <div className="grid grid-cols-1 gap-4">
                    <div className="block p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg text-black font-bold mb-2">
                            FlowSync – Natural-Language Automation System
                        </h3>
                        <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                            Building a serverless automation platform that converts plain-English instructions into structured, executable tasks.
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            <span className="text-black text-[10px]">Next.js</span>
                            <span className="text-black text-[10px]">OpenAI API</span>
                            <span className="text-black text-[10px]">Upstash Redis</span>
                            <span className="text-black text-[10px]">Vercel Cron</span>
                        </div>
                    </div>

                    <div className="block p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg text-black font-bold mb-2">
                            ULTIMATE - Fitness Coach Dashboard
                        </h3>
                        <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                            Building a web platform enabling fitness creators to design and sell workout programs, manage clients, and track performance through a modern, Skool-style dashboard.
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            <span className="text-black text-[10px]">Next.js</span>
                            <span className="text-black text-[10px]">TypeScript</span>
                            <span className="text-black text-[10px]">Supabase</span>
                            <span className="text-black text-[10px]">Stripe</span>
                            <span className="text-black text-[10px]">OpenAI API</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}