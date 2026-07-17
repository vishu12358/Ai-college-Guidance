import Input from "../ui/Input";
import Select from "../ui/Select";
import type { StudentProfile } from "../../types/student";

type PreferencesProps = {
  profile: StudentProfile;
  setProfile: React.Dispatch<React.SetStateAction<StudentProfile>>;
};

const Preferences = ({
  profile,
  setProfile,
}: PreferencesProps) => {

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Preferences
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

<Select
  label="Preferred Branch"
  name="preferredBranch"
  value={profile.preferredBranch}
  onChange={handleChange}
  options={[
    "Computer Science",
    "Artificial Intelligence",
    "Information Technology",
    "Electronics & Communication",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
  ]}
/>
        <Select
  label="Preferred State"
  name="preferredState"
  value={profile.preferredState}
  onChange={handleChange}
  options={[
    "Delhi",
    "Uttar Pradesh",
    "Maharashtra",
    "Karnataka",
    "Tamil Nadu",
    "Rajasthan",
    "Gujarat",
    "Telangana",
  ]}
/>

<Input
  label="Maximum Budget (₹)"
  name="budget"
  value={profile.budget}
  onChange={handleChange}
  type="number"
  placeholder="Enter your budget"
/>

<Select
  label="College Type"
  name="collegeType"
  value={profile.collegeType}
  onChange={handleChange}
  options={[
    "Government",
    "Private",
    "Both",
  ]}
/>
<Select
  label="Hostel Required"
  name="hostelRequired"
  value={profile.hostelRequired}
  onChange={handleChange}
  options={[
    "Yes",
    "No",
  ]}
/>

      </div>

    </div>
  );
};

export default Preferences;