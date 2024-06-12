import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import 'sweetalert2/src/sweetalert2.scss'
import Swal from "sweetalert2";
const ManageTask = () => {
  const axiosPublic = useAxiosPublic();
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axiosPublic
      .get("/tasks")
      .then((res) => {
        setTasks(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDeleteTask = (taskId) => {
    axiosPublic
      .delete(`/tasks/${taskId}`)
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Deleted",
          showConfirmButton: false,
          timer: 1500
        });

        setTasks(tasks.filter((task) => task._id !== taskId));
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  };

  const openModal = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  return (
    <div className="container mx-auto min-h-[550px]">
      <h2 className="text-3xl font-bold mb-4">Task List</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Task Title</th>
              <th className="px-4 py-2">Task Creator Name</th>
              <th className="px-4 py-2">Task Quantity</th>
              <th className="px-4 py-2">Coin Needed</th>
              <th className="px-4 py-2">Availability</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id}>
                <td className="border px-4 py-2">{task.taskTitle}</td>
                <td className="border px-4 py-2">{task.creatorName}</td>
                <td className="border px-4 py-2">{task.quantity}</td>
                <td className="border px-4 py-2">{task.payableAmount}</td>
                <td className="border px-4 py-2">{task.lastDate}</td>
                <td className="border px-4 py-2 space-y-2">
                  <button
                    className="btn"
                    onClick={() => openModal(task)}
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => handleDeleteTask(task._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && selectedTask && (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle" open>
          <div className="modal-box">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Task Title</span>
                </div>
                <input
                  type="text"
                  name="taskTitle"
                  defaultValue={selectedTask.taskTitle}
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
                  defaultValue={selectedTask.taskDetails}
                  className="input input-bordered input-success w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Submission Info</span>
                </div>
                <input
                  type="text"
                  name="submissionInfo"
                  defaultValue={selectedTask.submissionInfo}
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
                  defaultValue={selectedTask.imageURL}
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
                  defaultValue={selectedTask.quantity}
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
                  defaultValue={selectedTask.payableAmount}
                  className="input input-bordered input-success w-full max-w-xs"
                />
              </label>
              <input
                type="date"
                name="lastDate"
                defaultValue={selectedTask.lastDate}
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
            <div className="modal-action">
              <button className="btn" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default ManageTask;
