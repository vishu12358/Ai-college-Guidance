import { useState } from "react";
import { initialProfile } from "../../data/initialProfile";
import Sidebar from "../../components/layout/Sidebar";
import PersonalInfo from "../../components/profile/PersonalInfo";
import AcademicInfo from "../../components/profile/AcademicInfo";
import Preferences from "../../components/profile/Preferences";
import ProfileActions from "../../components/profile/ProfileActions";
const StudentProfile = () => {
  const [ profile, setProfile] = useState(initialProfile);
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  setProfile((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};

  return (
    <div className="flex">
      <Sidebar />

      <main className="ml-64 flex-1 bg-gray-100 min-h-screen p-8">

        <h1 className="text-4xl font-bold mb-2">
          Student Profile
        </h1>

        <p className="text-gray-600 mb-8">
          Complete your profile to get accurate AI college recommendations.
        </p>

        <form className="space-y-8">

          <PersonalInfo
            profile={profile}
            handleChange={handleChange}
           />

<AcademicInfo
  profile={profile}
  handleChange={handleChange}
/>

          <Preferences 
            profile={profile}
            setProfile={setProfile}
          />

          <ProfileActions />

        </form>

      </main>
    </div>
  );
};

export default StudentProfile;