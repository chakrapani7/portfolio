import {
  VStack,
  Stack,
  Text,
  useColorModeValue,
  Avatar,
} from "@chakra-ui/react";
import Image from "next/image";
import SrmApLogo from "../public/SrmApLogo.png";

export default function About() {
  return (
    <VStack py={16} px={8} boxShadow={"xl"} rounded={"xl"}>
      <Text
        as={"span"}
        position={"relative"}
        fontWeight={600}
        fontFamily={"poppins"}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        lineHeight={"110%"}
        color={"#475569"}
        _after={{
          content: "''",
          width: "full",
          height: "5%",
          position: "absolute",
          bottom: 1,
          left: 0,
          bg: "red.400",
          zIndex: -1,
          borderRadius: 10,
        }}
      >
        About Me
      </Text>
      <Stack
        bg={useColorModeValue("white", "gray.800")}
        py={16}
        px={8}
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
            Web Development
          </span>{" "}
          and{" "}
          <span style={{ color: "#0ea5e9", fontWeight: "bold" }}>
            App Development
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
        _after={{
          content: "''",
          width: "full",
          height: "5%",
          position: "absolute",
          bottom: 1,
          left: 0,
          bg: "red.400",
          zIndex: -1,
          borderRadius: 10,
        }}
      >
        Education
      </Text>
      <Stack
        bg={useColorModeValue("white", "gray.800")}
        py={16}
        px={8}
        spacing={{ base: 8, md: 10 }}
        align={"center"}
        direction={"row"}
      >
        <Image src={SrmApLogo}/>
        <Text
          fontSize={{ base: "md", md: "xl" }}
          textAlign={"center"}
          maxW={"3xl"}
          fontFamily={"poppins"}
          fontWeight={"20px"}
          color={"#4b5563"}
        >
          CS Undergrad At SRM UNIVERSITY AP
        </Text>
      </Stack>
    </VStack>
  );
}
