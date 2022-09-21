import { Box, Flex, Text } from "@chakra-ui/layout";

const PlayerBar = () => {
  return (
    <Box height="100px" width="100vw" bg="gray.900" padding="10px">
      <Flex align="center">
        <Text fontSize="large">Song Name</Text>
        <Text fontSize="sm">Artist Name</Text>
      </Flex>
      <Box width='40%'> controls</Box>
    </Box>
  );
};

export default PlayerBar;
