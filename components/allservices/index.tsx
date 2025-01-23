"use client";
import { ReactNode } from "react";
import styles from "./styles.module.scss";
import { Separator } from "@/components/ui/separator";
import { SERVICES } from "@/components/main/about/data";

export default function Index() {
  return (
    <div
      className="bg-gradient-to-tr from-newaccent to-purple min-h-screen sm:py-0 grid place-content-center"
      id="about"
    >
      <h1 className="text-3xl sm:text-6xl mt-4 sm:mt-0 font-olive text-center md:mt-20 mb-14">
        More Information About Our Services
      </h1>
      <div
        className={`${styles.lastchild} 
            new-container-2 mx-auto grid grid-flow-dense gap-6
          grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3`}
      >
        {SERVICES.map((service) => (
          <Block key={service.id}>
            <div
              className={`text-newprimary ${styles.boxshadow} p-4 bg-white shadow-2xl rounded-2xl`}
            >
              <h1 className="text-4xl font-bold font-olive">{service.title}</h1>
              <Separator className="bg-rose-700 h-2 mt-4 mb-4" />
              <p className="text-lg font-poppins leading-relaxed  font-semibold text-newsecondary">
                {service.description}
              </p>
            </div>
          </Block>
        ))}
      </div>
    </div>
  );
}

type Props = {
  children?: React.ReactNode;
};

const Block = ({ children }: Props) => {
  return (
    <>
      {children}
      {/* <div className="border-4 rounded-[50px] hover:shadow-2xl border-rose-800 bg-white p-8">
   
    </div> */}
    </>
  );
};
