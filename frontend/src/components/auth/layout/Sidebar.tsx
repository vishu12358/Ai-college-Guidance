import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white fixed left-0 top-0">

      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-blue-400">
          🎓 CollegeAI
        </h1>
      </div>

      <nav className="mt-8">

        <Link
          to="/dashboard"
          className="block px-6 py-3 hover:bg-slate-800"
        >
          🏠 Dashboard
        </Link>

        <Link
          to="/profile"
          className="block px-6 py-3 hover:bg-slate-800"
        >
          👤 My Profile
        </Link>

        <Link
          to="/search"
          className="block px-6 py-3 hover:bg-slate-800"
        >
          🔍 Search Colleges
        </Link>

        <Link
          to="/compare"
          className="block px-6 py-3 hover:bg-slate-800"
        >
          ⚖️ Compare Colleges
        </Link>

        <Link
          to="/chat"
          className="block px-6 py-3 hover:bg-slate-800"
        >
          🤖 AI Assistant
        </Link>

      </nav>
    </aside>
  );
};

export default Sidebar;