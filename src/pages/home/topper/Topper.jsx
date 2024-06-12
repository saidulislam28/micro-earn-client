import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Topper = () => {

const axiosPublic = useAxiosPublic();
const [workers , setWorkers] =useState([]);

useEffect(()=>{
  axiosPublic.get('/topWorkers')
  .then(res =>{
    setWorkers(res.data);
  })
  .catch(error=>{
    console.log(error);
  })
})

  return (
    <div>
      <section className="py-6 sm:py-12 bg-gray-300 dark:bg-gray-100 bg-gray-100 dark:bg-gray-100 text-gray-100 dark:text-gray-800 text-gray-100 dark:text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold w-1/4 mx-auto border-y-4 py-4 border-amber-300 text-black">Our Top Earners</h2>
            
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">


            {
              workers.map(worker =><article 
              key={worker._id}
              className="flex flex-col bg-gray-900 dark:bg-gray-50 bg-gray-900 dark:bg-gray-50">
              
              <img
                alt=""
                className="object-cover w-full h-52 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500"
                src={worker.photo}
              />
           
            <div className="flex flex-col flex-1 p-6">
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
              Available Coin : <span>{worker.coin}</span>
              </h3>
              <h2>Completed task: {worker?.approvedTasksCount}</h2>
              
            </div>
          </article>)
            }




            
           
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Topper;
