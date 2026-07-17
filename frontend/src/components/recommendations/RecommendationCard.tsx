import { useNavigate } from "react-router-dom";
import type { College } from "../../data/colleges";

interface Props {
  college: College;
}

const RecommendationCard = ({ college }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">

      <div className="flex justify-between items-start">

        <div>
          <h2 className="text-2xl font-bold">
            {college.collegeName}
          </h2>

          <p className="text-gray-500 mt-1">
            📍 {college.location}
          </p>
        </div>

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          {college.collegeType}
        </span>

      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">

        <div>
          <p className="text-gray-500 text-sm">
            Branch
          </p>

          <p className="font-semibold">
            {college.branch}
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            NIRF Rank
          </p>

          <p className="font-semibold">
            #{college.nirfRank}
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Fees
          </p>

          <p>{college.fees}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Avg Package
          </p>

          <p>{college.averagePackage}</p>
        </div>

      </div>

      <button
        onClick={() => navigate(`/college/${college.id}`)}
        className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
      >
        View Details
      </button>

    </div>
  );
};

export default RecommendationCard;