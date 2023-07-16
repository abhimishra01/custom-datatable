import { isEmpty } from "lodash";
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
} from "@chakra-ui/react";

import TableHead from "@/components/TableHead";

import DataTableType from "./types";

export default function DataTable({
  row,
  headers,
  caption,
  sortable,
  pagination,
}: DataTableType) {
  return (
    <TableContainer>
      <Table variant="simple">
        {isEmpty(headers) || !Array.isArray(headers) ? (
          <h2>No data found</h2>
        ) : (
          <>
            {caption && <TableCaption>{caption}</TableCaption>}
            <Thead>
              <Tr>
                {headers.map((column) => {
                  const { isNumeric, id, label } = column;
                  return (
                    <TableHead key={id} isNumeric={isNumeric} label={label} />
                  );
                })}
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
          </>
        )}
      </Table>
    </TableContainer>
  );
}
