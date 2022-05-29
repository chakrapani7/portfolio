import { VStack, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import SrmApLogo from "../public/SrmApLogo.png";
import NextTechLabLogo from "../public/NextTechLabLogo.png";
export default function About() {
  return (
    <VStack
      py={{base:0,md:16}}
      width={{ xl: "container.xl" }}
      px={4}
      rounded={"xl"}
      bgColor={"white"}
      marginBottom={{base:0,md:20}}
      marginTop="24"
    >
      <Text
        as={"span"}
        position={"relative"}
        fontWeight={600}
        fontFamily={"poppins"}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        lineHeight={"110%"}
        color={"#475569"}
        border="1px"
        rounded={"xl"}
        borderColor="#d1d5db"
        padding="2"
      >
        🙋‍♂️ About Me
      </Text>
      <Stack
        bg={useColorModeValue("white", "gray.800")}
        py={16}
        // px={8}
        spacing={{ base: 8, md: 10 }}
        align={"center"}
        direction={"column"}
      >
        <Text
          fontSize={{ base: "md", md: "xl" }}
          textAlign={"center"}
          maxW={"3xl"}
          fontFamily={"poppins"}
          fontWeight={"20px"}
          color={"#4b5563"}
        >
          Me a self-taught programmer who works Primarily on{" "}
          <span style={{ color: "#0ea5e9", fontWeight: "bold" }}>
            WebDevelopment
          </span>{" "}
          and{" "}
          <span style={{ color: "#0ea5e9", fontWeight: "bold" }}>
            AppDevelopment
          </span>{" "}
          With A Passion for designing and Creating Amazing Products. As
          self-taught it is hard to find the resources and have a Good learning
          curve but that makes me stand out from others. which makes me a more
          researcher and thoughtful person to Solve any kind of Problem that
          encounters lastly, open-source allows me to learn resources and use
          open source projects, love to be Open Source Contributor
        </Text>
      </Stack>
      <Text
        as={"span"}
        position={"relative"}
        fontWeight={600}
        fontFamily={"poppins"}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        lineHeight={"110%"}
        color={"#475569"}
        border="1px"
        rounded={"xl"}
        borderColor="#d1d5db"
        padding="2"
      >
        ‍🎓 Education
      </Text>
      <Stack
        bg={useColorModeValue("white", "gray.800")}
        py={16}
        align={"center"}
        direction={"row"}
        px={{ base: 4, md: 0 }}
      >
        <Image src={SrmApLogo} height={50} width={50} />
        <Text
          fontSize={{ base: "md", md: "lg" }}
          fontFamily={"poppins"}
          fontWeight={"20px"}
          color={"#4b5563"}
        >
          CS Undergrad At SRM UNIVERSITY AP
        </Text>
      </Stack>
      <Text
        as={"span"}
        position={"relative"}
        fontWeight={600}
        fontFamily={"poppins"}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        lineHeight={"110%"}
        color={"#475569"}
        border="1px"
        rounded={"xl"}
        borderColor="#d1d5db"
        padding="2"
      >
        💼 Experience
      </Text>
      <Stack
        bg={useColorModeValue("white", "gray.800")}
        py={16}
        align={"center"}
        direction={"row"}
        px={{ base: 4, md: 0 }}
      >
        <Image src={NextTechLabLogo} height={40} width={45} />
        <Text
          fontSize={{ base: "md", md: "lg" }}
          fontFamily={"poppins"}
          fontWeight={"20px"}
          color={"#4b5563"}
        >
          Web Research Associate NextTech Lab
        </Text>
      </Stack>
    </VStack>
  );
}
