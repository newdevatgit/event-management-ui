// src/pages/Cart.jsx
export default function Cart() {
  return (
    <div className="max-w-screen-md mx-auto mt-12 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">My Cart</h2>
      <p className="text-gray-600">You haven’t added any events yet.</p>
      {/* Later: Add cart logic with context or Firebase Firestore */}
    </div>
  );
}
