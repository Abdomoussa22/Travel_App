import React from 'react'
import './Services.css'
import service1 from '../../assets/service1.png'
import service2 from '../../assets/service2.png'
import service3 from '../../assets/service3.png'
import service4 from '../../assets/service4.png'
const data = [
  {
    icon: service1,
    title: "Get Best Prices",
    subTitle:
      "Pay through our application and save thousands and get amazing rewards.",
  },
  {
    icon: service2,
    title: "Covid Safe",
    subTitle:
      "We have all the curated hotels that have all the precaution for a covid safe environment.",
  },
  {
    icon: service3,
    title: "Flexible Payment",
    subTitle:
      " Enjoy the flexible payment through our app and get rewards on every payment.",
  },
  {
    icon: service4,
    title: "Find The Best Near You",
    subTitle:
      "Find the best hotels and places to visit near you in a single click.",
  },
];

const Services = () => {
  return (
    <section id='services'>
      {
        data.map(service=>
          <div key={service.icon} className="service">
              <div className="icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.subTitle}</p>
          </div>
          )
      }
    </section>
  )
}

export default Services
