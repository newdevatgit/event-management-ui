import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <nav className="w-full px-2 py-2 flex justify-between items-center bg-white shadow-sm font-poppins">
            <div className="text-2xl font-bold text-black">
                <Link to="/">
                    Eventique.
                </Link>
            </div>
            <ul className="hidden md:flex space-x-8 text-md font-medium text-black">
                <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
                <li><Link to="/categories" className="hover:text-yellow-400">Categories</Link></li>
                <li><Link to="/services" className="hover:text-yellow-400">Services</Link></li>
                <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
            </ul>
            <div className="space-x-3 hidden md:flex">
                <Link to="/sign-in" className="border border-black text-black px-4 py-2 rounded-full font-medium hover:bg-gray-100">
                    Log in
                </Link>
                <Link to="/sign-up" className="bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-gray-900">
                    Sign up
                </Link>
            </div>
        </nav>
        
    );
}
