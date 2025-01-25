import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Events.css"; // Custom styles
import AnimatedTitle from "../components/AnimatedTitle";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null); // State for selected event
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  // Event data with details
  const events = [
    {
      name: "Anant Netrunn",
      image: "../img/1.png",
      description: "Description for Event 1",
      date: "10-12-2025",
      time: "10:00 AM",
      venue: "Venue 1",
    },
    {
      name: "Robowar",
      image: "../img/2.png",
      description: "Description for Event 2",
      date: "11-12-2025",
      time: "11:00 AM",
      venue: "Venue 2",
    },
    {
      name: "Overdose",
      image: "../img/3.png",
      description: "Description for Event 3",
      date: "12-12-2025",
      time: "12:00 PM",
      venue: "Venue 3",
    },
    {
      name: "Esports",
      image: "../img/4.png",
      description: "Description for Event 4",
      date: "13-12-2025",
      time: "01:00 PM",
      venue: "Venue 4",
    },
    {
      name: "Night Symposium",
      image: "../img/5.png",
      description: "Description for Event 5",
      date: "14-12-2025",
      time: "02:00 PM",
      venue: "Venue 5",
    },
    {
      name: "Code Crunch",
      image: "../img/6.png",
      description: "Description for Event 6",
      date: "15=12-2025",
      time: "03:00 PM",
      venue: "Venue 6",
    },
    {
      name: "Dalal Street",
      image: "../img/7.png",
      description: "Description for Event 7",
      date: "16-12-2025",
      time: "04:00 PM",
      venue: "Venue 7",
    },
    {
      name: "Bid Boundries",
      image: "../img/8.png",
      description: "Description for Event 8",
      date: "17-12-2025",
      time: "05:00 PM",
      venue: "Venue 8",
    },
    {
      name: "Pixel Perfect",
      image: "../img/9.png",
      description: "Description for Event 9",
      date: "18-12-2025",
      time: "06:00 PM",
      venue: "Venue 9",
    },
    {
      name: "Binary Brains",
      image: "../img/10.png",
      description: "Description for Event 10",
      date: "19-12-2025",
      time: "07:00 PM",
      venue: "Venue 10",
    },
    {
      name: "Manga Mania",
      image: "../img/11.png",
      description: "Description for Event 11",
      date: "20-12-2025",
      time: "08:00 PM",
      venue: "Venue 11",
    },
    {
      name: "Blind Date",
      image: "../img/12.png",
      description: "Description for Event 12",
      date: "21-12-2025",
      time: "09:00 PM",
      venue: "Venue 12",
    },
    {
      name: "Frameflix",
      image: "../img/13.png",
      description: "Description for Event 13",
      date: "22-12-2025",
      time: "10:00 PM",
      venue: "Venue 13",
    },
  ];

  // Function to open modal
  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="events-page bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="absolute inset-0 bg-opacity-50">
        <div className="absolute -top-10 -left-10 h-96 w-96 rounded-full bg-gold-300 opacity-20 blur-3xl"></div>
      </div>

      <AnimatedTitle
        title="<b>Events</b>"
        containerClass="mt-20 !text-white text-center"
      />
      <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        loop
        className="mySwiper"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index} className="event-slide">
            <img
              src={event.image}
              alt={event.name}
              className="event-image rounded-lg shadow-lg"
              onClick={() => openModal(event)}
            />
            <div className="event-details text-center mt-3">
              <h2 className="font-semibold text-lg">{event.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {isModalOpen && selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeModal}
        >
          <div
            className="relative bg-gray-900 p-6 rounded-lg shadow-lg text-white max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-pink-500 hover:text-white text-xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedEvent.image}
              alt={selectedEvent.name}
              className="rounded-lg shadow-md mb-4 w-64 h-auto mx-auto"
            />
            <h2 className="text-2xl font-bold text-cyan-400 mb-2">
              {selectedEvent.name}
            </h2>
            <p className="text-pink-300 mb-2">{selectedEvent.description}</p>
            <p className="text-sm mb-1">
              <span className="font-semibold">Date:</span> {selectedEvent.date}
            </p>
            <p className="text-sm mb-1">
              <span className="font-semibold">Time:</span> {selectedEvent.time}
            </p>
            <p className="text-sm mb-4">
              <span className="font-semibold">Venue:</span>{" "}
              {selectedEvent.venue}
            </p>
            <button
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors"
              onClick={() =>
                alert(`You have registered for ${selectedEvent.name}`)
              }
            >
              Register Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
