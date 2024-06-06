import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashNavbar = () => {
  return (
    <div className="bg-base-100">
      <div className="navbar max-w-6xl mx-auto">
        <div className="flex-1">
          <Link to="/" className="animate__animated  animate__headShake">
            <span className="text-lg md:text-2xl lg:text-4xl font-extrabold bg-gradient-to-r from-sky-700 via-blue-slate to-slate-200 text-transparent bg-clip-text animate-gradient bg-300%">
              MicroEarn
            </span>
          </Link>
        </div>
        <div className="flex-none">
          <div className="font-semibold  border-2 border-yellow-500 px-3 py-2 rounded-xl bg-amber-200 flex items-center">

            <FaDollarSign className="text-yellow-500"></FaDollarSign>
            <span>120</span>
          </div>

          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashNavbar;
