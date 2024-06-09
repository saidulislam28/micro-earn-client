import { FaRightLeft } from "react-icons/fa6";
import CreatorCard from "./infoCard/CreatorCard";
// import TaskReview from "./task review/TaskReview";

const CreatorHome = () => {
  return (
    <div className="p-2">
      <div className="">
        <CreatorCard></CreatorCard>

        {/* <TaskReview></TaskReview> */}
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">
            Contacts
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full p-6 text-xs text-left whitespace-nowrap">
              {/* <colgroup>
				<col className="w-5" />
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-5" />
			</colgroup> */}
              <thead>
                <tr className="dark:bg-gray-300">
                  <th className="p-3">Title</th>
                  <th className="p-3">Name || email</th>
                  <th className="p-3">Payable Amount</th>
                  <th className="p-3">Submission</th>
                  <th className="p-3">Result</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                <tr>
                  <td className="px-3 py-2">
                    <p>task title</p>
                  </td>

                  <td className="px-3 py-2">
                    <span>Name</span>
                    <p className="dark:text-gray-600">saidul@gmail.com</p>
                  </td>

                  <td className="px-3 py-2">
                    <p>amount</p>
                  </td>

                  <td className="px-3 py-2">
                    {/* The button to open modal */}
                    <label htmlFor="my_modal_7" className="btn">
                      open modal
                    </label>

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id="my_modal_7"
                      className="modal-toggle"
                    />
                    <div className="modal" role="dialog">
                      <div className="modal-box">
                        <h3 className="text-lg font-bold">Hello!</h3>
                        <p className="py-4">
                          This modal works with a hidden checkbox!
                        </p>
                      </div>
                      <label className="modal-backdrop" htmlFor="my_modal_7">
                        Close
                      </label>
                    </div>
                  </td>

                  <td className="px-3 py-2">
                    <div className="dropdown dropdown-hover">
                      <div tabIndex={0} role="button" className="btn m-1">
                        Hover
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-24"
                      >
                        <li>
                          <a>Accept</a>
                          
                        </li>
                        <li>
                          <a>Reject</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td className="px-3 py-2">
                    <p>Pending</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorHome;
