import { FaDollarSign } from "react-icons/fa";
import "./infocard.css";

const CreatorCard = () => {
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
     <div className="bgblue">
      <div className="card-mine">
        <div className="flex flex-col items-center py-10">
          <FaDollarSign className="text-5xl text-amber-400"></FaDollarSign>

          <h3 className="my-3 text-3xl font-semibold">Available Coins</h3>
          <h3 className="mt-2 text-3xl font-semibold">100</h3>
        </div>
      </div>
    </div>
     <div className="bgblue">
      <div className="card-mine">
        <div className="flex flex-col items-center py-10">
          <FaDollarSign className="text-5xl text-amber-400"></FaDollarSign>

          <h3 className="my-3 text-3xl font-semibold">Available Coins</h3>
          <h3 className="mt-2 text-3xl font-semibold">100</h3>
        </div>
      </div>
    </div>
     <div className="bgblue">
      <div className="card-mine">
        <div className="flex flex-col items-center py-10">
          <FaDollarSign className="text-5xl text-amber-400"></FaDollarSign>

          <h3 className="my-3 text-3xl font-semibold">Available Coins</h3>
          <h3 className="mt-2 text-3xl font-semibold">100</h3>
        </div>
      </div>
    </div>
   </div>
  );
};

export default CreatorCard;
