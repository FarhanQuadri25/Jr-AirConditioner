"use client";
import { motion } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { SERVICES } from "./data";

// Define a type for the service object
type Service = {
  id: number;
  title: string;
  description: string;
};

export default function Index() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    if (openIndex === id) {
      setOpenIndex(null);
    } else {
      setOpenIndex(id);
    }
  };

  return (
    <div
      className="bg-gradient-to-r min-h-screen from-accent to-purple py-4 sm:py-0 grid place-content-center"
      id="about"
    >
      <h1 className="text-3xl sm:text-6xl mt-4 sm:mt-0 font-olive text-center md:mt-20 mb-14">
        About Us What We Provide In Our Services
      </h1>
      <div className="w-full new-container-2 mx-auto">
        {SERVICES.map((service: Service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-4 bg-white font-poppins rounded-lg shadow-lg border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(service.id)}
              className="w-full px-5 py-3 text-xl font-semibold text-left bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center shadow-2xl"
            >
              {service.title}
              <span>
                {openIndex === service.id ? (
                  <ChevronUp size={24} />
                ) : (
                  <ChevronDown size={24} />
                )}
              </span>
            </button>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: openIndex === service.id ? 1 : 0,
                height: openIndex === service.id ? "auto" : 0,
              }}
              exit={{
                opacity: 0,
                height: 0,
                transition: {
                  duration: 0.3,
                },
              }}
              transition={{ duration: 0.3 }}
              className="px-5 py-3 bg-gray-50"
            >
              <p className="font-poppins text-base text-zinc-700 font-bold">
                {openIndex === service.id && service.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
