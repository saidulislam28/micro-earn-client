

const SubmissionTable = ({approved}) => {
  return (
    <div className="overflow-x-auto border my-20">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Payable Amount</th>
        <th>Creator</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        approved.map((task, idx) =><tr key={idx}>
          <th>{idx + 1}</th>
          <td>{task.task_title}</td>
          <td>$ {task.payable_amount}</td>
          <td>{task.creator_name}</td>
          <td className="text-green-500">{task.status}d</td>
        </tr>)
      }
      
    </tbody>
  </table>
</div>
  );
};

export default SubmissionTable;