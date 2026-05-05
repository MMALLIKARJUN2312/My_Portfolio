import {motion} from 'framer-motion';

export default function Hero() {
    return (
        <section className="py-20 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
                initial = {{opacity : 0, y : 40}}
                animate = {{opacity : 1, y : 0}}
                transition={{duration : 0.6}}
            >
                <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-xs">
                    Fullstack Developer & AI Enthusiast 
                </span>

                <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
                    I build {" "}<span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Fullstack</span>{" "} solutions <br/>
                    with {" "}<span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">AI</span>{" "} capabilities.
                </h1>

                <p className="mt-6 text-gray-400 max-w-lg">
                    I love building scalable web applications and AI powered systems with modern technologies.
                </p>

                <div className="flex gap-4 mt-8">
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-lg hover:scale-105 transition">
                        View My Work →
                    </button>

                    <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-white/10 transition">
                        Contact Me
                    </button>
                </div>
            </motion.div>

            <motion.div 
                initial = {{opacity : 0, scale : 0.9}}
                animate = {{opacity : 1, scale : 1}}
                transition= {{duration : 0.6}}
                className="relative"
            >
                <div className='bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl'>
                    <div className="flex flex-col items-center">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
                            <h2 className="text-xl font-semibold">Mallikarjun</h2>
                            <p className="text-purple-400">Fullstack Developer</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}                                                                                                                                                                                                                                                