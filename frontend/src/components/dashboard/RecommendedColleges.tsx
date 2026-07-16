import RecommendationCard from "./RecommendationCard";

const RecommendedColleges = () => {
  return (
    <section className="mt-12">

      <h2 className="text-2xl font-bold mb-6">
        Recommended Colleges
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        <RecommendationCard
          college="IIT Delhi"
          rank={2}
          packageAvg="₹22 LPA"
          location="New Delhi"
        />

        <RecommendationCard
          college="NIT Trichy"
          rank={9}
          packageAvg="₹15 LPA"
          location="Tamil Nadu"
        />

        <RecommendationCard
          college="IIIT Hyderabad"
          rank={47}
          packageAvg="₹30 LPA"
          location="Hyderabad"
        />

      </div>

    </section>
  );
};

export default RecommendedColleges;