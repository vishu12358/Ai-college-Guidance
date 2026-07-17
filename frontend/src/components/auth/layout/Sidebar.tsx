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
    path: "/student-profile",
    icon: User,
  },
  {
    name: "College Search",
    path: "/college-search",
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
    path: "/ai-assistant",
    icon: Bot,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg border-r">

      <div className="flex items-center gap-2 px-6 py-6 border-b">
        <GraduationCap className="text-blue-600" size={32} />
        <h1 className="text-xl font-bold text-blue-700">
          CollegeGuide AI
        </h1>
      </div>

      <nav className="mt-6 flex flex-col gap-2 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-100"
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