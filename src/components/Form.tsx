import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { excercies } from "../data/excercies";

const schema = z.object({
  title: z.string().min(3),
  type: z.string(),
  muscle: z.string(),
  equipment: z.string(),
  difficulty: z.string(),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {excercies.map((excercise) => (
        <FormControl isInvalid={!!errors[excercise.id]}>
          <FormLabel htmlFor={excercise.id}>{excercise.label}</FormLabel>
          <Input
            id={excercise.id}
            {...register(excercise.id)}
            placeholder={excercise.placeholder}
          />
          <FormErrorMessage>{errors[excercise.id]?.message}</FormErrorMessage>
        </FormControl>
      ))}
      <Button mt={10} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
