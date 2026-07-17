import type { Dispatch, SetStateAction } from "react";
import type { College } from "../../data/colleges";

export interface Filters {
  searchTerm: string;
  state: string;
  collegeType: string;
  branch: string;
  entranceExam: string;
  sortBy: string;
}

interface SearchFiltersProps {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
  colleges: College[];
}

const SearchFilters = ({
  filters,
  setFilters,
  colleges,
}: SearchFiltersProps) => {
  const states = [...new Set(colleges.map((college) => college.state))];
  const branches = [...new Set(colleges.map((college) => college.branch))];
  const exams = [...new Set(colleges.map((college) => college.entranceExam))];
  const collegeTypes = [
    ...new Set(colleges.map((college) => college.collegeType)),
  ];

  const resetFilters = () => {
    setFilters({
      searchTerm: "",
      state: "",
      collegeType: "",
      branch: "",
      entranceExam: "",
      sortBy: "",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-6">
        Search Filters
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Search */}
        <input
          type="text"
          placeholder="Search College..."
          value={filters.searchTerm}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              searchTerm: e.target.value,
            }))
          }
          className="border rounded-lg p-3 w-full"
        />

        {/* State */}
        <select
          value={filters.state}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              state: e.target.value,
            }))
          }
          className="border rounded-lg p-3"
        >
          <option value="">All States</option>

          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        {/* College Type */}
        <select
          value={filters.collegeType}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              collegeType: e.target.value,
            }))
          }
          className="border rounded-lg p-3"
        >
          <option value="">College Type</option>

          {collegeTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        {/* Branch */}
        <select
          value={filters.branch}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              branch: e.target.value,
            }))
          }
          className="border rounded-lg p-3"
        >
          <option value="">Branch</option>

          {branches.map((branch) => (
            <option key={branch} value={branch}>
              {branch}
            </option>
          ))}
        </select>

        {/* Entrance Exam */}
        <select
          value={filters.entranceExam}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              entranceExam: e.target.value,
            }))
          }
          className="border rounded-lg p-3"
        >
          <option value="">Entrance Exam</option>

          {exams.map((exam) => (
            <option key={exam} value={exam}>
              {exam}
            </option>
          ))}
        </select>

        {/* Sort By */}
        <select
          value={filters.sortBy}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              sortBy: e.target.value,
            }))
          }
          className="border rounded-lg p-3"
        >
          <option value="">Sort By</option>
          <option value="rank">NIRF Rank</option>
          <option value="fees">Fees (Low → High)</option>
          <option value="package">Package (High → Low)</option>
          <option value="name">College Name (A-Z)</option>
        </select>

        {/* Reset Button */}
        <button
          onClick={resetFilters}
          className="bg-red-500 text-white rounded-lg p-3 hover:bg-red-600 transition"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default SearchFilters;