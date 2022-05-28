import { VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <VStack spacing={20}>
      <Navbar />
      <Hero/>
      </VStack>
    </div>
  );
};

export default Home;
