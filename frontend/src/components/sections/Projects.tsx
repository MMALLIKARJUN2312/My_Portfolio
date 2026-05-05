import {motion} from 'framer-motion';

export default function Projects() {
    const projects = [
        {
            title : "AI Tutor and Adaptive Learning Platform",
            desc : "RAG based adaptive learning system"
        },
        {   
            title : "Blog Application With GenAI Suggestions",
            desc : "Users can create,edit and delete blog posts, while leveraging AI to generate related topic ideas"
        }
    ]

    return (
        <section className="py-20">
            <h2 className="text-2xl font-semibold mb-8">Featured Projects</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    projects.map((project, index) => (
                        <motion.div key = {index} 
                            whileHover={{scale : 1.05}}
                            className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl hover:shadow-purple-500/20 hover:shadow-lg transition">
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <p className="text-gray-400 mt-2">{project.desc}</p>
                            <button className="mt-4 text-purple-400 hover:underline">Live Demo</button>
                        </motion.div>
                    ))
                }
            </div>
        </section>
    )
}