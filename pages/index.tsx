import { Divider, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import About from "../components/About";
import Hero from "../components/Hero";

import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <VStack>
        <VStack width={"full"} spacing={16}>
          <Navbar />
          <Hero />
        </VStack>
        <VStack width={"full"} height="full">
          <About />
        </VStack>
      </VStack>
    </div>
  );
};

export default Home;
