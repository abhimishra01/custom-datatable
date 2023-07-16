import { Header } from "@/utils/types";

export default interface DataTableType {
  row?: [];
  headers: Array<Header>;
  caption?: string;
  sortable?: boolean;
  pagination?: boolean;
}
