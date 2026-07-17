import Sidebar from "../../components/layout/Sidebar";
import WelcomeCard from "../../components/dashboard/WelcomeCard";
import StatsCard from "../../components/dashboard/StatsCard";
import QuickActions from "../../components/dashboard/QuickActions";
import RecommendedColleges from "../../components/dashboard/RecommendedColleges";
import RecentSearches from "../../components/dashboard/RecentSearches";
import ProfileProgress from "../../components/dashboard/ProfileProgress";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />

      <main className="ml-64 flex-1 bg-gray-100 min-h-screen p-8">
        <WelcomeCard />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <StatsCard title="Recommended Colleges" value="120" />
          <StatsCard title="Saved Colleges" value="8" />
          <StatsCard title="Profile Completion" value="60%" />
          <StatsCard title="AI Chats" value="15" />
        </div>

        <QuickActions />

        <RecommendedColleges />

        <RecentSearches />

        <ProfileProgress />
      </main>
    </div>
  );
};

export default Dashboard;