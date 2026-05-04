export default function MainLayout({children} : {children : React.ReactNode}) {
    return (
        <div className="min-h-screen px-6 md:px-16 lg:px-24">
            {children}
        </div>
    )
}