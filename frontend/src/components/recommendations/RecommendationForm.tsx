import { useState } from "react";

interface Props {
  onRecommend: (filters: any) => void;
}

const RecommendationForm = ({ onRecommend }: Props) => {
  const [filters, setFilters] = useState({
    state: "",
    branch: "",
    collegeType: "",
    entranceExam: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <div className="grid md:grid-cols-4 gap-4">

        <select
          name="state"
          value={filters.state}
          onChange={handleChange}
          className="border rounded-lg p-3"
        >
          <option value="">All States</option>
          <option>Delhi</option>
          <option>Uttar Pradesh</option>
          <option>Maharashtra</option>
          <option>Tamil Nadu</option>
        </select>

        <select
          name="branch"
          value={filters.branch}
          onChange={handleChange}
          className="border rounded-lg p-3"
        >
          <option value="">All Branches</option>
          <option>CSE</option>
          <option>ECE</option>
          <option>Mechanical</option>
          <option>Civil</option>
        </select>

        <select
          name="collegeType"
          value={filters.collegeType}
          onChange={handleChange}
          className="border rounded-lg p-3"
        >
          <option value="">All Types</option>
          <option>IIT</option>
          <option>NIT</option>
          <option>Private</option>
          <option>Government</option>
        </select>

        <select
          name="entranceExam"
          value={filters.entranceExam}
          onChange={handleChange}
          className="border rounded-lg p-3"
        >
          <option value="">All Exams</option>
          <option>JEE Advanced</option>
          <option>JEE Main</option>
          <option>CUET</option>
        </select>

      </div>

      <button
        onClick={() => onRecommend(filters)}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Get Recommendations
      </button>

    </div>
  );
};

export default RecommendationForm;