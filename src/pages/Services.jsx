import { Link } from "react-router-dom";
export default function Services() {
    const services = [
  {
    image: "https://media.istockphoto.com/id/1011750836/photo/smiling-pregnant-woman-feeling-surprised-seeing-so-many-presents.jpg?s=612x612&w=0&k=20&c=aHYl2oSbRvX7f5Nr2KeXBJL4bnTW0bJTXRjH1QAIf4Y=",
    title: "Chic Engagement Soiree",
    description: "Celebrate your engagement with unparalleled style and sophistication through our Chic Engagement Soiree.",
    cost: "Rs 20,000 onwards",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cuS-3gLzasQ76vu6kC9iq37-M-G-S4yt9Q&s",
    title: "Elegant Wedding Ceremony",
    description: "Make your special day unforgettable with our bespoke wedding event planning and decoration services.",
    cost: "Rs 1,00,000 onwards",
  },
  {
    image: "https://cheetah.cherishx.com/uploads/1615802726_small.jpg",
    title: "Birthday Bash",
    description: "From themed parties to surprise celebrations, we craft joyful birthday experiences for all ages.",
    cost: "Rs 15,000 onwards",
  },
  {
    image: "https://www.shutterstock.com/image-photo/johannesburg-gauteng-south-africa-06092010-600nw-1375254728.jpg",
    title: "Corporate Gala Night",
    description: "Host a professional yet elegant event for your team and clients with our end-to-end corporate event solutions.",
    cost: "Rs 75,000 onwards",
  },
  {
    image: "https://images.unsplash.com/photo-1625990462521-a09e6b880d50?q=80&w=737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Baby Shower Celebration",
    description: "Welcome the new member with our beautifully themed and emotion-filled baby shower events.",
    cost: "Rs 18,000 onwards",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_FbrnEXHkHPPGUjhsmIJg41GFNi4_2NJeLVtwt8Ejr4wsezm6GFWhs5awhvSnaIABtQ&usqp=CAU",
    title: "Cultural Fest",
    description: "From music and dance to food and crafts, we organize vibrant cultural fests that leave lasting memories.",
    cost: "Rs 40,000 onwards",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4R2DlO9W3N2Fd6ejPPk6sNgoeyCt4l8dYyw&s",
    title: "College Farewell Party",
    description: "Send off your batch with style through a grand and unforgettable farewell event.",
    cost: "Rs 25,000 onwards",
  },
  {
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202009/119721612_819078418634880_7161_1200x768.jpeg",
    title: "Anniversary Celebration",
    description: "Relive your love story and celebrate milestones with intimate and beautifully arranged anniversary parties.",
    cost: "Rs 22,000 onwards",
  },
  {
    image: "https://dittonmanor.com/wp-content/uploads/2024/09/how-to-plan-a-christmas-party.jpg",
    title: "Festive Theme Parties",
    description: "Celebrate festivals like Diwali, Christmas, or Holi with custom-themed decorations and joyful activities.",
    cost: "Rs 30,000 onwards",
  },
];

    return (
        <section className="max-w-screen-xl mx-auto px-6 py-20 font-sans">
            <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-2xl text-black font-semibold font-satisfy">
          Services We Offer
        </h2>
      </div>
            {/* grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((services, index) => (
                    <div
                        key={index}
                        className="bg-white border p-2 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer group"
                    >
                        <div className="cover h-48 flex items-center justify-center mb-4 ">
                            <img src={services.image} className="object-cover h-full w-full rounded-xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 font-poppins">
                            {services.title}
                        </h3>
                        <p className="text-sm p-4 text-left text-gray-600 font-poppins">{services.description}</p>
                        <div className="space-x-3 justify-between p-2 hidden md:flex">
                            <p className="text-sm font-bold p-2 text-left font-poppins text-zinc-800">{services.cost}</p>
                            <Link to="/#" className="border border-black text-black px-4 py-2 rounded-full font-medium hover:bg-gray-900 hover:text-white">
                                See Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}