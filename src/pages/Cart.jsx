// src/pages/Cart.jsx
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { IoRemoveCircleSharp } from "react-icons/io5";
import { CiSquareRemove } from "react-icons/ci";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch cart items from Firestore
  const fetchCart = async () => {
    const user = auth.currentUser;
    if (!user) {
      setCartItems([]);
      setLoading(false);
      return;
    }

    try {
      const cartRef = collection(db, "users", user.uid, "cart");
      const cartSnap = await getDocs(cartRef);
      const items = cartSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCartItems(items);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // Delete item from Firestore cart
  const handleDelete = async (itemId) => {
    const user = auth.currentUser;
    if (!user) return;

    try {
      await deleteDoc(doc(db, "users", user.uid, "cart", itemId));
      setCartItems((prev) => prev.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  // Calculate total cost
  const totalCost = cartItems.reduce((total, item) => {
    const cost = parseInt(item.cost.replace(/[^0-9]/g, ""), 10) || 0;
    return total + cost;
  }, 0);

  if (loading) {
    return (
      <div className="text-center py-20 text-lg text-gray-600">
        Loading your cart...
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20 text-lg text-gray-600">
        Your cart is empty.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 font-poppins">
      <h2 className="text-2xl font-bold mb-8">My Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition relative"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-500">{item.cost}</p>
            <button
              onClick={() => handleDelete(item.id)}
              className="absolute text-3xl text-bold top-4 right-4 text-black hover:text-red-700 "
            >
              <CiSquareRemove />
            </button>
          </div>
        ))}
      </div>

      {/* Total and Checkout */}
      <div className="mt-8 border-t pt-6">
        <p className="text-xl font-semibold mb-4">
          Total: ₹{totalCost.toLocaleString()}
        </p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
          onClick={() => alert("Checkout functionality coming soon...")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
