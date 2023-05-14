import React from "react";

const ServiceCard = ({ title, desc, image, delay }) => {
  return (
    <div
      className=" p-6 bg-white border-t-8 border-purple-700 rounded-sm shadow text-start"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div>
        <img src={image} alt="icon" className="w-40 h-40" />
      </div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h5>
      <p className="font-normal text-gray-700">{desc}</p>
    </div>
  );
};

export default ServiceCard;
