// Types
export type JobType = "Full-time" | "Part-time" | "Contract" | "Internship";

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: JobType;
  salary: string;
  postedAgo: string;
  remote: boolean;
  skills: string[];
};

export type ApplicationStatus =
  | "Applied"
  | "In review"
  | "Interview"
  | "Rejected";

export type Application = {
  id: string;
  title: string;
  company: string;
  status: ApplicationStatus;
  updatedAgo: string;
};

// Sample jobs
export const jobs: Job[] = [
  {
    id: "1",
    title: "React Native Developer",
    company: "Company 1",
    location: "Pune",
    type: "Full-time",
    salary: "12-18 LPA",
    postedAgo: "2d ago",
    remote: true,
    skills: ["React Native", "TypeScript", "Expo"],
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "Company 2",
    location: "Bengaluru",
    type: "Full-time",
    salary: "15-22 LPA",
    postedAgo: "4d ago",
    remote: false,
    skills: ["React", "Next.js", "Tailwind"],
  },
  {
    id: "3",
    title: "Android Developer",
    company: "Company 3",
    location: "Remote",
    type: "Contract",
    salary: "8-10 LPA",
    postedAgo: "6d ago",
    remote: true,
    skills: ["Kotlin", "Compose"],
  },
  {
    id: "4",
    title: "Full Stack Developer",
    company: "Company 4",
    location: "Mumbai",
    type: "Full-time",
    salary: "14-20 LPA",
    postedAgo: "1w ago",
    remote: false,
    skills: ["Node.js", "Postgres", "React"],
  },
  {
    id: "5",
    title: "Frontend Intern",
    company: "Company 5",
    location: "Remote",
    type: "Internship",
    salary: "25k per month",
    postedAgo: "1w ago",
    remote: true,
    skills: ["JavaScript", "CSS"],
  },
  {
    id: "6",
    title: "UI Developer",
    company: "Company 6",
    location: "Hyderabad",
    type: "Part-time",
    salary: "6-9 LPA",
    postedAgo: "2w ago",
    remote: false,
    skills: ["React", "Figma"],
  },
];

// Sample applications
export const applications: Application[] = [
  {
    id: "a1",
    title: "React Native Developer",
    company: "Company 1",
    status: "Interview",
    updatedAgo: "1d ago",
  },
  {
    id: "a2",
    title: "Frontend Developer",
    company: "Company 2",
    status: "In review",
    updatedAgo: "3d ago",
  },
  {
    id: "a3",
    title: "Full Stack Developer",
    company: "Company 4",
    status: "Applied",
    updatedAgo: "5d ago",
  },
  {
    id: "a4",
    title: "Android Developer",
    company: "Company 3",
    status: "Rejected",
    updatedAgo: "1w ago",
  },
];
