import { CheckIcon } from "@chakra-ui/icons";
import {
  Text,
  Stack,
  Progress,
  Grid,
  GridItem,
  Box,
  Container,
  HStack,
  Icon,
  SimpleGrid,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { features } from "process";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import {
  DiGit,
  DiJava,
  DiJavascript1,
  DiMysql,
  DiPython,
  DiReact,
} from "react-icons/di";
import { SiDjango, SiExpress, SiPostgresql } from "react-icons/si";
const Tech = [
  {
    id: 1,
    title: "Java",
    icon: <DiJava size={30} />,
  },
  {
    id: 2,
    title: "Python",
    icon: <DiPython size={30} color={"#475569"} />,
  },
  {
    id: 3,
    title: "JavaScript",
    icon: <DiJavascript1 size={30} color={"#475569"} />,
  },
  {
    id: 4,
    title: "Postgresql",
    icon: <SiPostgresql size={30} color={"#475569"} />,
  },
  {
    id: 5,
    title: "MySQL",
    icon: <DiMysql size={30} color={"#475569"} />,
  },
  {
    id: 6,
    title: "Django",
    icon: <SiDjango size={20} color={"#475569"} />,
  },
  {
    id: 7,
    title: "Express Js",
    icon: <SiExpress size={30} color={"#475569"} />,
  },
  {
    id: 8,
    title: "Git",
    icon: <DiGit size={30} color={"#475569"} />,
  },
  {
    id: 9,
    title: "React",
    icon: <DiReact size={30} color={"#475569"} />,
  },
];
export default function TechStack() {
  return (
    <Stack
      align={"center"}
      py={16}
      width={{ xl: "container.xl" }}
      bgColor={"white"}
      marginBottom={{base:6,md:36}}
      marginTop={{md:24}}
      spacing={20}
    >
      <Heading
        as={"span"}
        position={"relative"}
        fontWeight={600}
        fontFamily={"poppins"}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        lineHeight={"110%"}
        color={"#0ea5e9"}
        textAlign={"center"}
      >
        💻 TechStack
      </Heading>
      <Stack maxW={"5xl"} mt={10}>
        <SimpleGrid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          gap={{ base: 12, md: 20 }}
          columns={{ base: 1, md: 2, lg: 4 }}
        >
          {Tech.map((Tech: { id: any; title: any; icon: any }) => (
            <HStack key={Tech.id} align="center">
              <Box>{Tech.icon}</Box>
              <Text
                fontSize={{ base: "sm", md: "lg" }}
                textAlign={"center"}
                maxW={"3xl"}
                fontFamily={"poppins"}
                fontWeight={"20px"}
                color={"#4b5563"}
              >
                {Tech.title}
              </Text>
            </HStack>
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
}
