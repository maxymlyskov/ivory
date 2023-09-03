import React from "react";
import { Box, Heading, Text, VStack, Button } from "@chakra-ui/react";

interface ErrorPageProps {
  onRetry?: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ onRetry }) => {
  return (
    <VStack
      spacing={5}
      alignItems="center"
      height="100vh"
      justifyContent="center"
    >
      <Box borderRadius="lg" padding={4} bg="red.100" boxShadow="md">
        <Heading size="md">No Exercises Found</Heading>
        <Text>It seems we couldn't find any exercises for you.</Text>
      </Box>
      {onRetry && (
        <Button colorScheme="teal" onClick={onRetry}>
          Retry
        </Button>
      )}
    </VStack>
  );
};

export default ErrorPage;
