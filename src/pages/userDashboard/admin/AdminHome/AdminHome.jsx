import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const AdminHome = () => {
  const [stats, setStats] = useState({ totalUsers: 0, totalCoins: 0 });
  const [withdraws, setWithdraws] = useState([]);

  const axiosPublic = useAxiosPublic();

  // Fetch user statistics
  useEffect(() => {
    axiosPublic
      .get("/userStats")
      .then((res) => {
        setStats(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user stats:", error);
      });
  }, [axiosPublic]);

  // Fetch withdrawal requests
  useEffect(() => {
    axiosPublic
      .get("/withdraws")
      .then((res) => {
        setWithdraws(res.data);
      })
      .catch((error) => {
        console.error("Error fetching withdrawal requests:", error);
      });
  }, [axiosPublic]);

  // Handle payment success
  const handlePaymentSuccess = (id, workerEmail, withdrawCoin) => {
    axiosPublic
      .delete(`/withdrawRequests/${id}`, {
        data: { workerEmail, withdrawCoin },
      })
      .then((response) => {
        if (response.data.deleteResult.deletedCount > 0) {
          setWithdraws(withdraws.filter((withdrawal) => withdrawal._id !== id));
          Swal.fire({
            icon: "success",
            title: "Payment Success",
            text: "Withdrawal request processed successfully",
          });
        }
      })
      .catch((error) => {
        console.error("Failed to process withdrawal request", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to process withdrawal request",
        });
      });
  };

  return (
    <div>
      <section className="features-section p-6 bg-gray-100 text-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="feature-item text-center p-6 bg-white shadow-md rounded-lg">
              <div className="icon mb-4">
                <i className="fas fa-user text-5xl text-green-500"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Total Users</h3>
              <h6 className="text-5xl">{stats.totalUsers}</h6>
            </div>
            <div className="feature-item text-center p-6 bg-white shadow-md rounded-lg">
              <div className="icon mb-4">
                <i className="fas fa-coins text-5xl text-amber-500"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Total Coins</h3>
              <h6 className="text-5xl">{stats.totalCoins}</h6>
            </div>
            <div className="feature-item text-center p-6 bg-white shadow-md rounded-lg">
              <div className="icon mb-4">
                <i className="fas fa-lock text-5xl text-pink-500"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <h6 className="text-5xl">100</h6>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold text-center my-12 w-2/4 mx-auto border-y-2 py-4 border-amber-300">
          Withdraw Request
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Worker Name</th>
                <th>Withdraw Coin</th>
                <th>Withdraw Amount</th>
                <th>Number</th>
                <th>System</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {withdraws.map((withdraw, index) => (
                <tr key={withdraw._id}>
                  <th>{index + 1}</th>
                  <td>{withdraw.userName}</td>
                  <td>{withdraw.coin}</td>
                  <td>{withdraw.withdrawAmount}</td>
                  <td>{withdraw.accountNumber}</td>
                  <td>{withdraw.paymentSystem}</td>
                  <td>{withdraw.current_date}</td>
                  <td>
                    <button
                      onClick={() =>
                        handlePaymentSuccess(
                          withdraw._id,
                          withdraw.worker_email,
                          withdraw.coin
                        )
                      }
                      className="text-green-500 py-2"
                    >
                      Approve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AdminHome;
