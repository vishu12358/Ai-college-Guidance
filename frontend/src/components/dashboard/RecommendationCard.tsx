type RecommendationCardProps = {
  college: string;
  rank: number;
  packageAvg: string;
  location: string;
};

const RecommendationCard = ({
  college,
  rank,
  packageAvg,
  location,
}: RecommendationCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

      <h3 className="text-2xl font-bold">
        {college}
      </h3>

      <p className="text-gray-500 mt-2">
        📍 {location}
      </p>

      <div className="flex justify-between mt-6">

        <div>
          <p className="text-sm text-gray-500">
            NIRF Rank
          </p>

          <h4 className="font-bold">
            #{rank}
          </h4>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Avg Package
          </p>

          <h4 className="font-bold text-green-600">
            {packageAvg}
          </h4>
        </div>

      </div>

      <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
        View Details
      </button>

    </div>
  );
};

export default RecommendationCard;