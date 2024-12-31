import React, { useState } from "react";
import Background from '../component/BackgroundPage';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "When is the event date?",
      answer: "The event will take place on 21-23 December 2024.",
    },
    {
      question: "Where is the event located?",
      answer:
        "The event will be held at the Jogja Expo Center, Yogyakarta.",
    },
    {
      question: "Are tickets refundable?",
      answer: "Tickets are non-refundable. Please plan accordingly.",
    },
    {
      question: "What time does the event start?",
      answer: "The event starts at 6:00 PM, but gates open at 4:30 PM.",
    },
    {
      question: "Is parking available?",
      answer:
        "Yes, parking is available at the venue for a fee. We recommend arriving early to secure your spot.",
    },
    {
      question: "Can I bring my own food and drinks?",
      answer:
        "Outside food and drinks are not allowed. However, food and beverages will be available for purchase at the venue.",
    },
    {
      question: "Is there an age restriction?",
      answer:
        "The event is open to all ages. However, children under 12 must be accompanied by an adult.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach customer support via email at support@jogjazzfestival.com or call us at +123-456-7890.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container p-6 max-w-4xl mx-auto">
      <Background />
      <h1 className="mt-16 text-4xl font-bold text-center mb-10 text-white text-shadow-glow">
        FAQ
      </h1>
      <div className="space-y-0  bg-gray-800 bg-opacity-60 p-10 rounded-xl shadow-[0_0px_35px_rgba(255,255,255,0.7)]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 bg-black hover:bg-gray-950 focus:outline-none"
            >
              <span className="text-xl font-semibold text-white font-Poppins">
                {faq.question}
              </span>
              <span
                className={`text-2xl transform transition-transform ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-screen p-4" : "max-h-0"
              } bg-white bg-opacity-70`}
            >
              <p className="text-lg text-black font-Poppins">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;