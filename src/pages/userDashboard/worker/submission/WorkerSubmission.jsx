import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { AuthContext } from "../../../../provider/AuthProvider";

const WorkerSubmission = () => {

  const {user} = useContext(AuthContext);

const [submissionData, setSubmissionData] = useState([]);

const axiosPublic = useAxiosPublic();

useEffect(()=>{
  axiosPublic.get('/submissions')
  .then(res=>{
    setSubmissionData(res.data)
  })
  .catch(error=>{
    console.log(error)
  })

},[])

const myData = submissionData.filter(submission => submission?.worker_email === user?.email)

console.log(myData);


  return (
    <div className="">
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Your Name</th>
        <th>Title</th>
        <th>Creator Name</th>
        <th>Creator Email</th>
        <th>Payable Amount</th>
        <th>Submit Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      
      

        {
          myData.map(data=> <tr key={data._id}>
            <th>{data.worker_name}</th>
            <th>{data.task_title}</th>
            <th>{data.creator_name}</th>
            <th>{data.creator_email}</th>
            <th>$ {data.payable_amount}</th>
            <th>{data.current_date}</th>
            <th className="text-amber-500">{data.status}</th>
            
          </tr>)
        }
        
      
      
    </tbody>
  </table>
</div>
    </div>
  );
};

export default WorkerSubmission;