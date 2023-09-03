export interface Excercise {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
}

export interface ExcerciseFormProps {
  id: "name" | "type" | "muscle" | "difficulty";
  placeholder: string;
  label: string;
}
