import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Sara Martins</Text>
          <Text color="gray.300" fontSize="small">
            sariinha.martins@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Sara Martins"
        src="https://github.com/saramartinss.png"
      />
    </Flex>
  );
}
