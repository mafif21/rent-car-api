import React from "react";
import ServiceCard from "./ServiceCard";

const Services = ({ Quality, Exclusive, Safe }) => {
  return (
    <section className="mt-20 bg-slate-100" id="services">
      <div className="text-center py-10 px-10">
        <h2 className="font-bold text-purple-700">Our Services</h2>
        <div className="mt-3 flex flex-col gap-4">
          <p className="text-4xl font-bold leading-[3rem]">
            We have best service <br /> for the rent cars
          </p>
          <p className="text-lg font-normal text-gray-500">
            We offer competitive rates, well-maintained vehicles, and top-notch
            <br />
            customer service to make your rental experience easy and
            stress-free.
          </p>
        </div>
        <div className="mt-10 grid lg:grid-cols-3 lg:gap-8 gap-4 w-full lg:px-72">
          <ServiceCard
            title="Quality Choice"
            desc="Experience top-notch quality with our car rental service. Choose us for well-maintained vehicles and exceptional customer service."
            image={Quality}
            delay={300}
          />
          <ServiceCard
            title="Exclusive Service"
            desc="Choose our exclusive service for an exceptional rental experience, with customized packages and 24/7 support."
            image={Exclusive}
            delay={400}
          />
          <ServiceCard
            title="Fast and Safe"
            desc="Fast and safe rentals. Drive confidently with our well-maintained fleet and hassle-free rental process."
            image={Safe}
            delay={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
