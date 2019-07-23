import React, {Fragment} from "react";
import { Flex, Box } from "rebass";
import { Base } from "./Base";
import { Header } from "../modules/Header";
import { Footer } from "../sections/Footer";
import { Sidebar as SidebarSection } from "../modules/Sidebar";


export type props = {
  children: React.ReactNode;
};

export const Sidebar = ({ children }: props) => (<Fragment>
  <Base>
    <Flex style={{ minHeight: "100vh" }} flexDirection="column">
      <Header/>
      <Flex flex={1}>
        <Box bg="#aaa" width={[0, 180]} height="100%">
          <SidebarSection/>
        </Box>
        <Box width="100%">
          {children}
        </Box>
      </Flex>
      <Footer/>
    </Flex>
  </Base>
</Fragment>);
