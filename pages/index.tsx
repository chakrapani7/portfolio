import { Divider, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";

import Navbar from "../components/Navbar";
import TechStack from "../components/TechStack";

const Home: NextPage = () => {
  return (
    <div>
      <VStack >
        <VStack width={"full"} spacing={16}>
          <Navbar />
          <Hero />
        </VStack>
        <VStack  width={"full"} height="full" bgColor={{md:"#f3f4f6"}} spacing={16}>
          <About />
        </VStack>
        <VStack>
          <TechStack/>
        </VStack>
        <VStack width={"full"} height="full" spacing={16} bgColor="#f5f3ff">
         <Contact/>
        </VStack>
      </VStack>
    </div>
  );
};

export default Home;
