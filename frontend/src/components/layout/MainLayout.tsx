export default function MainLayout({children} : any) {
    return (
        <div className="min-h-screen px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#020617] to-[#0202617]">
            {children}
        </div>
    )
}