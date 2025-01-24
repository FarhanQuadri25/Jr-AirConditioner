"use client";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div
      className={`${styles.home} min-h-screen bg-gradient-to-r from-rose-700 to-indigo-700  grid place-content-center`}
      id="home"
    >
      <h1 className="text-3xl sm:text-6xl mt-4 sm:mt-0 font-olive text-center md:mt-8">
        Ac Services
      </h1>
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center lg:space-x-16 space-y-8 lg:space-y-0 p-8 max-w-screen-xl">
        {/* Left Section (Text) */}
        <div className="flex flex-col items-start lg:items-start space-y-6">
          {/* Heading or Title */}
          <h3 className="text-2xl sm:text-3xl  md:text-4xl  text-newprimary font-bold font-inter leading-tight">
            JR Air Conditioner - Reliable HVAC Services for Your Comfort
          </h3>

          {/* First Paragraph */}
          <p className="text-lg lg:text-xl font-medium font-poppins leading-relaxed text-white">
            At JR Air Conditioner, we specialize in providing top-quality HVAC
            services to ensure your home or business stays comfortable all year
            round. Our expertise includes air conditioning installation,
            maintenance, and repair, tailored to meet your unique needs.
          </p>

          {/* Second Paragraph */}
          <p className="text-lg lg:text-xl font-medium font-poppins leading-relaxed text-white">
            With years of industry experience, our team of highly trained
            technicians is committed to delivering cost-effective and reliable
            solutions for all types of air conditioning systems. Whether it
            &apos;s a quick fix or a major installation, we guarantee the
            highest standards of service and customer satisfaction.
          </p>

          {/* <p className="text-lg lg:text-xl font-medium font-poppins leading-relaxed text-white">
            With years of industry experience, our team of highly trained
            technicians is committed to delivering cost-effective and reliable
            solutions for all types of air conditioning systems. Whether it's a
            quick fix or a major installation, we guarantee the highest
            standards of service and customer satisfaction.
          </p>

          <p className="text-lg lg:text-xl font-medium font-poppins leading-relaxed text-white">
            With years of industry experience, our team of highly trained
            technicians is committed to delivering cost-effective and reliable
            solutions for all types of air conditioning systems. Whether it's a
            quick fix or a major installation, we guarantee the highest
            standards of service and customer satisfaction.
          </p>
          <p className="text-lg lg:text-xl font-medium font-poppins leading-relaxed text-white">
            With years of industry experience, our team of highly trained
            technicians is committed to delivering cost-effective and reliable
            solutions for all types of air conditioning systems. Whether it's a
            quick fix or a major installation, we guarantee the highest
            standards of service and customer satisfaction.
          </p>
          <p className="text-lg lg:text-xl font-medium font-poppins leading-relaxed text-white">
            With years of industry experience, our team of highly trained
            technicians is committed to delivering cost-effective and reliable
            solutions for all types of air conditioning systems. Whether it's a
            quick fix or a major installation, we guarantee the highest
            standards of service and customer satisfaction.
          </p>  */}
        </div>
      </div>
    </div>
  );
};

export default Home;
