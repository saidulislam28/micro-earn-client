import './css/task.css'

const TaskList = () => {
  return (
    <div className='p-4'>
      <h2 className="text-4xl text-center">This task list </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="card card-compact bg-base-100 shadow-xl card-style">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Task Title</h2>
            <p>creator:</p>
            <p>Last Date:</p>
            <p>Payable Amount:</p>
            <p>Task Quantity:</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
