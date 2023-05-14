import React from "react";

const Card = ({ title, merk, type, image, price, status, delay }) => {
  const rupiahFormat = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
  return (
    <div
      className=" bg-white border border-gray-200 rounded-lg shadow"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="relative">
        <img className="rounded-t-lg" src={image} alt={title} />
        <span className="absolute left-5 top-5 bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-4 py-1 rounded">
          {type}
        </span>
      </div>

      <div className="p-5">
        <div className="flex justify-between mb-3">
          <div className="flex flex-col">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
              {title}
            </h5>
            <p>{rupiahFormat} / days</p>
          </div>
          <p>{merk}</p>
        </div>

        <div
          className={
            status === "Available"
              ? "text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center"
              : "text-white bg-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center"
          }
        >
          {status}
        </div>
      </div>
    </div>
  );
};

export default Card;
