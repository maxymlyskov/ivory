import { Button } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";
import { excercies } from "../data/excercies";
import { difficulty, muscles, types } from "../data/formSchemaValues";
import { objectToQueryString } from "../utils";
import ExcerciseFormControl from "./ExcerciseFormControl";

const schema = z.object({
  name: z.string(),
  type: z.enum([...types, ""]),
  muscle: z.enum([...muscles, ""]),
  difficulty: z.enum([...difficulty, ""]),
});

export type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();

  const watchedValues = watch();

  const allInputsAreEmpty = () => {
    return Object.values(watchedValues).every((value) => !value);
  };

  const onSubmit = (data: FieldValues) =>
    navigate(`excercises${objectToQueryString(data)}`);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {excercies.map((excercise) => (
        <ExcerciseFormControl
          key={excercise.id}
          excercise={excercise}
          isError={!!errors[excercise.id]}
          errorMessage={errors[excercise.id]?.message}
          register={register}
        />
      ))}
      <Button
        mt={10}
        colorScheme="teal"
        type="submit"
        isDisabled={allInputsAreEmpty()}
      >
        Search
      </Button>
    </form>
  );
};

export default Form;
