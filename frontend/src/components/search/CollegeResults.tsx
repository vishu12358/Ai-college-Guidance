import CollegeCard from "./CollegeCard";
import { colleges } from "../../data/colleges";

const CollegeResults = () => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-6">
        Search Results
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {colleges.map((college) => (
          <CollegeCard
            key={college.id}
            collegeName={college.collegeName}
            location={college.location}
            nirfRank={college.nirfRank}
            fees={college.fees}
            averagePackage={college.averagePackage}
            collegeType={college.collegeType}
          />
        ))}
      </div>
    </div>
  );
};

export default CollegeResults;