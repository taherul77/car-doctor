import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const {createUser} = useContext(AuthContext);
  const [error, setError] = useState("");
  

  
 
  const navigate = useNavigate();



  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
   
    const email = form.email.value;
    const password = form.password.value;
    

    console.log(name,password,email);
   
    setError("");
    createUser(email, password)
    .then(result =>{
      const createdUser = result.user;
      console.log(createdUser);
      form.reset();
   
      navigate("/login");
      setError("");
    })
    .catch((error) => {
      console.error(error);
      setError(error.message);
    });
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-12 w-1/2">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl text-center font-bold">Sign Up</h1>
              <form onSubmit={handleSignUp}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
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
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <small>
          <p className="text-error mt-2">{error.split("Firebase:")}</p>
        </small>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>
              <p className="my-4 text-center">
                Already have a account ?{" "}
                <Link className="text-orange-700 font-bold" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
