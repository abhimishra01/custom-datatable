import { Td } from "@chakra-ui/react";

import { TableData as TDType } from "@/utils/types";

const TableData = ({ isNumeric, label }: TDType) => (
  <Td isNumeric={isNumeric}>{label}</Td>
);

export default TableData;
