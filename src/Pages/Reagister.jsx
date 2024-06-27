import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../fierbase/fierbase.init";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Reagister = () => {
const [success,setsuccess]=useState();
const[error,setError]=useState();
const[show,setshow]=useState()
    const handlaeragister=(e)=>{
        e.preventDefault()
        // e.prventDefault()
       
      
        const password = e.target.password.value;
        const email=e.target.email.value;
        
        console.log(email,password);
        // Password length
        if(password.length < 6){
            setError(' Password must be at least 6 characters long ');
            return;
        }
        else if (!/[A-Z]/.test(password))
            {
                setError('bhi sono ata kori nh ja asa akhna sob dao balo moto ');
                return;
            }
        setError('');
        setsuccess('');
        createUserWithEmailAndPassword(auth,email,password)
       
        

        // Reaset Error
        .then(result=>{
            console.log(result.user);
            setsuccess('Yes your information is valid')
        })
        .catch(error=>{
            console.log(error);
            setError(error.message)
        })
    }

    // Create user ::
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handlaeragister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                 type={show ? "text":"password"}
                  placeholder="Enter your Password plz"
                  className="input input-bordered"
                  required
                />
                <span onClick={()=>setshow(!show)}>
                    {
                        show?<IoEye/>:<IoEyeOff/>
                    }
                </span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              {
                error && <p className="text-red-500">{error}</p>
              }
              {
                success && <p className="text-green-500">{success}</p>  
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reagister;
