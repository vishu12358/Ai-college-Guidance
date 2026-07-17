export interface College {
  id: number;
  collegeName: string;
  location: string;
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
    nirfRank: 2,
    fees: "₹2.4 Lakh",
    averagePackage: "₹22 LPA",
    collegeType: "Government",
  },
  {
    id: 2,
    collegeName: "IIT Bombay",
    location: "Mumbai",
    nirfRank: 3,
    fees: "₹2.3 Lakh",
    averagePackage: "₹24 LPA",
    collegeType: "Government",
  },
  {
    id: 3,
    collegeName: "NIT Trichy",
    location: "Tamil Nadu",
    nirfRank: 9,
    fees: "₹1.8 Lakh",
    averagePackage: "₹14 LPA",
    collegeType: "Government",
  },
  {
    id: 4,
    collegeName: "BITS Pilani",
    location: "Rajasthan",
    nirfRank: 20,
    fees: "₹5.5 Lakh",
    averagePackage: "₹18 LPA",
    collegeType: "Private",
  },
  {
    id: 5,
    collegeName: "VIT Vellore",
    location: "Tamil Nadu",
    nirfRank: 11,
    fees: "₹2.2 Lakh",
    averagePackage: "₹9 LPA",
    collegeType: "Private",
  },
];