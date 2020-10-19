import React from "react";

import Navbar from "./../navbar/Navbar";
import AddCountry from "./form/AddCountry";
import AddCity from "./form/AddCity";
import RenderTable from "./table/RenderTable";
import { Flex, Center } from "./Styles";

const Home = () => {
  return (
    <>
      <Navbar />
      <Flex>
        <AddCountry />
        <AddCity />
      </Flex>

      <div>
        <Center>
          <RenderTable />
        </Center>
      </div>
    </>
  );
};

export default Home;