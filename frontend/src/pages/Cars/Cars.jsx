import React, { useState, useEffect } from "react";
import Banner from "../../assets/img/cars-page.jpg";
import Card from "../../components/Card";
// import Image from "../../assets/img/jumbotron-image.jpg";

const Cars = () => {
  const [carFind, setCarFind] = useState("");
  const [collections, setCollections] = useState([]);
  const endpoint = "http://localhost:8000/api/rentcars?limit=12";

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
        <div className="absolute text-white font-semibold z-20 text-center inset-0 h-full flex items-center justify-center">
          <p>
            Rent Cars for Every Occasion. Book Now and Enjoy a Smooth Ride with
            Us!
          </p>
        </div>
      </div>

      <div className="px-40 mb-10 py-10 bg-slate-100">
        <div className="mt-10 flex justify-between items-center">
          <h1 className="text-xl font-bold">All Cars</h1>
          <div>
            <input
              type="search"
              id="default-search"
              className=" w-96 p-2 pl-5 text-sm rounded-md text-gray-900 border border-gray-300  bg-gray-50"
              placeholder="Find Cars..."
              onChange={(e) => setCarFind(e.target.value)}
              value={carFind}
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-4 gap-8">
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
