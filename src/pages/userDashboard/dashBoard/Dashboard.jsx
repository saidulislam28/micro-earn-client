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
// import DashNavbar from "../navbar/DashNavbar";
import Navbar from "../../../shared/navbar/Navbar";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const data = useLoaderData();

  const myUser = data.find((users) => user?.email === users?.email);
  // console.log(myUser);

  return (
    <div className="">
     <Navbar></Navbar>

      <div className="flex justify-around max-w-6xl mx-auto">
        <div className="">
          <div className="h-full min-h-[550px] p-3 space-y-2 w-60 bg-gray-700 text-gray-100">
            <div className="flex items-center p-2 space-x-4">
              
              <div>
                <h2 className="text-lg font-semibold">{user?.displayName}</h2>
                <span className="flex items-center space-x-1">
                  <p className="text-s text-gray-400">Role:{myUser?.role}</p>
                </span>
              </div>
            </div>

            <div className="divide-y divide-gray-700">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                {/* worker navigation  */}

                {myUser?.role === "worker" ? (
                  <>
                    <li>
                      <NavLink
                        to="dashboard/workerHome"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <FaHome className="mr-5"></FaHome> Home
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="dashboard/workerTask"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <FaTasks className="mr-5"></FaTasks> TaskList
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="dashboard/workerSubmissions"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <FaList className="mr-5"></FaList> My Submissions
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="dashboard/workerWithdraw"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <FaMoneyBill className="mr-5"></FaMoneyBill> withdrawals
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <></>
                )}

                {/* task creator navigation */}

                {myUser?.role === "Creator" ? (
                  <>
                    <li>
                      <NavLink to='/dashboard/creatorHome' className="flex items-center p-2 space-x-3 rounded-md">
                        <FaHome className="mr-5"></FaHome> Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                      to='/dashboard/addTask'
                      className="flex items-center p-2 space-x-3 rounded-md">
                        <FaRegCalendarPlus className="mr-5"></FaRegCalendarPlus>{" "}
                        Add new Tasks
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                      to='/dashboard/myTask'
                      
                      className="flex items-center p-2 space-x-3 rounded-md">
                        <FaScribd className="mr-5"></FaScribd> My Task’s
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="flex items-center p-2 space-x-3 rounded-md">
                        <FaCoins className="mr-5"></FaCoins> Purchase Coin
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="flex items-center p-2 space-x-3 rounded-md">
                        <FaDollarSign className="mr-5"></FaDollarSign> Payment
                        history
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <></>
                )}

                {/* admin navigation */}

                {
                  myUser?.role === 'Admin' ? <>
                  <li>
                  <NavLink className="flex items-center p-2 space-x-3 rounded-md">
                    <FaHome className="mr-5"></FaHome> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="flex items-center p-2 space-x-3 rounded-md">
                    <FaUserShield className="mr-5"></FaUserShield> Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink className="flex items-center p-2 space-x-3 rounded-md">
                    <FaTasks className="mr-5"></FaTasks> Manage Task
                  </NavLink>
                </li>
                  </> : <>
                  
                  
                  </>
                }

                



              </ul>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Dashboard;
