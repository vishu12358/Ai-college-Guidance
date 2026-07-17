import type { StudentProfile } from "../../types/student";
import Input from "../ui/Input";
import Select from "../ui/Select";

type PersonalInfoProps = {
  profile: StudentProfile;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

const PersonalInfo = ({
  profile,
  handleChange,
}: PersonalInfoProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Personal Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <Input
          label="Full Name"
          name="fullName"
          value={profile.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
        />

        <Input
          label="Email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          type="email"
          placeholder="Enter your email"
        />

        <Input
          label="Phone Number"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
        />

        <Input
          label="Date of Birth"
          name="dateOfBirth"
          value={profile.dateOfBirth}
          onChange={handleChange}
          type="date"
        />

        <Select
          label="Gender"
          name="gender"
          value={profile.gender}
          onChange={handleChange}
          options={[
            "Male",
            "Female",
            "Other",
          ]}
        />

        <Select
          label="State"
          name="state"
          value={profile.state}
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

      </div>

    </div>
  );
};

export default PersonalInfo;