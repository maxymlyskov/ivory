import { Badge, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Excercise } from "../entitites/excercises";

const Exercise: React.FC<Excercise> = ({
  name,
  type,
  muscle,
  equipment,
  difficulty,
  instructions,
}) => {
  return (
    <VStack
      spacing={5}
      borderWidth="1px"
      borderRadius="lg"
      padding={4}
      alignItems="start"
    >
      <Heading size="lg">{name}</Heading>
      <Text>
        <strong>Type:</strong> {type}
      </Text>
      <Text>
        <strong>Muscle:</strong> {muscle}
      </Text>
      <Text>
        <strong>Equipment:</strong> {equipment}
      </Text>
      <Badge colorScheme="purple">{difficulty}</Badge>
      <Text>
        <strong>Instructions:</strong>
      </Text>
      <Text>{instructions}</Text>
    </VStack>
  );
};

export default Exercise;
