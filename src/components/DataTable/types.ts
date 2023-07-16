import { Header, Row } from "@/utils/types";

export default interface DataTableType {
  rows: Array<Row>;
  headers: Array<Header>;
  caption?: string;
  sortable?: boolean;
  pagination?: boolean;
}
