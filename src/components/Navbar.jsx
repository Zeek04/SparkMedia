export default function Navbar(){
    return(
        <nav className="p-4 bg-black text-white flex justify-between">
            <h1 className="text-xl">My Portfilio</h1>
            <div className="space-x-4">
                <a href="#home">Home</a>
                <a href="#gallery">Gallery</a>
                <a href="pricing">Princing</a>
                <a href="about">About</a>
                <a href="contact">Contact</a>
            </div>
        </nav>
    )
} 