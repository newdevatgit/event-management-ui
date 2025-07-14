import {
  FaGift,
  FaBirthdayCake,
  FaUsers,
  FaHeart,
  FaMedal,
  FaMagic,
} from "react-icons/fa";

export default function Categories() {
  const categories = [
    {
      icon: <FaGift size={32} />,
      title: "Wedding Planner",
      description:
        "Every wedding weaves a unique tale. Your day, etched as the most unforgettable moment, is crafted for a lifetime of memories.",
    },
    {
      icon: <FaBirthdayCake size={32} />,
      title: "Birthday Parties",
      description:
        "Vibrant birthdays come to life with us. Create cherished memories, surrounded by laughter and joy. Let’s make your special day extraordinary!",
    },
    {
      icon: <FaUsers size={32} />,
      title: "Anniversaries",
      description:
        "Celebrate enduring love and milestones with elegance. Our curated anniversary events capture the essence of your journey, creating timeless memories.",
    },
    {
      icon: <FaHeart size={32} />,
      title: "Engagement Parties",
      description:
        "Embark on the journey to forever with a celebration of love and commitment. Our engagement parties are crafted to make your moment magical and unforgettable.",
    },
    {
      icon: <FaMedal size={32} />,
      title: "Retirement Parties",
      description:
        "Cheers to a new chapter! Honor a lifetime of achievements with a retirement celebration. Let us curate an event that reflects your distinguished career.",
    },
    {
      icon: <FaMagic size={32} />,
      title: "Baby Shower",
      description:
        "Welcome the arrival of joy with a heartwarming baby shower. For a thoughtful details, let's create a magical celebration for the growing family.",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-6 py-12 text-center">
      {/* Heading
      <h2 className="text-4xl font-bold mb-4">Categories</h2>
      <hr className="border-t-2 border-gray-200 w-24 mx-auto mb-10" /> */}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="text-black">{category.icon}</div>
            <h3 className="text-blue-600 text-lg font-bold">
              {category.title}
            </h3>
            <p className="text-sm text-gray-700 max-w-xs">{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
