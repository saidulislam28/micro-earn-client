import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const AddTask = () => {

	const {user} = useContext(AuthContext);

	const axiosPublic = useAxiosPublic();



const handleAddTask = e =>{
	e.preventDefault();

	const form = new FormData(e.currentTarget);


    const taskTitle = form.get("taskTitle");
    const taskDetails = form.get("taskDetails");
    const submissionInfo = form.get("submissionInfo");
    const imageURL = form.get("imageURL");
    const quantity = form.get("quantity");
    const payableAmount = form.get("payableAmount");
    const lastDate = form.get("lastDate");
		const creatorEmail = user?.email;
		const creatorName = user?.displayName;

		const task = {
			creatorName: creatorName,
			creatorEmail: creatorEmail,
			taskTitle: taskTitle,
			taskDetails: taskDetails,
			submissionInfo: submissionInfo,
			imageURL: imageURL,
			quantity: quantity,
			payableAmount: payableAmount,
			lastDate: lastDate,

		}


		axiosPublic.post('tasks', task)
		.then(res =>{
			if(res.data.insertedId){
				console.log("mongo te task gese");
			}
		})


		// console.log(taskTitle, taskDetails, submissionInfo, imageURL,quantity, payableAmount, lastDate, creatorEmail, creatorName);
	



}



  return (
    <section className="p-6 bg-gray-500 text-gray-50 h-full">
	<fieldset noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
		<div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-700">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Personal Inormation</p>
				<p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
			</div>
			<form onSubmit={handleAddTask} className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">Task Title<sup>*</sup> </label>
					<input id="Task Title" type="text" 
          name="taskTitle"
          placeholder="Task Title" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="lastname" className="text-sm">Task details<sup>*</sup></label>
					<input  type="text" placeholder="Task Details" 
          name="taskDetails"
          className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>


				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">Submission Information<sup>*</sup> </label>
					<input id="Task Title" type="text" 
          name="submissionInfo"
          placeholder="submission info" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>


				<div className="col-span-full sm:col-span-3">
					<label htmlFor="lastname" className="text-sm">Image URL<sup>*</sup></label>
					<input  type="text" placeholder="https://ibb.co/exampleImage" 
          name="imageURL" 
          className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
        
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="city" className="text-sm">Task Quantity<sup>*</sup></label>
					<input id="city" type="number" placeholder="Quantity" 
					name="quantity"
					className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>



				<div className="col-span-full sm:col-span-2">
					<label htmlFor="state" className="text-sm">Payable Amount<sup>*</sup></label>
					<input id="state" type="number" 
					name="payableAmount"
					placeholder="Payable amount" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>


				<div className="col-span-full sm:col-span-2">
					<label htmlFor="zip" className="text-sm">Last Completion Date</label>
					<input id="zip" type="date" name="lastDate" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
				<div className="col-span-full ">
					
					<input id="zip" type="submit" value='Add Task' className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 btn focus:ring-violet-400 border-gray-700" />
				</div>

			
			</form>
		</div>
		
	</fieldset>
</section>
  );
};

export default AddTask;