import { Link } from "react-router-dom";
import InfoCards from "./cards/InfoCards";
import SubmissionTable from "./submissions/SubmissionTable";

const WorkerHome = () => {
  return (
    <div className="p-2">
     <InfoCards></InfoCards>

     <SubmissionTable></SubmissionTable>


     
    </div>
  );
};

export default WorkerHome;