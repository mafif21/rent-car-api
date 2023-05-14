import React, { useEffect, useState } from "react";
import Image from "../assets/img/jumbotron-image.jpg";
import Card from "./Card";

const Collection = () => {
  const [collections, setCollections] = useState([]);
  const endpoint = "http://localhost:8000/api/rentcars?limit=3";

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
    <section className="my-20 px-10" id="collection">
      <div className="text-center">
        <h2 className="font-bold text-purple-700 mb-2">Collections</h2>

        <p className="text-4xl font-bold leading-[3rem]">Our Collections Car</p>
      </div>
      <div className="mt-5 grid grid-cols-3 px-5 gap-y-5">
        {collections.map((data) => (
          <Card
            key={data.id}
            title={data.car_name}
            image={Image}
            type={data.type}
            price={data.price}
            status={data.status}
          />
        ))}
      </div>
    </section>
  );
};

export default Collection;
