import { useState } from "react";
import AppLayout from "../../components/layout/AppLayout";
import RecommendationForm from "../../components/recommendations/RecommendationForm";
import RecommendationResults from "../../components/recommendations/RecommendationResults";
import { colleges } from "../../data/colleges";
import { getRecommendations } from "../../utils/recommendationEngine";

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState(colleges);

  const handleRecommend = (filters: any) => {
    const result = getRecommendations(filters);
    setRecommendations(result);
  };

  return (
    <AppLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-4xl font-bold">
            AI College Recommendation
          </h1>

          <p className="text-gray-600 mt-2">
            Find colleges based on your preferences.
          </p>
        </div>

        <RecommendationForm onRecommend={handleRecommend} />

        <RecommendationResults colleges={recommendations} />

      </div>
    </AppLayout>
  );
};

export default Recommendations;