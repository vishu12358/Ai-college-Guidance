import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          🎓CampusIQ
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">

          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/search"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Colleges
          </Link>

          <Link
            to="/compare"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Compare
          </Link>

          <Link
            to="/chat"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            AI Chat
          </Link>

        </div>

        {/* Buttons */}
        <div className="flex gap-4">

          <Link
            to="/login"
            className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Sign Up
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;