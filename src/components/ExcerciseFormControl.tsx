import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FormData } from "./Form";
import { FC } from "react";
import { ExcerciseFormProps } from "../entitites/excercises";
import { UseFormRegister } from "react-hook-form";

interface Props {
  excercise: ExcerciseFormProps;
  isError: boolean;
  register: UseFormRegister<FormData>;
  errorMessage?: string;
}

const ExcerciseFormControl: FC<Props> = ({
  excercise,
  isError,
  register,
  errorMessage,
}) => {
  return (
    <FormControl key={excercise.id} isInvalid={isError}>
      <FormLabel htmlFor={excercise.id}>{excercise.label}</FormLabel>
      <Input
        id={excercise.id}
        placeholder={excercise.placeholder}
        {...register(excercise.id)}
      />
      <FormErrorMessage>{errorMessage || "Error occured!"}</FormErrorMessage>
    </FormControl>
  );
};

export default ExcerciseFormControl;
