import { RiGithubLine } from 'react-icons/ri';

export default function Project() {
    return (
        <div className="p-4 sm:p-8 pt-4 sm:pt-8 pb-16 sm:pb-32 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semi-bold mb-4">Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="block p-4 bg-black border border-gray-600">
                    <h3 className="text-lg text-white mb-2">
                        TopSecretTint
                    </h3>
                    <p className="text-gray-400 mb-3 text-sm">
                        Freelance project for a tinting business featuring automated email integration and Google Sheets connectivity.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-white text-xs">React</span>
                        <span className="text-white text-xs">Vite</span>
                        <span className="text-white text-xs">Express</span>
                        <span className="text-white text-xs">JavaScript</span>
                        <span className="text-white text-xs">Tailwind</span>
                    </div>
                    <div className="flex justify-end mt-3">
                        <a 
                            href="https://topsecrettint.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="block p-4 bg-black border border-gray-600">
                    <h3 className="text-lg text-white mb-2">
                        Altura Software Solutions
                    </h3>
                    <p className="text-gray-400 mb-3 text-sm">
                        Business website offering modern websites and automation tools to help scale small businesses in my area.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-white text-xs">Next.js</span>
                        <span className="text-white text-xs">JavaScript</span>
                        <span className="text-white text-xs">Tailwind</span>
                    </div>
                    <div className="flex justify-end gap-2 mt-3">
                        <a 
                            href="https://alturasoftwaresolutions.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                        <a 
                            href="https://github.com/rgeful/altura-website" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300"
                        >
                            <RiGithubLine className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="block p-4 bg-black border border-gray-600">
                    <h3 className="text-lg text-white mb-2">
                        Motivator SMS
                    </h3>
                    <p className="text-gray-400 mb-3 text-sm">
                        A simple, serverless app that sends motivational messages directly to your Telegram 3× per day using Next.js and Vercel Cron.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-white text-xs">Next.js</span>
                        <span className="text-white text-xs">TypeScript</span>
                        <span className="text-white text-xs">Vercel</span>
                        <span className="text-white text-xs">Telegram API</span>
                    </div>
                    <div className="flex justify-end mt-3">
                        <a 
                            href="https://github.com/rgeful/motivator-sms" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300"
                        >
                            <RiGithubLine className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}