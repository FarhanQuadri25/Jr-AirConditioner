import Carousel from "@/components/main/carousel/Carousel";
import Home from "@/components/main/home/Home";
import About from "@/components/main/about";
import { AnimatePresence } from "motion/react";
import AllServices from "@/components/allservices";
import Contact from '@/components/contact';

export default function HomePage() {
  return (
    <>
      <Carousel />
      <Home />
      {/* <AnimatePresence mode="wait">
        <About />
      </AnimatePresence> */}
      <AllServices />
      <Contact/>
    </>
  );
}
