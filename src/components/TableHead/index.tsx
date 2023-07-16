import { TableHead as ThType } from "@/utils/types";
import { Th } from "@chakra-ui/react";

const TableHead = ({ isNumeric, label }: ThType) => (
  <Th isNumeric={isNumeric}>{label}</Th>
);

export default TableHead;

// TODO: add default props
