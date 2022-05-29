import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  Stack,
} from "@chakra-ui/react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import {
  BsGithub,
  BsDiscord,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";

export default function contact() {
  return (
    <Box margin={20} bg="">
      <Container
        maxW="full"
        marginBottom="20"
        marginTop="20"
        mt={0}
        centerContent
        overflow="hidden"
      >
        <Flex>
          <Box
            bg="#334155"
            ml={4}
            color="white"
            borderRadius="lg"
            boxShadow={"xl"}
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Stack align={"center"}>
                    <Heading>Contact me</Heading>
                    <Stack
                      py={{ base: 5, sm: 5, md: 8, lg: 10 }}
                      align="center"
                    >
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Stack
                          align={"center"}
                          direction={"row"}
                          px={{ base: 4, md: 0 }}
                        >
                          <MdEmail color="#1970F1" size="20px" />
                          <Text
                            fontSize={{ base: "md", md: "lg" }}
                            fontFamily={"poppins"}
                            fontWeight={"20px"}
                          >
                            sakkurthisashank@gmail.com
                          </Text>
                        </Stack>
                        <Stack
                          align={"center"}
                          direction={"row"}
                          px={{ base: 4, md: 0 }}
                        >
                          <MdLocationOn color="#1970F1" size="20px" />
                          <Text
                            fontSize={{ base: "md", md: "lg" }}
                            fontFamily={"poppins"}
                            fontWeight={"20px"}
                          >
                            SRM AP, Amaravathi, Andhra Pradesh
                          </Text>
                        </Stack>
                      </VStack>
                    </Stack>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start"
                    >
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsLinkedin size="28px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsGithub size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsDiscord size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsTwitter size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsInstagram size="28px" />}
                      />
                    </HStack>
                  </Stack>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
