import FeatureCard from "../cards/FeatureCard";

const Features = () => {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Why Choose CollegeAI?
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-14">
          Everything you need to choose the right college.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <FeatureCard
            icon="🤖"
            title="AI Recommendation"
            description="Personalized college suggestions based on your profile."
          />

          <FeatureCard
            icon="📊"
            title="Placement Analysis"
            description="Compare average package, recruiters and placement rate."
          />

          <FeatureCard
            icon="💰"
            title="ROI Calculator"
            description="Compare tuition fees with expected salary after graduation."
          />

          <FeatureCard
            icon="⚖️"
            title="College Comparison"
            description="Compare colleges side-by-side before making a decision."
          />

        </div>

      </div>

    </section>
  );
};

export default Features;