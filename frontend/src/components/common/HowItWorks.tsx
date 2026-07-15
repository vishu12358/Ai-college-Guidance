const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description:
      "Enter your exam, rank, category, budget and preferred branch."
  },
  {
    number: "02",
    title: "AI Analyzes Your Data",
    description:
      "Our AI compares your profile with thousands of colleges and previous cutoffs."
  },
  {
    number: "03",
    title: "Get Best Recommendations",
    description:
      "Receive Dream, Target and Safe college recommendations with detailed insights."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          How It Works
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-16">
          Get your personalized college recommendations in three simple steps.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-blue-50 rounded-2xl p-8 shadow hover:shadow-lg transition"
            >
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-6">
                {step.number}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;