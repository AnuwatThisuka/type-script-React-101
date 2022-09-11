import { Button, useColorMode, Text } from "@chakra-ui/react";
import React from "react";
const Button1 = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      {" "}
      <header>
        <Button onClick={toggleColorMode}>
          <Text color="text">Click</Text>{" "}
          {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </header>
    </>
  );
};

export default Button1;
