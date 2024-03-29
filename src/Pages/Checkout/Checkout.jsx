import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { title, _id ,price ,img } = service;
  const {user} = useContext(AuthContext);

  const handleService = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
        customerName: name,
        email: email,
        date: date,
        img,
        service_id: _id,
        service: title,
        price: price


    }
console.log(booking);

fetch('http://localhost:5000/bookings',{
    method: 'post',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(booking)

})
.then(res => res.json())
.then(data =>{
    console.log(data);
    if(data.insertedId){
        alert('Service book Success')
    }
})

  }

  return (
    <div>
      <h2 className="text-center text-3xl">Book Service: {title}</h2>

      <form onSubmit={handleService}>
        <div className="grid grid-cols-1 md: grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              defaultValue={user?.name}
              name='name'
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
            name="date"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
             defaultValue={'$'+ price}
              className="input input-bordered"
            />
          </div>
          
        </div>
        <div className="form-control mt-6">
          
            <input
              className="btn bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-pink-500 hover:to-yellow-500 mb-6"
              type="submit"
              value="Order Conform"
            />

          
          </div>
      </form>
    </div>
  );
};

export default Checkout;
