interface Excercise {
  id: "title" | "type" | "muscle" | "difficulty" | "equipment";
  placeholder: string;
  label: string;
}

export const excercies: Excercise[] = [
  {
    id: "title",
    placeholder: "Enter your title",
    label: "Title",
  },
  {
    id: "type",
    placeholder: "Enter your type",
    label: "Type",
  },
  {
    id: "muscle",
    placeholder: "Enter your muscle",
    label: "Muscle",
  },
  {
    id: "equipment",
    placeholder: "Enter your equipment",
    label: "Equipment",
  },
  {
    id: "difficulty",
    placeholder: "Enter your Difficulty",
    label: "Difficulty",
  },
];
