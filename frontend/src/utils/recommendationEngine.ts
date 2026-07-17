import { colleges } from "../data/colleges";

export interface RecommendationFilters {
  state: string;
  branch: string;
  collegeType: string;
  entranceExam: string;
}

export const getRecommendations = (
  filters: RecommendationFilters
) => {
  return colleges.filter((college) => {
    const stateMatch =
      !filters.state ||
      college.state === filters.state;

    const branchMatch =
      !filters.branch ||
      college.branch === filters.branch;

    const typeMatch =
      !filters.collegeType ||
      college.collegeType === filters.collegeType;

    const examMatch =
      !filters.entranceExam ||
      college.entranceExam === filters.entranceExam;

    return (
      stateMatch &&
      branchMatch &&
      typeMatch &&
      examMatch
    );
  });
};