import type { College } from "../../data/colleges";
import RecommendationCard from "./RecommendationCard";

interface Props {
  colleges: College[];
}

const RecommendationResults = ({ colleges }: Props) => {
  if (colleges.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md p-10 text-center">

        <h2 className="text-2xl font-bold">
          No Colleges Found
        </h2>

        <p className="text-gray-500 mt-2">
          Try changing your filters.
        </p>

      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-2 gap-6">

      {colleges.map((college) => (
        <RecommendationCard
          key={college.id}
          college={college}
        />
      ))}

    </div>
  );
};

export default RecommendationResults;