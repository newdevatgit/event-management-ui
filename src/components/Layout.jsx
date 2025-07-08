import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children}){
    return(
        <>
        <Navbar/>
        <main className="min-h-screen px-4 py-6">{children}</main>
        <Footer/>
        </>
    );
}