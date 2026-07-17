import { useNavigate } from "react-router-dom";
import { useCompare } from "../../context/CompareContext";
import { useSavedColleges } from "../../context/SavedCollegesContext";

interface CollegeCardProps {
  id: number;
  collegeName: string;
  location: string;
  state: string;
  branch: string;
  entranceExam: string;
  nirfRank: number;
  fees: string;
  averagePackage: string;
  collegeType: string;
}

const CollegeCard = ({
  id,
  collegeName,
  location,
  state,
  branch,
  entranceExam,
  nirfRank,
  fees,
  averagePackage,
  collegeType,
}: CollegeCardProps) => {
  const navigate = useNavigate();

  const { addToCompare } = useCompare();
  const { saveCollege } = useSavedColleges();

  // Compare College
  const handleCompare = () => {
    addToCompare({
      id,
      collegeName,
      location,
      state,
      branch,
      entranceExam,
      nirfRank,
      fees,
      averagePackage,
      collegeType,
    });

    alert("College added to Compare!");
  };

  // Save College
  const handleSave = () => {
    saveCollege({
      id,
      collegeName,
      location,
      state,
      branch,
      entranceExam,
      nirfRank,
      fees,
      averagePackage,
      collegeType,
    });

    alert("College saved successfully!");
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {collegeName}
          </h2>

          <p className="text-gray-500 mt-1">
            📍 {location}
          </p>
        </div>

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
          {collegeType}
        </span>
      </div>

      {/* College Details */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div>
          <p className="text-gray-500 text-sm">NIRF Rank</p>
          <p className="font-semibold">#{nirfRank}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Average Package</p>
          <p className="font-semibold">{averagePackage}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Annual Fees</p>
          <p className="font-semibold">{fees}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Entrance Exam</p>
          <p className="font-semibold">{entranceExam}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-3 gap-3 mt-6">
        <button
          onClick={() => navigate(`/college/${id}`)}
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          View Details
        </button>

        <button
          onClick={handleCompare}
          className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Compare
        </button>

        <button
          onClick={handleSave}
          className="bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold transition"
        >
          ❤️ Save
        </button>
      </div>
    </div>
  );
};

export default CollegeCard;