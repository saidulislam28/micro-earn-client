import  { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { AuthContext } from "../../../../provider/AuthProvider";
import { FaPen } from "react-icons/fa";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'
const CreatorTask = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null); // State to manage selected task for update
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get("/descendingTasks", {
        params: {
          email: user?.email,
        },
      })
      .then((res) => {
        setTasks(res.data);
      })
      .catch((error) => console.error(error));
  }, [user?.email, axiosPublic]);

  const handleUpdate = (task) => {
    setSelectedTask(task);
    document.getElementById('update-modal').checked = true; 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const updatedTask = {
      taskTitle: form.get("taskTitle"),
      taskDetails: form.get("taskDetails"),
      submissionInfo: form.get("submissionInfo"),
      imageURL: form.get("imageURL"),
      quantity: form.get("quantity"),
      payableAmount: form.get("payableAmount"),
      lastDate: form.get("lastDate"),
    };

    try {
      await axiosPublic.patch('/updateTask', {
        id: selectedTask._id,
        ...updatedTask
      }).then(res =>{
        if(res.data.modifiedCount>0){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your task has been updated",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })

      setTasks(tasks.map(task => task._id === selectedTask._id ? { ...task, ...updatedTask } : task));
      document.getElementById('update-modal').checked = false;
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDelete = async (task) => {
    const id = task?._id;
  
    try {
      const response = await axiosPublic.delete('/deleteTask', {
        data: {
          id: id,
          creatorEmail: user?.email,
        },
      });
      
      
      
      if (response.data.deleteResult.deletedCount > 0) {

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Deleted",
          showConfirmButton: false,
          timer: 1500
        });
        setTasks(tasks.filter(t => t._id !== id));
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
          <thead>
            <tr className="dark:bg-gray-300">
              <th className="p-3">Title</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Task Quantity</th>
              <th className="p-3">Update</th>
              <th className="p-3">Delete</th>
            </tr>
          </thead>
          <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
            {tasks.map((task) => (
              <tr key={task._id}>
                <td className="px-3 py-2 ">
                  <p>{task.taskTitle}</p>
                </td>
                <td className="px-3 py-2">
                  <p>$ {task.payableAmount}</p>
                </td>
                <td className="px-3 py-2">
                  <p>{task.quantity}</p>
                </td>
                <td className="px-3 py-2">
                  <button className="btn" onClick={() => handleUpdate(task)}>
                    <FaPen /> Update
                  </button>
                </td>
                <td  className="px-3 py-2">
                  <button onClick={()=>handleDelete(task)}  className="btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Task Modal */}
      <input type="checkbox" id="update-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Task Title</span>
              </div>
              <input
                type="text"
                name="taskTitle"
                defaultValue={selectedTask?.taskTitle || ''}
                className="input input-bordered input-success w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Task Details</span>
              </div>
              <input
                type="text"
                name="taskDetails"
                defaultValue={selectedTask?.taskDetails || ''}
                className="input input-bordered input-success w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Submission info</span>
              </div>
              <input
                type="text"
                name="submissionInfo"
                defaultValue={selectedTask?.submissionInfo || ''}
                className="input input-bordered input-success w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Image URL</span>
              </div>
              <input
                type="text"
                name="imageURL"
                defaultValue={selectedTask?.imageURL || ''}
                className="input input-bordered input-success w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Task Quantity</span>
              </div>
              <input
                type="number"
                name="quantity"
                defaultValue={selectedTask?.quantity || ''}
                className="input input-bordered input-success w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Payable Amount</span>
              </div>
              <input
                type="number"
                name="payableAmount"
                defaultValue={selectedTask?.payableAmount || ''}
                className="input input-bordered input-success w-full max-w-xs"
              />
            </label>
            <input
              type="date"
              name="lastDate"
              defaultValue={selectedTask?.lastDate || ''}
              className="input input-bordered input-success w-full max-w-xs"
            />
            <input className="btn btn-primary" type="submit" value="Update" />
          </form>
          <div className="modal-action">
            <label htmlFor="update-modal" className="btn">Close</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorTask;
