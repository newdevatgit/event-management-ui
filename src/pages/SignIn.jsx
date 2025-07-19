import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function SignIn() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-[url(https://i.pinimg.com/originals/52/07/cf/5207cfb3fd0f613551e4f24b50315378.jpg)] bg-cover bg-center bg-no-repeat">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign In</h1>
                
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" placeholder="youremail@email.com" className="mt-1 block w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" placeholder="********" className="mt-1 block w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Sign In
                    </button>

                </form>
                <div className="flex flex-col gap-4 my-4">
                    <button
                        type="button"
                        className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:border-gray-500 text-black p-3 rounded-lg transition shadow-sm hover:shadow-md font-medium"
                    >
                        <FcGoogle className="text-xl block " />
                        Sign in with Google
                    </button>

                    <button
                        type="button"
                        className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:border-gray-500 text-black p-3 rounded-lg transition shadow-sm hover:shadow-md font-medium"
                    >
                        <FaFacebook className="text-xl text-blue-600" />
                        Sign in with Facebook
                    </button>

                </div>
                <p className="mt-6 text-center text-sm text-gray-500">Dont have an account</p>
                <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
            </div>

        </div>
    );
}