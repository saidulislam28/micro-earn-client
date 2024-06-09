import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";

const TaskDetails = () => {

  const id = useParams()

const axiosPublic = useAxiosPublic();

axiosPublic.get('')


  return (
    <div>
      this is details page
    </div>
  );
};

export default TaskDetails;