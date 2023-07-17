import { TableHead as ThType } from "@/utils/types";
import { Th } from "@chakra-ui/react";

const TableHead = ({ isNumeric, label, onClick, id }: ThType) => (
  // @ts-ignore
  <Th isNumeric={isNumeric} onClick={() => onClick(id)}>
    {label}
  </Th>
);

export default TableHead;

// TODO: add default props
