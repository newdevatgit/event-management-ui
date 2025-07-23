import { useParams } from "react-router-dom";
import servicesData from "public/servicesData.json";

export default function EventDetails() {
  const { id } = useParams();
  const event = servicesData.find((item) => item.id === Number(id));

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
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
