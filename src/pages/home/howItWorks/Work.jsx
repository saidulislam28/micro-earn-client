import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTasks, faGift } from '@fortawesome/free-solid-svg-icons';




const Work = () => {
  return (
    <div className='bg-[#f9f9f9]'>

    <div className="steps-container flex flex-col lg:flex-row justify-around  flex-wrap container mx-auto">
    <div className="text-center max-w-[300px] m-5 border py-10 px-5 bg-slate-200 rounded-xl">
      <FontAwesomeIcon className='text-green-300' icon={faUser} size="3x" />
      <h3 className='m-5 font-semibold text-2xl'>Register</h3>
      <p className='mt-3 text-lg'>Create your account to get started. Join our community and start earning rewards by completing simple tasks.</p>
    </div>
    <div className="text-center max-w-[300px] m-5 py-10 px-5 border rounded-xl bg-slate-200">
      <FontAwesomeIcon className='bg-gradient-to-r from-indigo-200 via-purple-400 to-pink-300 p-1' icon={faTasks} size="3x" />
      <h3 className='m-5 font-semibold text-2xl'>Complete Tasks</h3>
      <p className='mt-3 text-lg'>Browse through available tasks and choose the ones that suit your skills. Complete tasks to earn coins.</p>
    </div>
    <div className="text-center max-w-[300px] m-5 py-10 px-5 border rounded-xl bg-slate-200">
      <FontAwesomeIcon className='text-pink-500' icon={faGift} size="3x" />
      <h3 className='m-5 font-semibold text-2xl'>Earn Rewards</h3>
      <p className='mt-3 text-lg'>Accumulate coins and exchange them for exciting rewards. The more tasks you complete, the more you earn.</p>
    </div>
  </div>
    </div>
  );
};

export default Work;