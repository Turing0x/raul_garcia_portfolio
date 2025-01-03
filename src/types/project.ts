export type Project = {
  title: string;
  description: string;
  status: "completed" | "in-progress" | "not-started";
  achivements: string[];
  stack: string;
  link: string;
  linkText: string;
};
