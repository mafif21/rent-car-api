import React from "react";
import jumbotronImage from "../../assets/img/jumbotron-image.jpg";
import Jumbotron from "../../components/Jumbotron";
import Carlist from "../../assets/img/car-list.jpg";
import About from "../../components/About";
import Quality from "../../assets/img/quality.png";
import Safe from "../../assets/img/safe.png";
import Exclusive from "../../assets/img/exclusive.png";
import Services from "../../components/Services";

const Home = () => {
  return (
    <div>
      <Jumbotron jumbotronImage={jumbotronImage} />
      <About Carlist={Carlist} />
      <Services Quality={Quality} Safe={Safe} Exclusive={Exclusive} />
    </div>
  );
};

export default Home;
