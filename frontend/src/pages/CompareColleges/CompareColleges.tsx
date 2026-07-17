import Sidebar from "../../components/layout/Sidebar";
const CompareColleges = () => {
  return (
    <div className="flex">
      <Sidebar />

      <main className="ml-64 flex-1 min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Compare Colleges
        </h1>

        <p className="text-gray-600 mt-2">
          Compare two or more colleges based on rankings,
          placements, fees, infrastructure, and more.
        </p>

        <div className="mt-8 bg-white rounded-xl shadow-md p-10 text-center">
          <h2 className="text-2xl font-semibold">
            🚧 Coming Soon
          </h2>

          <p className="mt-3 text-gray-500">
            This feature will allow students to compare
            colleges side by side.
          </p>
        </div>
      </main>
    </div>
  );
};

export default CompareColleges;