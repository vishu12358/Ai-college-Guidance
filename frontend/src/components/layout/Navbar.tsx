import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-20">

        <h1 className="text-2xl font-bold text-blue-600">
          AI College
        </h1>

        <div className="flex gap-8">

          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link to="/search" className="hover:text-blue-600">
            Colleges
          </Link>

          <Link to="/login" className="hover:text-blue-600">
            Login
          </Link>

          <Link to="/register" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Sign Up
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;