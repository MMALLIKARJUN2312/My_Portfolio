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

export default function Projects() {
    return (
        <section className="py-16">
            <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    projects.map((project, index) => (
                        <div key = {index} className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <p className="text-gray-400 mt-2">{project.desc}</p>
                            <button className="mt-4 text-purple-400">Live Demo</button>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}