import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaDollarSign } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const [myUsers, setMyUsers] = useState([]);

  useEffect(() => {
    fetch("https://micro-earn-serverside.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setMyUsers(data));
  }, []);
  // console.log(user);

  const myUserCoin = myUsers.find((myUser) => user?.email === myUser?.email);
  // console.log(myUserCoin);

  const handleLogOut = () => {
    logOut()
      .then(() => navigate("/"))
      .catch();
  };

  const navLinks = (
    <>
      <li className="mr-2 font-bold">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#51323B" : "#545e6f",
            background: isActive ? " #E2E8F0" : "",
          })}
        >
          Home
        </NavLink>
      </li>
      {user ? (
        <li className="mr-2 font-bold">
          <NavLink
            to="/dashboard"
            style={({ isActive }) => ({
              color: isActive ? "#51323B" : "#545e6f",
              background: isActive ? " #E2E8F0" : "",
            })}
          >
            Dashboard
          </NavLink>
        </li>
      ) : (
        ""
      )}
    </>
  );

  const location = useLocation();


  return (
    <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="animate__animated animate__headShake">
          <span className="text-lg md:text-2xl lg:text-4xl font-extrabold bg-gradient-to-r from-sky-700 via-blue-slate to-slate-200 text-transparent bg-clip-text animate-gradient bg-300%">
            MicroEarn
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex items-center">
            <div className="font-semibold border-2 border-yellow-500 px-2 rounded-xl bg-amber-200 flex items-center">
              <FaDollarSign />
              <span>{myUserCoin?.coin}</span>
            </div>
            <div className="dropdown dropdown-end ml-2">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="User Profile" src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <p className="text-gray-400">{user?.displayName}</p>
                </li>
                <li>
                  <p className="text-gray-400">{user?.email}</p>
                </li>
                <li onClick={handleLogOut}>
                  <p className="text-gray-400">Logout</p>
                </li>
              </ul>
            </div>
            {location.pathname.startsWith('/dashboard') && (
              <div>
                <IoIosNotifications className="text-3xl text-amber-500" />
              </div>
            )}
          </div>
        ) : (
          <div className="hidden lg:flex items-center gap-2">
            <a
              target="blank"
              className="btn btn-link"
              href="https://www.youtube.com/"
            >
              Watch Demo
            </a>
            <Link to="/signUp">
              <p className="btn bg-[#4c88b6] text-black">Register</p>
            </Link>
            <Link to="/signIn">
              <p className="btn text-black bg-[#dce86f]">Login</p>
            </Link>
          </div>
        )}
        {!user && (
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              More
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-0"
            >
              <li>
                <a
                  target="blank"
                  className="w-full text-left"
                  href="https://www.youtube.com/"
                >
                  Watch Demo
                </a>
              </li>
              <li>
                <Link to="/signUp" className="w-full text-left">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/signIn" className="w-full text-left">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
