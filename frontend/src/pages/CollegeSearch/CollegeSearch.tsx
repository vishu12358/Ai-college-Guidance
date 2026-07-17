import { useState } from "react";

import AppLayout from "../../components/layout/AppLayout";
import SearchFilters, {
  type Filters,
} from "../../components/search/SearchFilters";
import CollegeResults from "../../components/search/CollegeResults";
import { colleges } from "../../data/colleges";

const CollegeSearch = () => {
  const [filters, setFilters] = useState<Filters>({
    searchTerm: "",
    state: "",
    collegeType: "",
    branch: "",
    entranceExam: "",
    sortBy: "",
  });

  const filteredColleges = colleges
    .filter((college) => {
      const matchesSearch = college.collegeName
        .toLowerCase()
        .includes(filters.searchTerm.toLowerCase());

      const matchesState =
        filters.state === "" || college.state === filters.state;

      const matchesCollegeType =
        filters.collegeType === "" ||
        college.collegeType === filters.collegeType;

      const matchesBranch =
        filters.branch === "" ||
        college.branch === filters.branch;

      const matchesExam =
        filters.entranceExam === "" ||
        college.entranceExam === filters.entranceExam;

      return (
        matchesSearch &&
        matchesState &&
        matchesCollegeType &&
        matchesBranch &&
        matchesExam
      );
    })
    .sort((a, b) => {
      switch (filters.sortBy) {
        case "rank":
          return a.nirfRank - b.nirfRank;

        case "fees":
          return (
            Number(a.fees.replace(/[₹,]/g, "")) -
            Number(b.fees.replace(/[₹,]/g, ""))
          );

        case "package":
          return (
            Number(b.averagePackage.replace(/[₹ LPA]/g, "")) -
            Number(a.averagePackage.replace(/[₹ LPA]/g, ""))
          );

        case "name":
          return a.collegeName.localeCompare(b.collegeName);

        default:
          return 0;
      }
    });

  return (
    <AppLayout>
      <h1 className="text-4xl font-bold text-gray-800">
        College Search
      </h1>

      <p className="text-gray-600 mt-2 mb-8">
        Search and compare colleges based on your preferences.
      </p>

      <SearchFilters
        filters={filters}
        setFilters={setFilters}
        colleges={colleges}
      />

      <CollegeResults colleges={filteredColleges} />
    </AppLayout>
  );
};

export default CollegeSearch;