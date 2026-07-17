export interface College {
  id: number;
  collegeName: string;
  location: string;
  state: string;
  branch: string;
  entranceExam: string;
  nirfRank: number;
  fees: string;
  averagePackage: string;
  collegeType: string;
}

export const colleges: College[] = [
  {
    id: 1,
    collegeName: "IIT Delhi",
    location: "New Delhi",
    state: "Delhi",
    branch: "Computer Science",
    entranceExam: "JEE Advanced",
    nirfRank: 2,
    fees: "₹2,50,000",
    averagePackage: "₹22 LPA",
    collegeType: "Government",
  },
  {
    id: 2,
    collegeName: "IIT Bombay",
    location: "Mumbai",
    state: "Maharashtra",
    branch: "Computer Science",
    entranceExam: "JEE Advanced",
    nirfRank: 3,
    fees: "₹2,30,000",
    averagePackage: "₹24 LPA",
    collegeType: "Government",
  },
  {
    id: 3,
    collegeName: "NIT Trichy",
    location: "Tiruchirappalli",
    state: "Tamil Nadu",
    branch: "Information Technology",
    entranceExam: "JEE Main",
    nirfRank: 9,
    fees: "₹1,80,000",
    averagePackage: "₹14 LPA",
    collegeType: "Government",
  },
  {
    id: 4,
    collegeName: "BITS Pilani",
    location: "Pilani",
    state: "Rajasthan",
    branch: "Computer Science",
    entranceExam: "BITSAT",
    nirfRank: 20,
    fees: "₹5,50,000",
    averagePackage: "₹18 LPA",
    collegeType: "Private",
  },
  {
    id: 5,
    collegeName: "VIT Vellore",
    location: "Vellore",
    state: "Tamil Nadu",
    branch: "Computer Science",
    entranceExam: "VITEEE",
    nirfRank: 11,
    fees: "₹2,10,000",
    averagePackage: "₹9 LPA",
    collegeType: "Private",
  },
  {
    id: 6,
    collegeName: "IIIT Hyderabad",
    location: "Hyderabad",
    state: "Telangana",
    branch: "Computer Science",
    entranceExam: "JEE Main",
    nirfRank: 47,
    fees: "₹3,50,000",
    averagePackage: "₹30 LPA",
    collegeType: "Government",
  },
  {
    id: 7,
    collegeName: "Delhi Technological University",
    location: "New Delhi",
    state: "Delhi",
    branch: "Mechanical Engineering",
    entranceExam: "JEE Main",
    nirfRank: 29,
    fees: "₹2,00,000",
    averagePackage: "₹13 LPA",
    collegeType: "Government",
  },
  {
    id: 8,
    collegeName: "SRM Institute of Science and Technology",
    location: "Chennai",
    state: "Tamil Nadu",
    branch: "Artificial Intelligence",
    entranceExam: "SRMJEEE",
    nirfRank: 13,
    fees: "₹4,00,000",
    averagePackage: "₹8 LPA",
    collegeType: "Private",
  }
];