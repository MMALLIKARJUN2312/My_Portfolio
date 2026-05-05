export default function Hero() {
    return (
        <section className="py-16 grid lg:grid-cols-2 gap-10 items-center">
            <div>
                <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-xs">
                    Fullstack Developer & AI Enthusiast 
                </span>

                <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
                    I build <span className="text-purple-400">Fullstack</span> solutions <br/>
                    with <span className="text-purple-400">AI</span> capabilities.
                </h1>

                <p className="mt-4 text-gray-400 max-w-lg">
                    I'm Mallikarjun, a B.Tech CSE graduate from IIIT Dharwad.
                    I love building scalable web applications and integrating AI.
                </p>

                <div className="flex gap-4 mt-6">
                    <button className="bg-purple-600 px-6 py-3 rounded-lg">
                        View My Work →
                    </button>

                    <button className="border border-gray-600 px-6 py-3 rounded-lg">
                        Contact Me
                    </button>
                </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl">
                <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full bg-gray-500 mb-4">
                        <h2 className="text-xl font-semibold">Mallikarjun</h2>
                        <p className="text-purple-400">Fullstack Developer</p>
                    </div>
                </div>
            </div>
        </section>
    )
}                                                                                                                                                                                                                                                