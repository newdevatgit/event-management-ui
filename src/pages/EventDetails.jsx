// src/pages/EventDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase"; // Make sure this path is correct
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [user, setUser] = useState(null);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    // Fetch event data
    fetch("/servicesData.json")
      .then((res) => res.json())
      .then((data) => {
        const matchedEvent = data.find((item) => item.id === Number(id));
        setEvent(matchedEvent);
      })
      .catch((err) => console.error("Error loading event data:", err));
  }, [id]);

  useEffect(() => {
    // Listen to auth state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleAddToCart = async () => {
    if (!user) {
      alert("Please sign in to add items to your cart.");
      navigate("/sign-in");
      return;
    }

    try {
      setAdding(true);
      const cartRef = doc(db, "users", user.uid, "cart", `event-${event.id}`);
      await setDoc(cartRef, {
        ...event,
        addedAt: new Date(),
      });
      alert("Event added to cart!");
    } catch (err) {
      console.error("Error adding to cart:", err);
      alert("Failed to add to cart.");
    } finally {
      setAdding(false);
    }
  };

  if (!event) {
    return (
      <div className="text-center py-20 text-xl text-red-500">
        Event not found!
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={event.image}
          alt={event.title}
          className="w-full md:w-1/2 h-auto rounded-xl shadow-lg"
        />
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">{event.title}</h2>
          <p className="text-gray-600">{event.description}</p>
          <p className="text-sm text-gray-500">
            <strong>Location:</strong> {event.location}
          </p>
          <p className="text-sm text-gray-500">
            <strong>Duration:</strong> {event.duration}
          </p>
          <p className="text-xl font-semibold text-black">{event.cost}</p>

          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg disabled:opacity-60"
            onClick={handleAddToCart}
            disabled={adding}
          >
            {adding ? "Adding..." : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
