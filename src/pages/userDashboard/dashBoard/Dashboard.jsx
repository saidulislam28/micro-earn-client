import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import {
  FaCoins,
  FaDollarSign,
  FaHome,
  FaList,
  FaMoneyBill,
  FaRegCalendarPlus,
  FaScribd,
  FaTasks,
  FaUserShield,
} from "react-icons/fa";
import Footer from "../../../shared/footer/Footer";
import Navbar from "../../../shared/navbar/Navbar";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();

  const myUser = data.find((users) => user?.email === users?.email);

  return (
    <div className="">
      <Navbar />

      <div className="flex flex-col lg:flex-row justify-around  max-w-6xl mx-auto">
        <div>
          <div className="h-full min-h-0 lg:min-h-[550px] p-3 space-y-2 w-full lg:w-60 bg-gray-700 text-gray-100">
            <div className="flex items-center p-2 space-x-4">
              <div>
                <h2 className="text-lg font-semibold">{user?.displayName}</h2>
                <span className="flex items-center space-x-1">
                  <p className="text-s text-gray-400">Role:
                    <span className="font-bold"> {myUser?.role}</span>
                  </p>
                </span>
              </div>
            </div>

            <div className="divide-y divide-gray-700">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                {myUser?.role === "worker" ? (
                  <>
                    
                    <li>
                      <NavLink to="workerHome" className="flex items-center p-2 space-x-3 rounded-md">
                        <FaHome className="mr-5" /> Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="workerTask" className="flex items-center p-2 space-x-3 rounded-md">
                        <FaTasks className="mr-5" /> TaskList
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="workerSubmissions" className="flex items-center p-2 space-x-3 rounded-md">
                        <FaList className="mr-5" /> My Submissions
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="workerWithdraw" className="flex items-center p-2 space-x-3 rounded-md">
                        <FaMoneyBill className="mr-5" /> Withdrawals
                      </NavLink>
                    </li>
                  </>
                ) : myUser?.role === "Creator" ? (
                  <>
                    <li>
                      <NavLink to="creatorHome" className="flex items-center p-2 space-x-3 rounded-md">
                        <FaHome className="mr-5" /> Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="addTask" className="flex items-center p-2 space-x-3 rounded-md">
                        <FaRegCalendarPlus className="mr-5" /> Add new Tasks
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="myTask" className="flex items-center p-2 space-x-3 rounded-md">
                        <FaScribd className="mr-5" /> My Tasks
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="flex items-center p-2 space-x-3 rounded-md">
                        <FaCoins className="mr-5" /> Purchase Coin
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="flex items-center p-2 space-x-3 rounded-md">
                        <FaDollarSign className="mr-5" /> Payment history
                      </NavLink>
                    </li>
                  </>
                ) : myUser?.role === "Admin" ? (
                  <>
                    <li>
                      <NavLink className="flex items-center p-2 space-x-3 rounded-md">
                        <FaHome className="mr-5" /> Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="flex items-center p-2 space-x-3 rounded-md">
                        <FaUserShield className="mr-5" /> Manage Users
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="flex items-center p-2 space-x-3 rounded-md">
                        <FaTasks className="mr-5" /> Manage Task
                      </NavLink>
                    </li>
                  </>
                ) : null}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
