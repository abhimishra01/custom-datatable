import { isEmpty, startCase } from "lodash";
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
import { Row } from "@/utils/types";

import DataTableType from "./types";

export default function DataTable<RowType, HeaderType>({
  rows,
  headers,
  caption,
}: DataTableType<RowType, HeaderType>) {
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
                {headers.map((column: HeaderType) => {
                  // @ts-expect-error
                  // TODO: add support for extended dynamic HeaderType which will inform TS this property is ought to be present
                  const { isNumeric, id, label } = column;

                  return (
                    <TableHead
                      key={id}
                      isNumeric={isNumeric}
                      label={startCase(label)}
                    />
                  );
                })}
              </Tr>
            </Thead>
            <Tbody>
              {/* @ts-ignore */}
              {rows.map((row: Row) => {
                const { id } = row;
                return (
                  <Tr key={id}>
                    {headers.map((column: HeaderType) => {
                      // @ts-expect-error
                      // TODO: add support for extended dynamic HeaderType which will inform TS this property is ought to be present
                      const { label, id, isNumeric } = column;
                      return (
                        <TableData
                          key={id}
                          isNumeric={isNumeric}
                          // @ts-ignore
                          label={row[label]}
                        />
                      );
                    })}
                  </Tr>
                );
              })}
            </Tbody>
          </>
        )}
      </Table>
    </TableContainer>
  );
}
