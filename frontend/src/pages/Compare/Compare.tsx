import AppLayout from "../../components/layout/AppLayout";
import { useCompare } from "../../context/CompareContext";

const Compare = () => {
  const {
    compareColleges,
    removeFromCompare,
    clearCompare,
  } = useCompare();

  return (
    <AppLayout>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Compare Colleges
          </h1>

          <p className="text-gray-600 mt-2">
            Compare up to 3 colleges side by side.
          </p>
        </div>

        {compareColleges.length > 0 && (
          <button
            onClick={clearCompare}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
          >
            Clear All
          </button>
        )}
      </div>

      {compareColleges.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-10 text-center">
          <h2 className="text-2xl font-semibold">
            No Colleges Selected
          </h2>

          <p className="text-gray-500 mt-3">
            Select colleges from the search page to compare them.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl shadow-md">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-4 text-left">Field</th>

                {compareColleges.map((college) => (
                  <th key={college.id} className="p-4 text-left">
                    {college.collegeName}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="font-semibold p-4">Location</td>

                {compareColleges.map((college) => (
                  <td key={college.id} className="p-4">
                    {college.location}
                  </td>
                ))}
              </tr>

              <tr className="border-b">
                <td className="font-semibold p-4">State</td>

                {compareColleges.map((college) => (
                  <td key={college.id} className="p-4">
                    {college.state}
                  </td>
                ))}
              </tr>

              <tr className="border-b">
                <td className="font-semibold p-4">College Type</td>

                {compareColleges.map((college) => (
                  <td key={college.id} className="p-4">
                    {college.collegeType}
                  </td>
                ))}
              </tr>

              <tr className="border-b">
                <td className="font-semibold p-4">Branch</td>

                {compareColleges.map((college) => (
                  <td key={college.id} className="p-4">
                    {college.branch}
                  </td>
                ))}
              </tr>

              <tr className="border-b">
                <td className="font-semibold p-4">Entrance Exam</td>

                {compareColleges.map((college) => (
                  <td key={college.id} className="p-4">
                    {college.entranceExam}
                  </td>
                ))}
              </tr>

              <tr className="border-b">
                <td className="font-semibold p-4">NIRF Rank</td>

                {compareColleges.map((college) => (
                  <td key={college.id} className="p-4">
                    #{college.nirfRank}
                  </td>
                ))}
              </tr>

              <tr className="border-b">
                <td className="font-semibold p-4">Fees</td>

                {compareColleges.map((college) => (
                  <td key={college.id} className="p-4">
                    {college.fees}
                  </td>
                ))}
              </tr>

              <tr className="border-b">
                <td className="font-semibold p-4">
                  Average Package
                </td>

                {compareColleges.map((college) => (
                  <td key={college.id} className="p-4">
                    {college.averagePackage}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="font-semibold p-4">Action</td>

                {compareColleges.map((college) => (
                  <td key={college.id} className="p-4">
                    <button
                      onClick={() => removeFromCompare(college.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Remove
                    </button>
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>
      )}
    </AppLayout>
  );
};

export default Compare;