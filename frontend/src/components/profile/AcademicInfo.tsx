import type { StudentProfile } from "../../types/student";
import Input from "../ui/Input";
import Select from "../ui/Select";

type AcademicInfoProps = {
  profile: StudentProfile;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

const AcademicInfo = ({
  profile,
  handleChange,
}: AcademicInfoProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Academic Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <Select
          label="Entrance Exam"
          name="entranceExam"
          value={profile.entranceExam}
          onChange={handleChange}
          options={[
            "JEE Main",
            "JEE Advanced",
            "BITSAT",
            "VITEEE",
            "SRMJEEE",
            "COMEDK",
            "CUET",
          ]}
        />

        <Input
          label="Rank"
          name="rank"
          value={profile.rank}
          onChange={handleChange}
          type="number"
          placeholder="Enter your rank"
        />

        <Input
          label="Percentile"
          name="percentile"
          value={profile.percentile}
          onChange={handleChange}
          type="number"
          placeholder="Enter percentile"
        />

        <Select
          label="Category"
          name="category"
          value={profile.category}
          onChange={handleChange}
          options={[
            "General",
            "OBC",
            "EWS",
            "SC",
            "ST",
          ]}
        />

        <Input
          label="Class 12 Percentage"
          name="class12Percentage"
          value={profile.class12Percentage}
          onChange={handleChange}
          type="number"
          placeholder="Enter Class 12 Percentage"
        />

      </div>

    </div>
  );
};

export default AcademicInfo;