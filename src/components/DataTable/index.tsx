import { isEmpty } from "lodash";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import TableHead from "@/components/TableHead";
import TableData from "@/components/TableData";

import DataTableType from "./types";
import { Header, Row } from "@/utils/types";

export default function DataTable({
  rows,
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
                {headers.map((column: Header) => {
                  const { isNumeric, id, label } = column;
                  return (
                    <TableHead key={id} isNumeric={isNumeric} label={label} />
                  );
                })}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                {rows.map((row: Row) => {
                  const { isNumeric, id, label } = row;
                  return (
                    <TableData key={id} isNumeric={isNumeric} label={label} />
                  );
                })}
              </Tr>
            </Tbody>
          </>
        )}
      </Table>
    </TableContainer>
  );
}
