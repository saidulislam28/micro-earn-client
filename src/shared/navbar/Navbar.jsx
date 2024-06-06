import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
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
    </>
  );

  return (
    <div className="navbar bg-base-100  container mx-auto">
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
        <Link to="/" className="animate__animated  animate__headShake">
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
          <div className="flex items-center gap-2">
            {/* <details className="dropdown">
             <summary className=" btn btn-ghost mr-10 lg:mr-2  btn-circle rounded-full mt-2">
           <div
             tabIndex={0}
             role="button"
             className="btn btn-ghost btn-circle avatar"
             
           >
             <div className="rounded-full">
               <img alt={user.displayName} src={user.photoURL} />
             </div>
           </div></summary>
             <ul className=" shadow menu dropdown-content z-[1] bg-base-100 rounded-box ">
               <li className="font-semibold">
                 <Link to="attempted">
                 <p className="text-start">
                   My attempted
                 
                 </p>

                 </Link>
               </li>
               <div className="divider"></div>
               <li>
                <button
                onClick={handleLogOut} className="font-semibold">Log Out</button>
               </li>
             </ul>
           </details> */}

           <div className="font-semibold  border-2 border-yellow-500 px-3 py-2 rounded-xl bg-amber-200">


            <span>120</span></div>
            <button onClick={handleLogOut} className="font-semibold btn">
              Log Out
            </button>
            <img className="h-12 rounded-full w-12" src={user.photoURL} alt="" />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <a
              target="blank"
              className="btn btn-link "
              href="https://www.youtube.com/"
            >
              Watch Demo
            </a>
            <Link to="/signUp">
              <p className="btn  bg-[#4c88b6] text-black">Register</p>
            </Link>

            <Link to="/signIn">
              <p className="btn text-black  bg-[#dce86f]">Login</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
