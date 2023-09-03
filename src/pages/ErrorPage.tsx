import React from "react";
import { Box, Heading, Text, VStack, Button, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router";

interface ErrorPageProps {
  onRetry?: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ onRetry }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

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
        <HStack>
          <Button colorScheme="red" onClick={handleGoBack}>
            Go back
          </Button>
          <Button colorScheme="teal" onClick={onRetry}>
            Retry
          </Button>
        </HStack>
      )}
    </VStack>
  );
};

export default ErrorPage;
