import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Stack paddingTop={15} direction={{ base: "column", md: "row" }}>
      <Flex flex={1} align={"center"} justify={"center"}>
        <Image
          alt={"Hero Image"}
          borderRadius="full"
          objectFit={"cover"}
          src={"/HeroImage.png"}
          padding={16}
        />
      </Flex>
      <Flex flex={2} align={"center"} justify={"center"}>
        <Stack w={"full"} align={"center"} justify={"center"}>
          <Text
            fontWeight={"semibold"}
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            as={"span"}
            style={{ fontFamily: "Poppins", color: "#6d28d9" }}
            marginLeft={{ base: 5 }}
          >
            Hey 👋 I am Sashank Sakkurthi
          </Text>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Full Stack Web Developer & App Developer
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
}
