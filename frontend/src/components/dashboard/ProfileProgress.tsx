import { Link } from "react-router-dom";

const ProfileProgress = () => {
  const progress = 60;

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-6">
        Profile Completion
      </h2>

      <div className="bg-white rounded-2xl shadow-md p-6">

        <div className="flex justify-between mb-3">
          <span className="font-medium">Completion</span>
          <span className="font-bold text-blue-600">
            {progress}%
          </span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-blue-600 h-3 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="mt-6 space-y-2">
          <p>✅ Personal Details</p>
          <p>✅ Academic Details</p>
          <p>❌ Preferences</p>
          <p>❌ Documents</p>
        </div>

        <Link
          to="/profile"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Complete Profile
        </Link>

      </div>
    </section>
  );
};

export default ProfileProgress;