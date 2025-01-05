export type Project = {
  title: string;
  shortDescription?: string;
  description: string;
  status: "completed" | "in-progress" | "not-started";
  achivements: string[];
  stack?: {
    name: string;
    icon: string;
  }[];
  code: string;
  link: string;
};
