import { useLoaderData } from "react-router-dom";

const TaskDetails = () => {
  const data = useLoaderData();
  console.log(data);

  const {
    imageURL,
    lastDate,
    payableAmount,
    quantity,
    submissionInfo,
    taskDetails,
    taskTitle,
  } = data;

  const handleSubmitTask = e =>{
    e.preventDefault();

    
  }

  return (
    <div className="h-full flex items-center">
      <section className="bg-gray-800 text-gray-100 w-full">
        <div className="container flex flex-col mx-auto lg:flex-row">
          <div
            className=" w-full lg:w-1/3 
          "
            style={{
              backgroundImage: `url(${imageURL})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
            <h2 className="text-3xl font-semibold leading-none">{taskTitle}</h2>
            <p className="mt-2 text-sm">{taskDetails}</p>
            <p className="mt-2 text-sm">Last Date : {lastDate}</p>
            <p className="mt-2 text-sm">Payable Amount: {payableAmount}</p>
            <p className="mt-2 text-sm">Available Quantity: {quantity}</p>
            <p className="mt-2 mb-5 text-sm">{submissionInfo}</p>
            <form>
              <label htmlFor="submission_Details">Submission Details:</label>
              <textarea
                id="submission_Details"
                name="submission_Details"
                placeholder={"Drop your link or message here"}
                required
                className="w-full p-2 border rounded text-black"
              ></textarea>
              <button type="submit" className="btn btn-primary mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskDetails;
