import React from "react";
import { Link } from "react-router-dom";

const Jumbotron = ({ jumbotronImage }) => {
  return (
    <section>
      <div className="relative">
        <div className="absolute w-full lg:w-1/2 lg:top-16 top-28 mx-auto lg:p-10">
          <div className="mb-5" data-aos="fade-right" data-aos-delay="300">
            <h1 className="lg:text-5xl text-3xl text-white font-bold mb-5 text-center lg:text-left lg:leading-[3.5rem]">
              Search and find your best your best car rental with easy way
            </h1>
            <p className="text-white font-normal lg:w-5/6 text-center px-6 text-sm lg:text-normal lg:px-0 lg:text-left">
              Welcome to our car rental service! We offer a wide variety of
              vehicles to fit your every need. Whether you're exploring the city
              or heading out on a road trip, we've got you covered.
            </p>
          </div>
          <div
            className="flex gap-10 lg:items-center justify-center lg:justify-start"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <button
              type="button"
              className="focus:outline-none text-white bg-[#5e4ff8] focus:ring-4 font-medium rounded-md text-sm px-5 py-2.5"
            >
              Booking Now
            </button>
            <div className="p-2 border-b-2">
              <Link to="/cars" className="font-medium text-white">
                See All Cars
              </Link>
            </div>
          </div>
        </div>
        <img
          src={jumbotronImage}
          alt="jumbotImage"
          className="h-[32rem] w-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default Jumbotron;
