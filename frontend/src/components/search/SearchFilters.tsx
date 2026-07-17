import Input from "../ui/Input";
import Select from "../ui/Select";

import { branches } from "../../constants/branches";
import { entranceExams } from "../../constants/entranceExams";
import { categories } from "../../constants/categories";
import { collegeTypes } from "../../constants/collegeTypes";
import { states } from "../../constants/states";

const SearchFilters = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Search Filters
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <Select
          label="Entrance Exam"
          name="entranceExam"
          value=""
          options={entranceExams}
          onChange={() => {}}
        />

        <Select
          label="Preferred Branch"
          name="preferredBranch"
          value=""
          options={branches}
          onChange={() => {}}
        />

        <Select
          label="State"
          name="preferredState"
          value=""
          options={states}
          onChange={() => {}}
        />

        <Select
          label="Category"
          name="category"
          value=""
          options={categories}
          onChange={() => {}}
        />

        <Select
          label="College Type"
          name="collegeType"
          value=""
          options={collegeTypes}
          onChange={() => {}}
        />

        <Input
          label="Maximum Budget (₹)"
          name="budget"
          type="number"
          value=""
          onChange={() => {}}
          placeholder="Enter Budget"
        />

      </div>

      <button
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
      >
        Search Colleges
      </button>

    </div>
  );
};

export default SearchFilters;