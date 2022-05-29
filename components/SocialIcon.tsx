import { HStack, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import {
  BsLinkedin,
  BsInstagram,
  BsTwitter,
  BsDiscord,
  BsGithub,
} from "react-icons/bs";

const Socials = () => {
  return (
    <HStack spacing={{ base: 1, md: 3 }} px={5} alignItems="flex-start">
      <Link href={"https://www.linkedin.com/in/sakkurthi-sashank/"}>
        <a target="_blank">
          <IconButton
            aria-label="linkedin"
            _focus={{boxShadow: "none"}}
            variant="ghost"
            size="lg"
            isRound={true}
            icon={<BsLinkedin size="28px" />}
          />
        </a>
      </Link>
      <Link href={"https://www.instagram.com/sakkurthi_sashank/"}>
        <a target="_blank">
          <IconButton
          _focus={{boxShadow: "none"}}
            aria-label="Instagram"
            variant="ghost"
            size="lg"
            isRound={true}
            outline={"none"}
            icon={<BsInstagram size="28px" />}
          />
        </a>
      </Link>
      <Link href={"https://twitter.com/sashank_123"}>
        <a target="_blank">
          <IconButton
          _focus={{boxShadow: "none"}}
            aria-label="Twitter"
            variant="ghost"
            size="lg"
            isRound={true}
            icon={<BsTwitter size="28px" />}
          />
        </a>
      </Link>
      <Link href={"https://discord.com/login?redirect_to=%2Fchannels%2F%40me"}>
        <a target="_blank">
          <IconButton
          _focus={{boxShadow: "none"}}
            aria-label="discord"
            variant="ghost"
            size="lg"
            isRound={true}
            icon={<BsDiscord size="28px" />}
          />
        </a>
      </Link>
      <Link href={"https://github.com/sashanksakkurthi"}>
        <a target="_blank">
          <IconButton
          _focus={{boxShadow: "none"}}
            aria-label="github"
            variant="ghost"
            size="lg"
            isRound={true}
            icon={<BsGithub size="28px" />}
          />
        </a>
      </Link>
    </HStack>
  );
};

export default Socials;
