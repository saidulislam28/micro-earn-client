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
import CreatorHome from "../pages/userDashboard/creator/Home/CreatorHome";
import AddTask from "../pages/userDashboard/creator/addTask/AddTask";
import CreatorTask from "../pages/userDashboard/creator/creatorTask/CreatorTask";
import Error from "../error/Error";
import TaskDetails from "../pages/userDashboard/worker/tasklist/details/TaskDetails";
import PrivateRoutes from "../pages/private/PrivateRoutes";
import PurchaseCoin from "../pages/userDashboard/creator/purchase coin/PurchaseCoin";
import PaymentHistory from "../pages/userDashboard/creator/Payment history/PaymentHistory";
import AdminRoute from "./AdminRoute";
import AdminHome from "../pages/userDashboard/admin/AdminHome/AdminHome";
import ManageUsers from "../pages/userDashboard/admin/manageUsers/ManageUsers";
import ManageTask from "../pages/userDashboard/admin/manageTask/ManageTask";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      
        <Dashboard />
      
    ),
    errorElement: <Error />,
    loader: () => fetch("https://micro-earn-serverside.vercel.app/users"),
    children: [
      {
        path: "workerHome",
        element: <PrivateRoutes>
          <WorkerHome />
        </PrivateRoutes>,
      },
      {
        path: "workerTask",
        element: <PrivateRoutes>
          <TaskList />
        </PrivateRoutes>,
        loader: () => fetch("https://micro-earn-serverside.vercel.app/tasks"),
      },
      {
        path: "workerTask/:id",
        element: (
          <PrivateRoutes>
            <TaskDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://micro-earn-serverside.vercel.app/tasks/${params.id}`),
      },
      {
        path: "workerSubmissions",
        element: (
          <PrivateRoutes>
            <WorkerSubmission />
          </PrivateRoutes>
        ),
      },
      {
        path: "workerWithdraw",
        element:<PrivateRoutes>
           <Withdraw />
        </PrivateRoutes>,
      },
      {
        path: "creatorHome",
        element:<PrivateRoutes>
           <CreatorHome />
        </PrivateRoutes>,
      },
      {
        path: "addTask",
        element: <PrivateRoutes>
          <AddTask />
        </PrivateRoutes>,
      },
      {
        path: "myTask",
        element: <PrivateRoutes>
          <CreatorTask />
        </PrivateRoutes>,
      },{
        path: "purchase",
        element:<PrivateRoutes>
          <PurchaseCoin></PurchaseCoin>
        </PrivateRoutes>
      },
      {
        path: "paymentHistory",
        element:<PrivateRoutes>
          <PaymentHistory></PaymentHistory>
        </PrivateRoutes>
      },
      // admin routes 
      {
        path: "adminHome",
        element: <AdminRoute>
          <AdminHome></AdminHome>
        </AdminRoute>
        
      },
      {
        path: "manageUsers",
        element: <AdminRoute>
          <ManageUsers></ManageUsers>
        </AdminRoute>
      },
      {
        path:"manageTask",
        element:<AdminRoute>
          <ManageTask></ManageTask>
        </AdminRoute>
      }
    ],
  },
]);
