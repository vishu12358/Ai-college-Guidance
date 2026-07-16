const searches = [
  {
    college: "IIT Delhi",
    branch: "Computer Science",
    date: "Today",
  },
  {
    college: "NIT Trichy",
    branch: "Information Technology",
    date: "Yesterday",
  },
  {
    college: "VIT Vellore",
    branch: "Artificial Intelligence",
    date: "2 days ago",
  },
];

const RecentSearches = () => {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-6">
        Recent Searches
      </h2>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="text-left px-6 py-4">College</th>
              <th className="text-left px-6 py-4">Branch</th>
              <th className="text-left px-6 py-4">Last Viewed</th>
            </tr>

          </thead>

          <tbody>

            {searches.map((search, index) => (

              <tr
                key={index}
                className="border-b hover:bg-gray-50"
              >

                <td className="px-6 py-4">
                  {search.college}
                </td>

                <td className="px-6 py-4">
                  {search.branch}
                </td>

                <td className="px-6 py-4">
                  {search.date}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </section>
  );
};

export default RecentSearches;