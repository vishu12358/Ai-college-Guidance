import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400">
              🎓 CollegeAI
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              AI-powered college recommendation platform helping
              students find the best colleges in India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/search">Colleges</Link></li>
              <li><Link to="/compare">Compare</Link></li>
              <li><Link to="/chat">AI Chat</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>AI Recommendation</li>
              <li>College Comparison</li>
              <li>ROI Calculator</li>
              <li>Placement Analytics</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <p className="text-gray-300">
              📧 vishujeetrathor@gmail.com
            </p>

            <p className="text-gray-300 mt-3">
              📍 India
            </p>
          </div>

        </div>

        <hr className="my-10 border-slate-700" />

        <p className="text-center text-gray-400">
          © 2026 CollegeAI. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;