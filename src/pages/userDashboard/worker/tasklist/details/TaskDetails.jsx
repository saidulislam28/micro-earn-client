import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../../provider/AuthProvider";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'

const TaskDetails = () => {
  const data = useLoaderData();

  const axiosPublic = useAxiosPublic()

  const {user} = useContext(AuthContext);
  // console.log(data);

  const {creatorName,
    creatorEmail,
    imageURL,
    lastDate,
    payableAmount,
    quantity,
    submissionInfo,
    taskDetails,
    taskTitle
  } = data;

  const handleSubmitTask = e =>{
    e.preventDefault();

   

    const form = new FormData(e.currentTarget);
    const submission_Details = form.get("submission_Details");
    const currentDateTime = new Date().toISOString().split('T')[0];

    console.log(currentDateTime);

    console.log(submission_Details);
  const submission = {
    task_title:taskTitle,
 task_detail:taskDetails,
 task_img_url:imageURL,
 payable_amount:payableAmount,
 worker_email:user?.email,
 worker_name:user?.displayName,
 submission_details:submission_Details,
 creator_name:creatorName,
 creator_email:creatorEmail,
 current_date:currentDateTime,
 status:'pending',
  }


axiosPublic.post('submissions', submission)
.then(res=>{
  if(res.data.insertedId){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Successfully submitted",
      showConfirmButton: false,
      timer: 1500
    });
    e.target.reset()
  }
})
.catch(error =>console.log(error))
}

  return (
    <div className="h-full flex items-center">
      <section className="bg-gray-800 text-gray-100 w-full">
        <div className="container flex flex-col mx-auto lg:flex-row">
          <div
            className=" w-full lg:w-1/3 
          "
            style={{
              backgroundImage: `url(${imageURL})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
            <h2 className="text-3xl font-semibold leading-none">{taskTitle}</h2>
            <p className="mt-2 text-sm">{taskDetails}</p>
            <p className="mt-2 text-sm">Last Date : {lastDate}</p>
            <p className="mt-2 text-sm">Payable Amount: {payableAmount}</p>
            <p className="mt-2 text-sm">Available Quantity: {quantity}</p>
            <p className="mt-2 mb-5 text-sm">{submissionInfo}</p>
            <form onSubmit={handleSubmitTask}>
              <label htmlFor="submission_Details">Submission Details:</label>
              <textarea
                id="submission_Details"
                name="submission_Details"
                placeholder={"Drop your link or message here"}
                required
                className="w-full p-2 border rounded text-black"
              ></textarea>
              <button type="submit" className="btn btn-primary mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskDetails;
