import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Main from "../layout/Main";
import SignIn from "../pages/authentication/SignIn";
import SignUp from "../pages/authentication/SignUp";
import Dashboard from "../pages/userDashboard/dashBoard/Dashboard";
import WorkerHome from "../pages/userDashboard/worker/HOME/WorkerHome";
import TaskList from "../pages/userDashboard/worker/tasklist/TaskList";
import WorkerSubmission from "../pages/userDashboard/worker/submission/WorkerSubmission";
import Withdraw from "../pages/userDashboard/worker/withdraw/Withdraw";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'signIn',
        element: <SignIn></SignIn>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      }
      
    ]
  },
  {
    path:'dashboard',
    element: <Dashboard></Dashboard>,
    loader: () => fetch('http://localhost:5000/users'),
    children:[
      {
        path: 'dashboard/workerHome',
        element:<WorkerHome></WorkerHome>
      },
      {
        path: 'dashboard/workerTask',
        element:<TaskList></TaskList>
      },
      {
        path: 'dashboard/workerSubmissions',
        element:<WorkerSubmission></WorkerSubmission>
      },
      {
        path: 'dashboard/workerWithdraw',
        element:<Withdraw></Withdraw>
      }
    ]
  }
]);