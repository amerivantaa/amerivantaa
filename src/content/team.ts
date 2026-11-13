import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import team5 from "@/assets/team-5.jpg";
import team6 from "@/assets/team-6.jpg";
import team7 from "@/assets/team-7.jpg";
import team8 from "@/assets/team-8.jpg";

/**
 * PLACEHOLDER team profiles.
 * Replace `name`, `bio`, `linkedin` and `photo` with real, verified details.
 * Photos are illustrative placeholders, not actual staff.
 */
export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string;
  /** Leave empty until a verified LinkedIn URL is available. */
  linkedin: string;
};

export const team: TeamMember[] = [
  {
    name: "Team Member Name",
    role: "Leadership",
    bio: "Sets company direction and stays close to every client partnership.",
    photo: team1,
    linkedin: "",
  },
  {
    name: "Team Member Name",
    role: "Technology Director",
    bio: "Guides engineering standards, architecture choices and delivery quality.",
    photo: team2,
    linkedin: "",
  },
  {
    name: "Team Member Name",
    role: "Solutions Architect",
    bio: "Turns business requirements into scalable, secure system designs.",
    photo: team3,
    linkedin: "",
  },
  {
    name: "Team Member Name",
    role: "Software Engineer",
    bio: "Builds reliable, well-tested features across the product stack.",
    photo: team4,
    linkedin: "",
  },
  {
    name: "Team Member Name",
    role: "Cloud & DevOps Engineer",
    bio: "Designs cloud infrastructure and the pipelines that ship it safely.",
    photo: team5,
    linkedin: "",
  },
  {
    name: "Team Member Name",
    role: "AI Engineer",
    bio: "Applies machine learning and automation to practical business problems.",
    photo: team6,
    linkedin: "",
  },
  {
    name: "Team Member Name",
    role: "QA Engineer",
    bio: "Protects every release with thoughtful manual and automated testing.",
    photo: team7,
    linkedin: "",
  },
  {
    name: "Team Member Name",
    role: "Business Development",
    bio: "Helps organizations find the right engagement model and team fit.",
    photo: team8,
    linkedin: "",
  },
];
