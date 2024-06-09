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


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "signIn",
        element: <SignIn />
      },
      {
        path: "signUp",
        element: <SignUp />
      }
    ]
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    errorElement: <Error />,
    loader: () => fetch('http://localhost:5000/users'),
    children: [
      {
        path: "workerHome",
        element: <WorkerHome />
      },
      {
        path: "workerTask",
        element: <TaskList />,
        loader: () => fetch('http://localhost:5000/tasks')
      },
      {
        path: "workerTask/:id",
        element:  <PrivateRoutes>
          <TaskDetails/>
        </PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/tasks/${params.id}`)
      },
      {
        path: "workerSubmissions",
        element: <WorkerSubmission />
      },
      {
        path: "workerWithdraw",
        element: <Withdraw />
      },
      {
        path: "creatorHome",
        element: <CreatorHome />
      },
      {
        path: "addTask",
        element: <AddTask />
      },
      {
        path: "myTask",
        element: <CreatorTask />
      }
    ]
  }
]);
