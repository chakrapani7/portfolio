import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Avatar,
  Divider,
} from "@chakra-ui/react";
import { Link, animateScroll as scroll } from "react-scroll";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  BsLinkedin,
  BsGithub,
  BsDiscord,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";
import Socials from "./SocialIcon";

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        w="100%"
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={2}
            alignItems={"center"}
            style={{ fontFamily: "Poppins" }}
          >
            <Avatar
              name="Sakkurthi Sashank"
              src="https://lh3.googleusercontent.com/a-/AOh14Gi-niaolq7-Wpc97EAD77WzhMpgcyHqeUD1q4Xdig=s360-p-rw-no"
            />
            <Box fontSize={{ base: "md", lg: "lg", xl: "xl" }}>
              Sakkurthi Sashank
            </Box>
          </HStack>
          <HStack
            as={"nav"}
            spacing={10}
            fontFamily="Poppins"
            fontWeight="normal"
            fontSize={15}
            display={{ base: "none", md: "flex" }}
          >
            <Link
              px={2}
              py={1}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              href={"#"}
            >
              About
            </Link>
            <Link
              px={2}
              py={1}
              activeClass="active"
              to="techstack"
              spy={true}
              smooth={true}
              duration={500}
              href={"#"}
            >
              TechStack
            </Link>
            <Link
              px={2}
              py={1}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              href={"#"}
            >
              Contact Me
            </Link>
          </HStack>
          <HStack
            as={"nav"}
            spacing={10}
            fontFamily="Poppins"
            fontWeight="normal"
            fontSize={15}
            display={{ base: "none", md: "flex" }}
          >
            <Socials />
          </HStack>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            display={{ md: "none" }}
            fontFamily="Poppins"
            fontWeight="normal"
            fontSize={15}
          >
            <Stack as={"nav"} spacing={4}>
              <Link
                px={2}
                py={1}
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                href={"#"}
              >
                About
              </Link>
              <Link
                px={2}
                py={1}
                activeClass="active"
                to="techstack"
                spy={true}
                smooth={true}
                duration={500}
                href={"#"}
              >
                TechStack
              </Link>
              <Link
                px={2}
                py={1}
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                href={"#"}
              >
                Contact Me
              </Link>
              <Socials />
            </Stack>
          </Box>
        ) : null}
        <Divider variant={"solid"} />
      </Box>
    </>
  );
}
