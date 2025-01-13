import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function Layout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="font-work-sans">
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    )
}