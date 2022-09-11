import { extendTheme } from "@chakra-ui/react";
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  semanticTokens: {
    colors: {
      error: "red.500",
      text: {
        default: "gray.900",
        _dark: "red.500",
      },
    },
  },
};
const theme = extendTheme({ config });

export default theme;
