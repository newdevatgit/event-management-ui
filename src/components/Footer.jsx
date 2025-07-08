import { BiCategory } from "react-icons/bi";
import { FaInstagram, FaTwitter, FaLinkedin, FaHome, FaCog, FaEnvelope, FaNewspaper } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-yellow-400 to-yellow-500 text-black px-6 md:px-12 py-8 rounded-2xl shadow-xl font-sans mt-12 mx-auto max-w-screen-xl">

            {/* CONTACT US Banner */}
            <div className="w-full h-12 bg-black text-white px-4 py-2 inline-flex items-center gap-2 rounded-md font-semibold tracking-wide text-sm">
                <span>CONTACT US</span>
                <i className="text-yellow-400"><FaEnvelope /></i>
            </div>

            {/* Main Grid */}
            <div className="mt-8 grid md:grid-cols-3 gap-5 p-200px items-start justify-center">
                {/* Left Side */}
                <div className="flex flex-col justify-evenly items-center ">
                    <h2 className="text-[4rem] leading-none font-extrabold tracking-tight mb-4">GET IN TOUCH.</h2>
                    <div className="border-t border-black mb-4 w-3/4"></div>
                    <p className="text-sm max-w-md">
                        We handle every detail so you can focus on the moments that matter most.
                        Planning made easy, memories made forever.
                    </p>

                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-6 text-xl">
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                </div>

                {/* 2nd column — Centered Quick Links */}
                <div className="text-sm font-bold flex flex-col space-y-3 p-10">
                  
                    <p className="flex items-center gap-2 hover:underline cursor-pointer"><FaHome /> Home</p>
                    <p className="flex items-center gap-2 hover:underline cursor-pointer"><BiCategory /> Categories</p>
                    <p className="flex items-center gap-2 hover:underline cursor-pointer"><FaCog /> Services</p>
                    <p className="flex items-center gap-2 hover:underline cursor-pointer"><FaEnvelope /> Contact</p>
                    <p className="flex items-center gap-2 hover:underline cursor-pointer"><FaNewspaper /> Blog</p>
                </div>

                {/* 3rd column — Two-column Contact Details in rows */}
                <div className="text-sm font-bold flex flex-col gap-3 p-10 pl-0">
                    

                    <div className="flex justify-between gap-2">
                        <p className="text-black/80">BASED IN</p>
                        <p className="text-right">UJJAIN MP, INDIA</p>
                    </div>

                    <div className="flex justify-between gap-2">
                        <p className="text-black/80">PHONE NO.</p>
                        <p className="text-right">+91 7878 ******</p>
                    </div>

                    <div className="flex justify-between gap-2">
                        <p className="text-black/80">CONTACT</p>
                        <p className="text-right">CONTACT@EVENTIQUE.COM</p>
                    </div>

                    <div className="flex justify-between gap-2">
                        <p className="text-black/80">SUPPORT</p>
                        <p className="text-right">HELP@EVENTIQUE.COM</p>
                    </div>

                    <div className="flex justify-between gap-2">
                        <p className="text-black/80">STATUS</p>
                        <p className="text-right">STATUS PAGE</p>
                    </div>
                </div>




            </div>

            {/* Bottom Line */}
            <div className="border-t border-black mt-10 pt-4 flex justify-between text-xs font-bold uppercase tracking-wider">
                <p>© 2025 EVENTIQUE. ALL RIGHTS RESERVED.</p>
                <a href="#" className="hover:underline">Go Back to Top</a>
            </div>
        </footer>
    );
}
