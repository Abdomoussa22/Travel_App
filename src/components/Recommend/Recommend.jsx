import React, { useState } from "react";
import "./Recommend.css";
import Destination1 from "../../assets/Destination1.png";
import Destination2 from "../../assets/Destination2.png";
import Destination3 from "../../assets/Destination3.png";
import Destination4 from "../../assets/Destination4.png";
import Destination5 from "../../assets/Destination5.png";
import Destination6 from "../../assets/Destination6.png";
import info1 from "../../assets/info1.png";
import info2 from "../../assets/info2.png";
import info3 from "../../assets/info3.png";
const Recommend = () => {
  const [active, setActive] = useState(1);
  const data = [
    {
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      cost: "38,800",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: Destination6,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  return (
    <section id="recommend">
      <div className="title">
        <h2>Recommend Destination</h2>
      </div>
      <div className="package">
        <ul>
          {packages.map((pkg, index) => (
            <li
              key={index}
              className={active === index + 1 ? "active" : ""}
              onClick={() => {
                setActive(index + 1);
              }}
            >
              {pkg}
            </li>
          ))}
        </ul>
      </div>
      <div className="destinations">
        {data.map((des, index) => (
          <div key={index} className="destination">
            <img src={des.image} alt="destination" />
            <h3>{des.title}</h3>
            <p>{des.subTitle}</p>
            <div className="info">
              <div className="services">
                <img src={info1} alt="info" />
                <img src={info2} alt="info" />
                <img src={info3} alt="info" />
              </div>
              <h4>{des.cost}</h4>
            </div>
            <div className="distance">
              <span>1000 Kms</span>
              <span>{des.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommend;
