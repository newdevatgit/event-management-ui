import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <nav className="w-full px-4 py-2y flex justify-between items-center bg-white shadow-sm font-poppins">
            <div>
                <Link to="/">
                    <img
                        src="src/assets/logo.jpg"
                        alt="Eventique"
                        className="h-[60px] w-auto object-fill"
                    />
                </Link>
            </div>

            <ul className="hidden md:flex space-x-8 text-md font-medium text-black">
                <li><Link to="/" className="hover:text-purple-500">Home</Link></li>
                <li><Link to="/categories" className="hover:text-purple-500">Categories</Link></li>
                <li><Link to="/services" className="hover:text-purple-500">Services</Link></li>
                <li><Link to="/contact" className="hover:text-purple-500">Contact</Link></li>
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
