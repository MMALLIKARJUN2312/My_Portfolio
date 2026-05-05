export default function MainLayout({children} : {children : React.ReactNode}) {
    return (
        <div className="relative min-h-screen px-6 md:px-16 lg:px-24 overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
            </div>
        
            <div className="relative z-10">
                {children}
            </div>
        </div>
        
    )
}