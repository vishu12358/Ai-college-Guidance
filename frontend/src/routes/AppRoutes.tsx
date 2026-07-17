import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import StudentProfile from "../pages/StudentProfile/StudentProfile";
import CollegeSearch from "../pages/CollegeSearch/CollegeSearch";
import CollegeDetails from "../pages/CollegeDetails/CollegeDetails";
import Compare from "../pages/Compare/Compare";
import AIChat from "../pages/AIChat/AIChat";
import NotFound from "../pages/NotFound/NotFound";
import Recommendations from "../pages/Recommendations/Recommendations";
import SavedColleges from "../pages/SavedColleges/SavedColleges";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<StudentProfile />} />
        <Route path="/search" element={<CollegeSearch />} />
        <Route path="/college/:id" element={<CollegeDetails />} />

        {/* Compare Colleges */}
        <Route path="/compare-colleges" element={<Compare />} />

        {/* AI Chat */}
        <Route path="/chat" element={<AIChat />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
        <Route
  path="/recommendations"
  element={<Recommendations />}
/>

<Route
  path="/saved-colleges"
  element={<SavedColleges />}
/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;