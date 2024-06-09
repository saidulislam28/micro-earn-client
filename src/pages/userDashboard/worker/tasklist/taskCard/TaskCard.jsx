import { Link } from "react-router-dom";

const TaskCard = ({task}) => {


  return (
    <div className="card card-compact bg-base-100 shadow-xl card-style">
      <figure>
        <img src={task.imageURL} alt="Shoes" />
      </figure>
      <div className="card-body text-start">
        <h2 className="card-title">{task.taskTitle}</h2>
        <p>Creator: {task.creatorName}</p>
        <p>Last Date: {task.lastDate}</p>
        <p>Payable Amount: ${task.payableAmount}</p>
        <p>Task Quantity: {task.quantity}</p>
        <div className="card-actions justify-end">
          <Link
          
          // to={`workerDetails/${task._id}`}
          to={`/dashboard/workerTask/${task._id}`}
          
          >
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
