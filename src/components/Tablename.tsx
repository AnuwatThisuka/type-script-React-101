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
} from "@chakra-ui/react";
import "../App.css";

const Tablename = () => {
  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap="10px" p="10px">
        <GridItem w="100%" h="12.5rem" bg="blue.500" rounded="10px" />
        <GridItem w="100%" h="12.5rem" bg="blue.500" rounded="10px" />
        <GridItem w="100%" h="12.5rem" bg="blue.500" rounded="10px" />
        <GridItem w="100%" h="12.5rem" bg="blue.500" rounded="10px" />
        <GridItem w="100%" h="12.5rem" bg="blue.500" rounded="10px" />
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
