const tech = ["HTML", "CSS", "JavaScript", "Python", "SQLite", "MySQL", "PostgreSQL", "MongoDB", "Express.js", "React.js", "Node.js", "Responsive Web Design", "TailwindCSS", "N8N", "RAG", "Automation"];

export default function TechStack () {
    return (
        <div className="flex flex-wrap gap-4 py-6 border-y border-white/10">
            {
                tech.map((eachTech) => (
                    <span key = {eachTech} className="px-4 py-2 border border-white/10 rounded-lg text-sm hover:bg-purple-500/10 transition">{eachTech}</span>
                ))
            }
        </div>
    )
}