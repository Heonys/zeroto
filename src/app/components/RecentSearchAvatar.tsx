import { Avatar, Box, Flex, Text } from "@radix-ui/themes";

const RecentSearchAvatar = () => {
  return (
    <Flex
      gap="3"
      align="center"
      className="border-2 border-gray-200 rounded-full bg-white px-3 py-1"
    >
      <Avatar
        size="1"
        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
        radius="full"
        fallback="T"
      />
      <Box>
        <Text as="div" size="1" weight="bold">
          Teodros
        </Text>
      </Box>
    </Flex>
  );
};

export default RecentSearchAvatar;
