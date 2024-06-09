import {  useLoaderData } from "react-router-dom";
import "./css/task.css";
import TaskCard from "./taskCard/TaskCard";

const TaskList = () => {
  const data = useLoaderData();

  return (
    <div className="p-4">
      <h2 className="text-4xl text-center">This task list</h2>

      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((task) => <TaskCard  key={task._id} 
        task={task}
        ></TaskCard>)}
      </div>
    </div>
  );
};

export default TaskList;
