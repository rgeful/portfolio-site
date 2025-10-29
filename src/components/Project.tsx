import { RiGithubLine } from 'react-icons/ri';

export default function Project() {
    return (
        <div className="p-3 sm:p-6 pt-3 sm:pt-6 pb-12 sm:pb-24 max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-semi-bold mb-3">Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="block p-3 bg-black border border-gray-600">
                    <h3 className="text-base text-white mb-2">
                        TopSecretTint
                    </h3>
                    <p className="text-gray-400 mb-2 text-xs">
                        Freelance project for a tinting business featuring automated email integration and Google Sheets connectivity.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                        <span className="text-white text-[10px]">React</span>
                        <span className="text-white text-[10px]">Vite</span>
                        <span className="text-white text-[10px]">Express</span>
                        <span className="text-white text-[10px]">JavaScript</span>
                        <span className="text-white text-[10px]">Tailwind</span>
                    </div>
                    <div className="flex justify-end mt-2">
                        <a 
                            href="https://topsecrettint.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="block p-3 bg-black border border-gray-600">
                    <h3 className="text-base text-white mb-2">
                        Altura Software Solutions
                    </h3>
                    <p className="text-gray-400 mb-2 text-xs">
                        Business website offering modern websites and automation tools to help scale small businesses in my area.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                        <span className="text-white text-[10px]">Next.js</span>
                        <span className="text-white text-[10px]">JavaScript</span>
                        <span className="text-white text-[10px]">Tailwind</span>
                    </div>
                    <div className="flex justify-end gap-2 mt-2">
                        <a 
                            href="https://alturasoftwaresolutions.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                        <a 
                            href="https://github.com/rgeful/altura-website" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300"
                        >
                            <RiGithubLine className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                <div className="block p-3 bg-black border border-gray-600">
                    <h3 className="text-base text-white mb-2">
                        Motivator SMS
                    </h3>
                    <p className="text-gray-400 mb-2 text-xs">
                        A simple, serverless app that sends motivational messages directly to your Telegram 3× per day using Next.js and Vercel Cron.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                        <span className="text-white text-[10px]">Next.js</span>
                        <span className="text-white text-[10px]">TypeScript</span>
                        <span className="text-white text-[10px]">Vercel</span>
                        <span className="text-white text-[10px]">Telegram API</span>
                    </div>
                    <div className="flex justify-end mt-2">
                        <a 
                            href="https://github.com/rgeful/motivator-sms" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300"
                        >
                            <RiGithubLine className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Upcoming Projects Section */}
            <div className="mt-12 sm:mt-16">
                <h2 className="text-xl sm:text-2xl font-semi-bold mb-4">Upcoming Projects</h2>
                
                <div className="grid grid-cols-1 gap-4">
                    <div className="block p-4 bg-black border border-gray-600">
                        <h3 className="text-lg text-white mb-2">
                            FlowSync – Natural-Language Automation System
                        </h3>
                        <p className="text-gray-400 mb-3 text-xs leading-relaxed">
                            Building a serverless automation platform that converts plain-English instructions (e.g., &quot;Every Monday at 9 AM, post my weekly update&quot;) into structured, executable tasks. Integrating OpenAI for natural-language parsing and scheduling logic, Redis for task persistence, and Vercel Cron for reliable cloud execution. Implementing multi-action workflows (Telegram and webhook triggers), task state management, and an interactive dashboard for creating and monitoring automations.
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            <span className="text-white text-[10px]">Next.js</span>
                            <span className="text-white text-[10px]">OpenAI API</span>
                            <span className="text-white text-[10px]">Upstash Redis</span>
                            <span className="text-white text-[10px]">Vercel Cron</span>
                        </div>
                    </div>

                    <div className="block p-4 bg-black border border-gray-600">
                        <h3 className="text-lg text-white mb-2">
                            ULTIMATE - Fitness Coach Dashboard — Founder & Full-Stack Developer
                        </h3>
                        <p className="text-gray-400 mb-3 text-xs leading-relaxed">
                            Building a web platform enabling fitness creators to design and sell workout programs, manage clients, and track performance through a modern, Skool-style dashboard. Implementing secure authentication, coach storefronts, and Stripe Connect payouts for multi-vendor monetization. Integrating AI-powered workout generation and progress summaries to enhance the coaching experience. Designing responsive dashboards with real-time analytics for both coaches and clients.
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            <span className="text-white text-[10px]">Next.js</span>
                            <span className="text-white text-[10px]">TypeScript</span>
                            <span className="text-white text-[10px]">Supabase</span>
                            <span className="text-white text-[10px]">Stripe</span>
                            <span className="text-white text-[10px]">OpenAI API</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}