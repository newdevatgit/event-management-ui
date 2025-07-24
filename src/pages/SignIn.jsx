import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase"; // Adjust path based on your folder structure
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  // 🔐 Function to sign in using Google
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User signed in:", result.user);

      // ✅ Redirect after successful login
      navigate("/"); // You can redirect to /dashboard or /profile
    } catch (error) {
      console.error("Google sign-in error:", error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign In</h1>

        {/* 🔐 Basic email-password form (optional, not connected to Firebase here) */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="youremail@email.com"
              className="mt-1 block w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="********"
              className="mt-1 block w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit button (currently not connected to Firebase email sign-in) */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* 🔐 OAuth Providers */}
        <div className="flex flex-col gap-4 my-4">
          {/* ✅ Google Sign In Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:border-gray-500 text-black p-3 rounded-lg transition shadow-sm hover:shadow-md font-medium"
          >
            <FcGoogle className="text-xl" />
            Sign in with Google
          </button>

          {/* ❌ Facebook Auth is not set up; placeholder button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:border-gray-500 text-black p-3 rounded-lg transition shadow-sm hover:shadow-md font-medium"
          >
            <FaFacebook className="text-xl text-blue-600" />
            Sign in with Facebook
          </button>
        </div>

        {/* Sign-up redirect */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <a href="/sign-up" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
