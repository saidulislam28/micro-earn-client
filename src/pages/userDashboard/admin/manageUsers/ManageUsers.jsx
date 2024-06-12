import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const ManageUsers = () => {
  const axiosPublic = useAxiosPublic();
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    axiosPublic.get("/workers").then((res) => {
      console.log(res.data);
      setWorkers(res.data);
    });
  }, []);

  const handleRoleChange = (e, id) => {
    const newRole = e.target.value;
    axiosPublic
      .put("/updateRole", { id, newRole })
      .then((res) => {
        if (res.data.modifiedCount) {
          setWorkers(
            workers.map((worker) =>
              worker._id === id ? { ...worker, role: newRole } : worker
            )
          );
          console.log(res.data);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    axiosPublic
      .delete("/deleteUser", { data: { id } })
      .then((res) => {
        console.log(res.data);
        setWorkers(workers.filter((worker) => worker._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-12  w-2/4 mx-auto border-y-2 py-4 border-amber-300">
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
            {workers?.map((worker, idx) => (
              <tr key={worker._id}>
                <th>{idx + 1}</th>
                <td>{worker.name}</td>

                <td>
                  <input
                    type=""
                    className="max-w-20 p-2"
                    readOnly
                    value={worker.email}
                  />
                </td>

                <td>
                  <input
                    type=""
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
