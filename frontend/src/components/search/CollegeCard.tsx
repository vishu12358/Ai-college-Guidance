interface CollegeCardProps {
  collegeName: string;
  location: string;
  nirfRank: number;
  fees: string;
  averagePackage: string;
  collegeType: string;
}

const CollegeCard = ({
  collegeName,
  location,
  nirfRank,
  fees,
  averagePackage,
  collegeType,
}: CollegeCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">

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

      <div className="grid grid-cols-2 gap-4 mt-6">

        <div>
          <p className="text-gray-500 text-sm">NIRF Rank</p>
          <p className="font-semibold">{nirfRank}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Average Package</p>
          <p className="font-semibold">{averagePackage}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Annual Fees</p>
          <p className="font-semibold">{fees}</p>
        </div>

      </div>

      <button
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
      >
        View Details
      </button>

    </div>
  );
};

export default CollegeCard;