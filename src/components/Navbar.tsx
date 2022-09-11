import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Input,
  Flex,
  Center,
  Avatar,
  AvatarBadge,
  FormLabel,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Divider,
} from "@chakra-ui/react";
import Example from "../components/Button";

const Navbar = () => {
  return (
    <>
      <Box>
        <Grid templateColumns="repeat(3, 1fr)">
          <GridItem w="100%" h="10">
            <Flex
              justifyContent="flex-start"
              alignItems="center"
              h="100%"
              px="10px"
            >
              <Text> Industrial 4.0</Text>
            </Flex>
          </GridItem>
          <GridItem w="100%" h="10">
            <Flex justifyContent="center" alignItems="center" h="100%">
              <Input placeholder="Basic usage" size="sm" rounded="5px" />
            </Flex>
          </GridItem>
          <GridItem w="100%" h="10">
            <Flex
              w="100%"
              h="100%"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Avatar w="auto" h="60%">
                <AvatarBadge boxSize="15px" bg="green.500" />
              </Avatar>
              <Box mx="20px">
                <Menu>
                  <MenuButton>Anuwat Thisuka</MenuButton>
                  <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Example />
            </Flex>
          </GridItem>
        </Grid>
        <Divider />
      </Box>
    </>
  );
};

export default Navbar;
