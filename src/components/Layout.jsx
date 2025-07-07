import Navbar from "./Navbar";

export default function Layout({ children}){
    return(
        <>
        <Navbar/>
        <h1 className='text-4xl font-bold text-blue-600 text-center mt-10'>
              🚀 welcome to evntique
            </h1>
        <main className="min-h-screen px-4 py-6">{children}</main>
        </>
    );
}