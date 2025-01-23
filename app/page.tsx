import Carousel from "@/components/main/carousel/Carousel";
import Home from "@/components/main/home/Home";
import AllServices from "@/components/allservices";
import Contact from "@/components/contact";

export default function HomePage() {
  return (
    <>
      <Carousel />
      <Home />
      <AllServices />
      <Contact />
    </>
  );
}
