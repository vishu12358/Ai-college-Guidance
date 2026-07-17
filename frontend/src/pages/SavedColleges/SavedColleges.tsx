import AppLayout from "../../components/layout/AppLayout";
import { useSavedColleges } from "../../context/SavedCollegesContext";

const SavedColleges = () => {
  const {
    savedColleges,
    removeCollege,
    clearSaved,
  } = useSavedColleges();

  return (
    <AppLayout>
      <div className="p-6">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            ❤️ Saved Colleges
          </h1>

          {savedColleges.length > 0 && (
            <button
              onClick={clearSaved}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Clear All
            </button>
          )}
        </div>

        {savedColleges.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-10 text-center">
            <h2 className="text-2xl font-semibold">
              No Saved Colleges
            </h2>

            <p className="text-gray-500 mt-3">
              Save colleges from the search page.
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-6">
            {savedColleges.map((college) => (
              <div
                key={college.id}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h2 className="text-2xl font-bold">
                  {college.collegeName}
                </h2>

                <p className="text-gray-500 mt-2">
                  📍 {college.location}
                </p>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-gray-500 text-sm">
                      Branch
                    </p>
                    <p>{college.branch}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      NIRF Rank
                    </p>
                    <p>#{college.nirfRank}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Fees
                    </p>
                    <p>{college.fees}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Package
                    </p>
                    <p>{college.averagePackage}</p>
                  </div>
                </div>

                <button
                  onClick={() => removeCollege(college.id)}
                  className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </AppLayout>
  );
};

export default SavedColleges;