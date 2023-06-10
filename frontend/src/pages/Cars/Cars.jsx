import React, { useState, useEffect } from "react";
import Banner from "../../assets/img/cars-page.jpg";
import Card from "../../components/Card";

const Cars = () => {
  const [carFind, setCarFind] = useState("");
  const [collections, setCollections] = useState([]);
  const endpoint = "http://rentycar.website/public/api/rentcars";

  useEffect(() => {
    getData(endpoint);
  }, []);

  const getData = async (uri) => {
    try {
      const response = await fetch(uri, {
        method: "GET",
      });
      const dataJson = await response.json();

      const { datas } = dataJson;
      setCollections(datas.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="relative">
        <div className="w-full h-full absolute bg-black opacity-50 z-10"></div>
        <img
          src={Banner}
          alt="banner"
          className="rounded h-44 w-full object-cover "
        />
        <div className="px-10 lg:px-0 absolute text-white font-semibold z-20 text-center inset-0 h-full flex items-center justify-center">
          <p>
            Rent Cars for Every Occasion. Book Now and Enjoy a Smooth Ride with
            Us!
          </p>
        </div>
      </div>

      <div className="lg:px-40 px-10 lg:mb-10 py-10 bg-slate-100">
        <div className="mt-10 flex justify-between lg:items-center lg:flex-row flex-col">
          <h1 className="text-xl font-bold">All Cars</h1>
          <div>
            <input
              type="search"
              id="default-search"
              className=" lg:w-96 w-full p-2 pl-5 text-sm rounded-md text-gray-900 border border-gray-300 bg-gray-50 lg:mt-0 mt-4"
              placeholder="Find Cars..."
              onChange={(e) => setCarFind(e.target.value)}
              value={carFind}
            />
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-4 gap-8 grid-cols-1">
          {collections
            .filter(
              (item) =>
                !carFind ||
                item.car_name.toLowerCase().includes(carFind.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={item.id}
                title={item.car_name}
                image={item.image}
                type={item.type}
                price={item.price}
                status={item.status}
                delay={100 * index}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Cars;
