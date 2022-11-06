import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="3">
          <Text> João Paulo Cardoso</Text>
          <Text color="gray.300" fontSize="small">
            joaopaulo33573@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="João Paulo"
        src="https://github.com/joaopaulo33.png"
      />
    </Flex>
  );
}
