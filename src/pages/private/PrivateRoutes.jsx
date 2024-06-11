import { useContext } from "react";


import { Navigate,useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";




const PrivateRoutes = ({children}) => {

  const location = useLocation();

  const {user,loading} = useContext(AuthContext);

  if(loading){
    return <div className="text-center my-20">
    <span className="loading loading-spinner loading-lg "></span>;
    
  </div>
  }

  if(user){
    return children;
  }
  
  return <Navigate state={location?.pathname} to="/signIn"></Navigate>
};

export default PrivateRoutes;