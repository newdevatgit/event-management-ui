// src/pages/Profile.jsx
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return <div className="text-center mt-10 text-xl text-gray-600">Loading Profile...</div>;
  }

  return (
    <div className="max-w-lg mx-auto mt-12 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">My Profile</h2>
      <div className="space-y-3 text-gray-700">
        <p><strong>Name:</strong> {user.displayName || "N/A"}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>UID:</strong> {user.uid}</p>
      </div>
    </div>
  );
}
