import { Link } from "react-router-dom";

const actions = [
  {
    title: "Complete Profile",
    description: "Fill your academic details",
    path: "/profile",
    icon: "📝",
  },
  {
    title: "Search Colleges",
    description: "Find colleges based on filters",
    path: "/search",
    icon: "🔍",
  },
  {
    title: "Compare Colleges",
    description: "Compare multiple colleges",
    path: "/compare",
    icon: "⚖️",
  },
  {
    title: "AI Assistant",
    description: "Ask questions about admissions",
    path: "/chat",
    icon: "🤖",
  },
];

const QuickActions = () => {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {actions.map((action) => (
          <Link
            key={action.title}
            to={action.path}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition"
          >
            <div className="text-4xl">{action.icon}</div>

            <h3 className="text-xl font-semibold mt-4">
              {action.title}
            </h3>

            <p className="text-gray-600 mt-2">
              {action.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
    
  );
};

export default QuickActions;