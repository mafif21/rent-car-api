import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const About = ({ Carlist }) => {
  return (
    <section className="mt-10" id="about">
      <div className="px-10 grid grid-cols-2 items-center">
        <div>
          <img
            src={Carlist}
            alt="listcar"
            className="h-96 w-full object-cover rounded"
            data-aos="fade-right"
            data-aos-delay="300"
          />
        </div>
        <div className="px-10" data-aos="fade-left" data-aos-delay="300">
          <h2 className="font-bold text-purple-700">About us</h2>
          <div className="mt-3 flex flex-col gap-8">
            <p className="text-4xl font-bold leading-[3rem]">
              More than 100+ special collections cars
            </p>
            <p className="text-lg font-normal text-gray-500">
              We are a team of dedicated professionals who are passionate about
              providing the best possible service to our customers. With years
              of experience in the industry, we have developed a reputation for
              excellence and are committed to maintaining the highest standards.
            </p>

            <Link
              to="/cars"
              className="focus:outline-none text-white bg-[#5e4ff8] font-medium rounded-sm text-sm px-5 py-2.5 w-1/3 text-center"
            >
              See All Cars
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
