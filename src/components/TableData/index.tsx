import { Td } from "@chakra-ui/react";

const TableData = ({ isNumeric, label }) => (
  <Td isNumeric={isNumeric}>{label}</Td>
);

export default TableData;
