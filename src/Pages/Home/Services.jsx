import { useEffect, useState } from "react";
import ServiceContent from "./ServiceContent";

const Services = () => {
  const [Services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center py-6">
        <h2 className="text-3xl text-orange-700 py-2">Our Services</h2>
        <p>
          The majority have suffered alteration in some form, by injected
          humour,
          <br /> or randomised words which do not look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            Services.map(service=> <ServiceContent 
            key={service._id}
            service={service}
            ></ServiceContent>)
        }
      </div>
    </div>
  );
};

export default Services;
