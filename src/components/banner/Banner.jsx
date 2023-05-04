import Image from "next/image";
import { Link } from "@chakra-ui/react";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex
    flexWrap="wrap"
    justifyContent="center"
    alignItems="center"
    margin="60"
    gap="10"
  >
    <Image src={imageUrl} width={500} height={300} alt="home image" priority />
    <Box width="400px" p="5" display="flex" flexDirection="column" gap="10">
      <Box
        width="400px"
        padding="20px"
        display="flex"
        flexDirection="column"
        gap="8px"
      >
        <Text color="gray.500" fontSize="2em" fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize="2xl" fontWeight="bold">
          {title1}

          {title2}
        </Text>
        <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
          {desc1}
          <br />
          {desc2}
        </Text>
        <Button
          width="150px"
          bg="rgb(150, 206, 255)"
          borderRadius="5"
          fontSize="xl"
          border="0"
          padding="10"
          cursor="pointer"
        >
          <Link textDecoration="none" bg="rgb(150, 206, 255)" href={linkName}>
            {buttonText}
          </Link>
        </Button>
      </Box>
    </Box>
  </Flex>
);

export default Banner;
