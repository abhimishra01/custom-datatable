import { useState } from "react";
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
  const [sortConfig, setSortConfig] = useState<{
    id: string | null;
    direction: string;
  }>({ id: null, direction: "asc" });

  const handleHeaderClick = (id: string) => {
    let direction = sortConfig.direction;

    if (
      (sortConfig.id === id || sortConfig.id === null) &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }

    if (
      (sortConfig.id === id || sortConfig.id === null) &&
      sortConfig.direction === "desc"
    ) {
      direction = "asc";
    }

    setSortConfig({ id, direction });

    const columnLabel = headers[id].label;
    rows.sort((a, b) => {
      if (sortConfig.id) {
        const valueA = a[columnLabel];
        const valueB = b[columnLabel];
        return sortConfig.direction === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }

      return 0;
    });
  };

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
                      id={id - 1}
                      isNumeric={isNumeric}
                      label={startCase(label)}
                      onClick={handleHeaderClick}
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
