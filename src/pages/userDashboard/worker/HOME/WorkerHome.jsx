import { Link } from "react-router-dom";
import InfoCards from "./cards/InfoCards";
import SubmissionTable from "./submissions/SubmissionTable";
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";

const WorkerHome = () => {

  const {user} = useContext(AuthContext);

  const [data , setUserData] = useState({})
  const [totalEarnings, setTotalEarnings] = useState(0);

  const [submissions, setSubmissions] = useState([]);
  const [approved, setApproved] = useState([]);
  

  const axiosPublic = useAxiosPublic();

	useEffect(() => {
    axiosPublic.get(`/users/${user?.email}`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


	useEffect(() => {
    axiosPublic.get(`/mySubmissions/${user?.email}`)
      .then((res) => {
        setSubmissions(res.data);
        const approvedSubmissions = res.data.filter(submission => submission.status === 'approve');


        const earnings = approvedSubmissions.reduce((sum, submission) => {
          return sum + Number(submission.payable_amount);
        }, 0);

        
        setApproved(approvedSubmissions);
          setTotalEarnings(earnings);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);


  return (
    <div className="p-2">
     <InfoCards totalEarnings={totalEarnings} submissions={submissions} data={data}></InfoCards>

     <SubmissionTable approved={approved}></SubmissionTable>


     
    </div>
  );
};

export default WorkerHome;