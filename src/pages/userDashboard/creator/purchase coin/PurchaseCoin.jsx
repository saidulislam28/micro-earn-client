import { FaDollarSign } from "react-icons/fa";

const PurchaseCoin = () => {
  return (<div>

    <h2 className="text-center text-4xl my-10 font-semibold p-4 border-b-2 border-b-amber-500 w-1/2 mx-auto">
      Select any one for purchase coin
    </h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="border border-b-amber-300 py-10 flex flex-col items-center">
        <FaDollarSign className="text-5xl my-5 text-amber-400"></FaDollarSign>

        <h2 className="text-3xl">10 coins = 1 Dollar</h2>
      </div>
      <div className="border border-b-amber-300 py-10 flex flex-col items-center">
        <FaDollarSign className="text-5xl my-5 text-amber-400"></FaDollarSign>

        <h2 className="text-3xl">100 coins = 9 Dollar</h2>
      </div>
      <div className="border border-b-amber-300 py-10 flex flex-col items-center">
        <FaDollarSign className="text-5xl my-5 text-amber-400"></FaDollarSign>

        <h2 className="text-3xl">500 coins = 19 Dollar</h2>
      </div>
      <div className="border border-b-amber-300 py-10 flex flex-col items-center">
        <FaDollarSign className="text-5xl my-5 text-amber-400"></FaDollarSign>

        <h2 className="text-3xl">1000 coins = 39 Dollar</h2>
      </div>
    </div>
  </div>
    
  );
};

export default PurchaseCoin;
