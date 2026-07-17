import { useParams } from "react-router-dom";
import Sidebar from "../../components/layout/Sidebar";
import { colleges } from "../../data/colleges";

const CollegeDetails = () => {
  const { id } = useParams();

  const college = colleges.find(
    (item) => item.id === Number(id)
  );

  // If college is not found
  if (!college) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Sidebar />

        <main className="ml-64 flex items-center justify-center h-screen">
          <div className="bg-white p-10 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold text-red-600">
              College Not Found
            </h1>

            <p className="mt-4 text-gray-600">
              No college exists with this ID.
            </p>
          </div>
        </main>
      </div>
    );
  }

  // Main Page
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />

      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8">

          {/* College Name */}
          <h1 className="text-4xl font-bold text-gray-900">
            {college.collegeName}
          </h1>

          {/* Location */}
          <p className="text-gray-500 mt-2 mb-8">
            📍 {college.location}
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-blue-50 rounded-xl p-6">
              <p className="text-gray-500">NIRF Rank</p>
              <h2 className="text-3xl font-bold mt-2">
                {college.nirfRank}
              </h2>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <p className="text-gray-500">Fees</p>
              <h2 className="text-3xl font-bold mt-2">
                {college.fees}
              </h2>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6">
              <p className="text-gray-500">Average Package</p>
              <h2 className="text-3xl font-bold mt-2">
                {college.averagePackage}
              </h2>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <p className="text-gray-500">College Type</p>
              <h2 className="text-3xl font-bold mt-2">
                {college.collegeType}
              </h2>
            </div>

          </div>

          {/* Courses */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">
              Courses Offered
            </h2>

            <div className="flex flex-wrap gap-3">
              {[
                "Computer Science",
                "Artificial Intelligence",
                "Mechanical Engineering",
                "Civil Engineering",
                "Electrical Engineering",
                "Electronics",
              ].map((course) => (
                <span
                  key={course}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Facilities */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">
              Facilities
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>✅ Hostel</div>
              <div>✅ Library</div>
              <div>✅ WiFi Campus</div>
              <div>✅ Sports Complex</div>
              <div>✅ Smart Classrooms</div>
              <div>✅ Research Labs</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex gap-4">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg">
              ❤️ Save College
            </button>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
              ⚖ Compare
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default CollegeDetails;