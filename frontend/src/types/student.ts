export interface StudentProfile {
  // Personal Information
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  state: string;

  // Academic Information
  entranceExam: string;
  rank: string;
  percentile: string;
  category: string;
  class12Percentage: string;

  // Preferences
  preferredBranch: string;
  preferredState: string;
  budget: string;
  collegeType: string;
  hostelRequired: string;
}