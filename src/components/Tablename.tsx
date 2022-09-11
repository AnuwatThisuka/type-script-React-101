import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Grid,
  GridItem,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
import "../App.css";

const Tablename = () => {
  return (
    <>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(5, 1fr)" }}
        gap="15px"
        p="15px"
      >
        <GridItem w="100%" h="12.5rem" bg="test" rounded="10px" shadow="lg">
          <Flex flexDirection="column" justifyContent="space-between" h="100%">
            <Flex px="10px" pt="10px" justifyContent="space-between">
              <Text>Anuwat</Text>
              <Text>Thisuka</Text>
            </Flex>
            <Flex px="10px" justifyContent="space-between">
              <Text>Anuwat</Text>
              <Text>Thisuka</Text>
            </Flex>
            <Flex px="10px" justifyContent="space-between">
              <Text>Anuwat</Text>
              <Text>Thisuka</Text>
            </Flex>
            <Flex px="10px" pb="10px" justifyContent="space-between">
              <Text>Anuwat</Text>
              <Text>Thisuka</Text>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem w="100%" h="12.5rem" bg="white" rounded="10px" shadow="lg" />
        <GridItem w="100%" h="12.5rem" bg="white" rounded="10px" shadow="lg" />
        <GridItem w="100%" h="12.5rem" bg="white" rounded="10px" shadow="lg" />
        <GridItem w="100%" h="12.5rem" bg="white" rounded="10px" shadow="lg" />
      </Grid>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};

export default Tablename;
