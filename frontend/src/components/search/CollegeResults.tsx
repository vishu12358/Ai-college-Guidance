import CollegeCard from "./CollegeCard";
import type { College } from "../../data/colleges";

interface CollegeResultsProps {
  colleges: College[];
}

const CollegeResults = ({ colleges }: CollegeResultsProps) => {
  if (colleges.length === 0) {
    return (
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold text-gray-500">
          No colleges found.
        </h2>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-6">
        Search Results
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {colleges.map((college) => (
          <CollegeCard
            key={college.id}
            id={college.id}
            collegeName={college.collegeName}
            location={college.location}
            state={college.state}
            branch={college.branch}
            entranceExam={college.entranceExam}
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