import './feature.css';

const Feature = () => {
  return (
    <section className="features-section p-6 bg-gray-100 text-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="feature-item text-center p-6 bg-white shadow-md rounded-lg">
            <div className="icon mb-4">
              <i className="fas fa-coins text-5xl text-yellow-500"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Earn Coins by Completing Tasks</h3>
            <p>Complete various tasks on our platform and earn coins that you can redeem for rewards.</p>
          </div>
          <div className="feature-item text-center p-6 bg-white shadow-md rounded-lg">
            <div className="icon mb-4">
              <i className="fas fa-tasks text-5xl text-blue-500"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Create and Manage Tasks</h3>
            <p>Task creators can easily create, manage, and track the progress of tasks assigned to workers.</p>
          </div>
          <div className="feature-item text-center p-6 bg-white shadow-md rounded-lg">
            <div className="icon mb-4">
              <i className="fas fa-lock text-5xl text-green-500"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p>Our platform ensures secure and timely payments for all completed tasks.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
