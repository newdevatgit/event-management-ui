import DiscountBanner from "./DiscountBanner";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children}){
    return(
        <div className="flex flex-col min-h-screen w-full font-poppins">
        <Navbar/>
        <DiscountBanner/>
        <main className="min-h-auto px-4 py-2">{children}</main>
        <Footer/>
        </div>
    );
}