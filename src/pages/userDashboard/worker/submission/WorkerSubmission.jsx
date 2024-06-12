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
            <td>{data.worker_name}</td>
            <td>{data.task_title}</td>
            <td>{data.creator_name}</td>
            <td>{data.creator_email}</td>
            <td>$ {data.payable_amount}</td>
            <td>{data.current_date}</td>
            <td className={data.status === 'pending' ? 'text-yellow-500' : data.status === 'approve' ? 'text-green-500' : 'text-red-500'}>{data.status}</td>
            
          </tr>)
        }
        
      
      
    </tbody>
  </table>
</div>
    </div>
  );
};

export default WorkerSubmission;