import type { StudentProfile } from "../types/student";

export const initialProfile: StudentProfile = {
  // Personal
  fullName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  gender: "",
  state: "",

  // Academic
  entranceExam: "",
  rank: "",
  percentile: "",
  category: "",
  class12Percentage: "",

  // Preferences
  preferredBranch: "",
  preferredState: "",
  budget: "",
  collegeType: "",
  hostelRequired: "",
};