

const InfoCards = ({data, submissions, totalEarnings}) => {
  
  return (
    <section className="">
      <div className="p-4 space-y-2 text-center ">
      <h2 className="text-3xl font-bold text-center   w-2/4 mx-auto border-y-2 py-4 border-amber-300">Your Stats</h2>
        
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center py-10 border-2 border-green-300 rounded-xl">
        <i className="fas fa-coins text-5xl text-yellow-500"></i>

          <h3 className="my-3 text-3xl font-semibold">Available Coins</h3>
          <h3 className="mt-2 text-3xl font-semibold">{data?.coin}</h3>
        </div>
        <div className="flex flex-col items-center py-10 border-2 border-green-300 rounded-xl">
        <i className="fas fa-tasks text-5xl text-blue-500"></i>

          <h3 className="my-3 text-3xl font-semibold">Total Submissions</h3>
          <h3 className="mt-2 text-3xl font-semibold">{submissions?.length}</h3>
        </div>
        <div className="flex flex-col items-center py-10 border-2 border-green-300 rounded-xl">
        <i className="fas fa-dollar-sign text-5xl text-green-500"></i>

          <h3 className="my-3 text-3xl font-semibold">Total Earnings</h3>
          <h3 className="mt-2 text-3xl font-semibold">{totalEarnings}</h3>
        </div>
       
        
      </div>
    </section>
  );
};

export default InfoCards;
