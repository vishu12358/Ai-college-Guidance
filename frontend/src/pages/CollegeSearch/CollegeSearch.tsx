import Sidebar from "../../components/layout/Sidebar";
import SearchFilters from "../../components/search/SearchFilters";
import CollegeResults from "../../components/search/CollegeResults";
const CollegeSearch = () => {
  return (
    <div className="flex">
      <Sidebar />

      <main className="ml-64 flex-1 min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-gray-800">
          College Search
        </h1>

        <p className="text-gray-600 mt-2 mb-8">
          Search and explore colleges based on your preferences.
        </p>

        <SearchFilters />

        <CollegeResults />
      </main>
    </div>
  );
};

export default CollegeSearch;