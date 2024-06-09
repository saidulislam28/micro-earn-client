import { useContext, useState } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";


const Withdraw = () => {

  const { user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const [myUsers , setMyUsers] = useState([]);

  useState(() =>{

    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setMyUsers(data))
  },[])

  const myUserCoin = myUsers.find((myUser) => user?.email === myUser?.email);



 
  const [coins, setCoins] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [paymentSystem, setPaymentSystem] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  // Suppose the user has 300 coins
  const userCoins = myUserCoin?.coin; 
  const maxWithdrawalAmount = userCoins / 20;

  const handleCoinsChange = (e) => {
    const coinValue = parseInt(e.target.value, 10) || 0;
    setCoins(coinValue);
    setWithdrawAmount(coinValue / 20);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (withdrawAmount > maxWithdrawalAmount) {
      alert('The withdrawal amount exceeds the maximum allowable amount.');
    } else {

      if(withdrawAmount < 0){
      return alert('invalid value')
      }

      const withdrawalRequest = {
        coins,
        withdrawAmount,
        paymentSystem,
        accountNumber,
        userEmail: user?.email,
        userName: user?.displayName,
        current_date: new Date().toISOString().split('T')[0],
      };

axiosPublic.post('/withdraws', withdrawalRequest)
.then(res =>{
if(res.data.insertedId){
  console.log('with draw request confirmed');
}
})
.catch(error =>{
  console.log(error);
})
      
    }
  };



  return (
    <div className="h-full flex items-center">
      <section className="bg-gray-800 text-gray-100 w-full">
        <div className="container flex flex-col mx-auto lg:flex-row">
          <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
            <h2 className="text-3xl font-semibold leading-none">Withdraw</h2>
            <p className="mt-2 mb-5 text-sm">Your Maximum Withdrawal Amount: ${maxWithdrawalAmount.toFixed(2)}</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="coins" className="block text-sm font-medium">Coins to Withdraw:</label>
                <input
                  type="number"
                  id="coins"
                  name="coins"
                  value={coins}
                  onChange={handleCoinsChange}
                  className="w-full p-2 border rounded text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="withdrawAmount" className="block text-sm font-medium">Withdraw Amount ($):</label>
                <input
                  type="number"
                  id="withdrawAmount"
                  name="withdrawAmount"
                  value={withdrawAmount.toFixed(2)}
                  readOnly
                  className="w-full p-2 border rounded text-black"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="paymentSystem" className="block text-sm font-medium">Select Payment System:</label>
                <select
                  id="paymentSystem"
                  name="paymentSystem"
                  value={paymentSystem}
                  onChange={(e) => setPaymentSystem(e.target.value)}
                  className="w-full p-2 border rounded text-black"
                  required
                >
                  <option value="">Select a payment system</option>
                  <option value="Bkash">Bkash</option>
                  <option value="Rocket">Rocket</option>
                  <option value="Nagad">Nagad</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="accountNumber" className="block text-sm font-medium">Account Number:</label>
                <input
                  type="text"
                  id="accountNumber"
                  name="accountNumber"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="w-full p-2 border rounded text-black"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary mt-2">Withdraw</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Withdraw;