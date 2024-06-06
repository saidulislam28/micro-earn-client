import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="container mx-auto">
      <div className="h-full p-3 space-y-2 w-60 bg-gray-900 text-gray-100">
        <div className="flex items-center p-2 space-x-4">
          <img
            src={user?.photoURL}
            alt=""
            className="w-12 h-12 rounded-full bg-gray-500"
          />
          <div>
            <h2 className="text-lg font-semibold">{user?.displayName}</h2>
            <span className="flex items-center space-x-1">
              <Link
                
                
                className="text-xs hover:underline text-gray-400"
              >
                View profile
              </Link>
            </span>
          </div>
        </div>
        <div className="divide-y divide-gray-700">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
 
          {/* worker navigations  */}
             
              
            <li className="bg-gray-800 text-gray-50">
              <Link
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                
                <span>Chat</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                
                <span>Orders</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                
                <span>Wishlist</span>
              </Link>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
