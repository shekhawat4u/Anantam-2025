import { useState } from "react";
import "./Events.css";

const Events = () => {
  const events = [
    {
      id: 1,
      name: "Anant Netrunn",
      image: "public/img/s1.png",
      text: "The Coding Marathon",
    },
    {
      id: 2,
      name: "Robowar",
      image: "public/img/s2.png",
      text: "The Legend of ROBOTs",
    },
    {
      id: 3,
      name: "Blind Date",
      image: "public/img/s3.png",
      text: "Blinded Coding EvE",
    },
    {
      id: 4,
      name: "Bid Boundaries",
      image: "public/img/s4.png",
      text: "Auctioning your Bids",
    },
    {
      id: 5,
      name: "Anime Quiz",
      image: "public/img/s5.png",
      text: "Anime memory Backup",
    },
    {
      id: 6,
      name: "Overdose",
      image: "public/img/s1.png",
      text: "The Coding Marathon",
    },
    {
      id: 7,
      name: "Esports",
      image: "public/img/s2.png",
      text: "The Legend of ROBOTs",
    },
    {
      id: 8,
      name: "Night Symposium",
      image: "public/img/s3.png",
      text: "Blinded Coding EvE",
    },
    {
      id: 9,
      name: "Code Crunch",
      image: "public/img/s4.png",
      text: "Auctioning your Bids",
    },
    {
      id: 10,
      name: "Dalal Street",
      image: "public/img/s5.png",
      text: "Anime memory Backup",
    },
    {
      id: 11,
      name: "Pixel Perfect",
      image: "public/img/s1.png",
      text: "Anime memory Backup",
    },
    {
      id: 12,
      name: "Binary Brains",
      image: "public/img/s2.png",
      text: "Anime memory Backup",
    },
    {
      id: 13,
      name: "Manga Mania",
      image: "public/img/s3.png",
      text: "Anime memory Backup",
    },
    {
      id: 14,
      name: "Frameflix",
      image: "public/img/s4.png",
      text: "Anime memory Backup",
    },
  ];

  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState(""); // Animation class state

  const handleNextEvent = () => {
    setAnimationClass("next");
    setTimeout(() => {
      setCurrentEventIndex((prevIndex) =>
        prevIndex === events.length - 1 ? 0 : prevIndex + 1
      );
    }, 500); // Match the animation duration (0.5s)
  };

  const handlePrevEvent = () => {
    setAnimationClass("prev");
    setTimeout(() => {
      setCurrentEventIndex((prevIndex) =>
        prevIndex === 0 ? events.length - 1 : prevIndex - 1
      );
    }, 500); // Match the animation duration (0.5s)
  };

  return (
    <div className="about-container mt-44 mb-40">
      <div className="content">
        <div className="event-container">
          <div
            className={`pexy ${
              animationClass === "next"
                ? "dexy-slide-in-left"
                : "dexy-slide-in-right"
            }`}
          >
            {events[currentEventIndex].text}
          </div>
          <div
            className="event-display"
            onAnimationEnd={() => setAnimationClass("")}
          >
            <div
              className={`dexy ml-52 ${
                animationClass === "next"
                  ? "dexy-slide-in-right"
                  : "dexy-slide-in-left"
              }`}
            >
              {events[currentEventIndex].name}
            </div>
            <div
              className={`sexy ml-16 ${
                animationClass === "next"
                  ? "sexy-slide-in-right"
                  : "sexy-slide-in-left"
              }`}
            >
              {events[currentEventIndex].name}
            </div>
            <div
              className={`sexy-no ml-20 ${
                animationClass === "next"
                  ? "sexy-no-slide-in-right"
                  : "sexy-no-slide-in-left"
              }`}
            >
              {events[currentEventIndex].id.toString().padStart(2, "0")}
            </div>
          </div>
          <img
            style={{
              width: "900px",
              height: "auto",
              maxWidth: "none",
            }}
            className={`event-image ${
              animationClass === "next" ? "slide-in-right" : "slide-in-left"
            }`}
            src={events[currentEventIndex].image}
            key={currentEventIndex}
            alt={events[currentEventIndex].name}
          />
        </div>
        <div className="navigation-buttons mt-4">
          <button onClick={handlePrevEvent}>&lt;</button>
          <button onClick={handleNextEvent}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Events;