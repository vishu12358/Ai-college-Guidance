const questions = [
  "Suggest CSE colleges under AIR 20,000",
  "Best colleges for AI & ML",
  "Compare IIT Delhi and NIT Trichy",
  "Top private engineering colleges",
  "Colleges with low fees and good placements",
  "Best colleges in Uttar Pradesh",
];

const SuggestedQuestions = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-gray-800">
        👋 Welcome to AI College Assistant
      </h2>

      <p className="text-center text-gray-500 mt-2 mb-8">
        Ask anything about colleges, admissions, scholarships, rankings and placements.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {questions.map((question, index) => (
          <button
            key={index}
            className="p-5 text-left rounded-xl border hover:border-blue-500 hover:bg-blue-50 transition duration-300 shadow-sm"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedQuestions;