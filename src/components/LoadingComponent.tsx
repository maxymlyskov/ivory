import { Spinner, Text, VStack } from "@chakra-ui/react";
import React from "react";

const LoadingComponent: React.FC = () => {
  return (
    <VStack
      spacing={3}
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Spinner
        size="xl"
        speed="0.65s"
        color="blue.500"
        thickness="4px"
        emptyColor="gray.200"
      />
      <Text>Loading...</Text>
    </VStack>
  );
};

export default LoadingComponent;
