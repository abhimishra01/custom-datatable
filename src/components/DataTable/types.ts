export default interface DataTableType {
  row?: [];
  headers: Array<Header>;
  caption?: string;
  sortable?: boolean;
  pagination?: boolean;
}
export interface Header {
  id: string;
  label: string;
  isNumeric?: boolean;
}
