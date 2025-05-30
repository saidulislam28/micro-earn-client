import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import 'sweetalert2/src/sweetalert2.scss';
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosPublic = useAxiosPublic();
  const [workers, setWorkers] = useState([]);

  const fetchWorkers = () => {
    axiosPublic.get("/workers").then((res) => {
      setWorkers(res.data);
    }).catch((error) => {
      console.error("Error fetching workers:", error);
    });
  };

  useEffect(() => {
    fetchWorkers();
  }, []);

  const handleRoleChange = (e, id) => {
    const newRole = e.target.value;
    axiosPublic
      .put("/updateRole", { id, newRole })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Role changed",
            showConfirmButton: false,
            timer: 1500,
          });
          fetchWorkers();  // Fetch updated workers list
        }
      })
      .catch((error) => console.error("Error updating role:", error));
  };

  const handleDelete = (id) => {
    axiosPublic
      .delete("/deleteUser", { data: { id } })
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Deleted Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setWorkers((prevWorkers) => prevWorkers.filter((worker) => worker._id !== id));
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-12 w-2/4 mx-auto border-y-2 py-4 border-amber-300">
        Worker Information
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Photo URL</th>
              <th>Role</th>
              <th>Coin</th>
              <th>Update</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {workers.map((worker, idx) => (
              <tr key={worker._id}>
                <th>{idx + 1}</th>
                <td>{worker.name}</td>
                <td>
                  <input
                    type="text"
                    className="max-w-20 p-2"
                    readOnly
                    value={worker.email}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    readOnly
                    className="max-w-20 p-2"
                    value={worker.photo}
                  />
                </td>
                <td>{worker.role}</td>
                <td>{worker.coin}</td>
                <td>
                  <select
                    className="w-20"
                    onChange={(e) => handleRoleChange(e, worker._id)}
                    defaultValue={worker.role}
                  >
                    <option value="admin">Admin</option>
                    <option value="creator">Creator</option>
                    <option value="worker">Worker</option>
                  </select>
                </td>
                <td
                  onClick={() => handleDelete(worker._id)}
                  className="text-red-500 font-semibold cursor-pointer"
                >
                  Remove
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
