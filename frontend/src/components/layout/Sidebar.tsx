import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  Search,
  GitCompare,
  Heart,
  Bot,
  Settings,
  GraduationCap,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Student Profile",
    path: "/profile",
    icon: User,
  },
  {
    name: "College Search",
    path: "/search",
    icon: Search,
  },
  {
    name: "Compare Colleges",
    path: "/compare-colleges",
    icon: GitCompare,
  },
  {
    name: "Saved Colleges",
    path: "/saved-colleges",
    icon: Heart,
  },
  {
    name: "AI Assistant",
    path: "/chat",
    icon: Bot,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
  {
  name: "Recommendations",
  path: "/recommendations",
  icon: Bot,
},
];

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-slate-900 text-white shadow-lg">
      <div className="flex items-center gap-3 px-6 py-6 border-b border-slate-700">
        <GraduationCap size={32} className="text-blue-400" />

        <h1 className="text-2xl font-bold">
          AI College Guide
        </h1>
      </div>

      <nav className="mt-6 px-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;