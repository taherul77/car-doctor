import { Link } from "react-router-dom";

const ServiceContent = ({service}) => {
    const  {_id,title,img,price}=service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="text-xl text-orange-700"> Price : ${price}</p>
          <div className="card-actions">
     
    </div>
          <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}>
          <button className="btn btn-warning">Warning</button>
          </Link>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
