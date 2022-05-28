import { Divider, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Hero from "../components/Hero";

import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <VStack width={"full"} spacing={16}>
        <Navbar />
        <Hero />
        <Divider variant={"solid"} />
      </VStack>
      <VStack>
        
      </VStack>
    </div>
  );
};

export default Home;
