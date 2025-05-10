import { Link, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import "./css/signup.css";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2";

const uppercaseRegex = /[A-Z]/;
const lowercaseRegex = /[a-z]/;

const SignUp = () => {
  const { signUp, updateProfileinfo } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [role, setRole] = useState("worker");

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");
    const roleLower = role.toLowerCase();
    let earnCoin = roleLower === 'creator' ? 50 : 10;


    if (password.length < 8) {
      return alert("Password must be at least 6 characters long.");
    }

    if (!uppercaseRegex.test(password)) {
      return alert("Password must contain at least one uppercase letter.");
    }
    if (!lowercaseRegex.test(password)) {
      return alert("Password must contain at least one lowercase letter.");
    }

    console.log(name, email, password, photo);

    signUp(email, password)
      .then((result) => {
        console.log(result.user);

        updateProfileinfo(name, photo)
          .then(() => {
            const userInfo = {
              name: name,
              email: email,
              photo: photo,
              role: role,
              coin: earnCoin,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Sign Up successful",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
              navigate("/");
            });
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          });
      })
      .catch((err) => {
        alert("something went wrong");
        console.log(err);
      });
    e.target.reset();
  };

  return (
    <div className="flex justify-center">
      <div className="login-container max-w-xl">
        <div className="heading">Register </div>
        <form onSubmit={handleSignUp} className="form-section">
          <input
            required=""
            className="input"
            type="text"
            name="name"
            placeholder="Name"
          />

          <input
            required=""
            className="input"
            type="text"
            name="photo"
            placeholder="Photo URL"
          />

          <input
            required=""
            className="input"
            type="email"
            name="email"
            placeholder="E-mail"
          />

          <input
            required=""
            className="input"
            type="password"
            name="password"
            placeholder="Password"
          />

          <br />

          <br />
          <label className="" htmlFor="">
            Chose Your Role:{" "}
          </label>
          <br />
          <br />

          <select
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="rounded-md px-6 py-2 border border-green-400"
          >
            <option value="worker">worker</option>
            <option value="creator">creator</option>
          </select>

          <input className="login-button" type="submit" value="Sign Up" />
        </form>

        <p className="agreement">
          Already have an account?
          <Link to="/signIn">
            <span className="underline">Signin</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
