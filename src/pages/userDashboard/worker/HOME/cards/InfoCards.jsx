

const InfoCards = () => {

  
  return (
    <section className="">
      <div className="p-4 my-6 space-y-2 text-center ">
        <h2 className="text-5xl font-bold">Built to empower every team</h2>
        <p className="text-gray-400">Libero minima optio qui</p>
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center py-10 border-2 border-green-300 rounded-xl">
        <i className="fas fa-coins text-5xl text-yellow-500"></i>

          <h3 className="my-3 text-3xl font-semibold">Available Coins</h3>
          <h3 className="mt-2 text-3xl font-semibold">100</h3>
        </div>
        <div className="flex flex-col items-center py-10 border-2 border-green-300 rounded-xl">
        <i className="fas fa-tasks text-5xl text-blue-500"></i>

          <h3 className="my-3 text-3xl font-semibold">Total Submissions</h3>
          <h3 className="mt-2 text-3xl font-semibold">100</h3>
        </div>
        <div className="flex flex-col items-center py-10 border-2 border-green-300 rounded-xl">
        <i className="fas fa-dollar-sign text-5xl text-green-500"></i>

          <h3 className="my-3 text-3xl font-semibold">Total Earnings</h3>
          <h3 className="mt-2 text-3xl font-semibold">100</h3>
        </div>
       
        
      </div>
    </section>
  );
};

export default InfoCards;
