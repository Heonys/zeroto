import { Flex } from "@radix-ui/themes";
import React from "react";

import AuthStatus from "./AuthStatus";
import NavBarForm from "./components/NavBarForm";

const Navbar = () => {
  return (
    <Flex justify="between" className="h-[5vh] " align="center">
      <NavBarForm />
      <AuthStatus />
    </Flex>
  );
};

export default Navbar;
