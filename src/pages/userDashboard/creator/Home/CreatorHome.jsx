import { useContext, useEffect, useState } from "react";
import CreatorCard from "./infoCard/CreatorCard";
import { AuthContext } from "../../../../provider/AuthProvider";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const CreatorHome = () => {
  const { user } = useContext(AuthContext);

  const [userData, setUserData] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get(`/users/${user?.email}`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axiosPublic
      .get("/myTasks", {
        params: {
          creatorEmail: user?.email,
        },
      })
      .then((res) => {
        setTasks(res.data);
      });
  }, []);

  useEffect(() => {
    axiosPublic
      .get("/pendingSubmissions", {
        params: {
          creator_email: user?.email,
          status: "pending",
        },
      })
      .then((res) => {
        setSubmissions(res.data);
        //  console.log(res.data);
      });
  }, []);

  const handleApprove = (task) => {
    
    console.log(task.worker_email, task.payable_amount, task._id);

    const payable_amount = parseInt(task.payable_amount);
    const worker_email = task.worker_email;

   axiosPublic.patch('/approveSubmission',{
    id: task._id,
    payable_amount,
    worker_email

   })
   .then(res=>{

    console.log(res.data.submissionUpdate.modifiedCount);
    if(res.data.submissionUpdate.modifiedCount>0){
      console.log("submisison done and coin gone");
      setSubmissions(submissions.filter((sub) => sub._id !== task._id));
    }

   })
   .catch(error=>{
    console.log(error);
   })

   


  };
  const handleRejecting = (_id) =>{

    console.log(_id);
    axiosPublic.patch('/rejectSubmission', {
      id: _id
    })
    .then(res =>{
      if(res.data.modifiedCount>0){
        console.log("rejected successfully");
        setSubmissions(submissions.filter((sub) => sub._id !== _id));
      }
    })

  }

  return (
    <div className="p-2">
      <div className="">
        <CreatorCard
        
        submissions={submissions}
        userData={userData} tasks={tasks}></CreatorCard>
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">
            Contacts
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full p-6 text-xs text-left whitespace-nowrap">
              <thead>
                <tr className="dark:bg-gray-300">
                  <th className="p-3">Title</th>
                  <th className="p-3">Name || email</th>
                  <th className="p-3"> Amount</th>
                  <th className="p-3">Submission</th>
                  <th className="p-3">Result</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                {submissions.map((task) => (
                  <tr key={task._id}>
                    <td className="px-3 py-2 ">
                      <p>{task.task_title}</p>
                    </td>

                    <td className="px-3 py-2">
                      <span>{task.worker_name}</span>
                      <p className="dark:text-gray-600">{task.worker_email}</p>
                    </td>

                    <td className="px-3 py-2">
                      <p>$ {task.payable_amount}</p>
                    </td>

                    <td className="px-3 py-2">
                      {/* The button to open modal */}
                      <label htmlFor="my_modal_7" className="btn">
                        click to see
                      </label>

                      {/* Put this part before </body> tag */}
                      <input
                        type="checkbox"
                        id="my_modal_7"
                        className="modal-toggle"
                      />
                      <div className="modal" role="dialog">
                        <div className="modal-box">
                          <h3 className="text-lg font-bold">
                            Worker Submissions
                          </h3>
                          <p className="py-4">{task.submission_details}</p>
                        </div>
                        <label className="modal-backdrop" htmlFor="my_modal_7">
                          Close
                        </label>
                      </div>
                    </td>

                    <td className="px-3 py-2">
                      <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn m-1">
                          <i className="fas fa-chevron-down"></i>
                        </div>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-24"
                        >
                          <li
                            onClick={() =>
                              handleApprove(task)
                            }
                            className="bg-green-400 rounded-xl"
                          >
                            <button>Accept</button>
                          </li>
                          <li
                         onClick={() => handleRejecting(task._id)}
                          className="bg-red-400 rounded-xl">
                            <button>Reject</button>
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td className="px-3 py-2 text-yellow-400 font-semibold">
                      <p>Pending</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorHome;
