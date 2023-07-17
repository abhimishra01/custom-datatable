export default interface DataTableType<RowType, HeaderType> {
  rows: RowType[];
  headers: HeaderType[];
  caption?: string;
  sortable?: boolean;
  pagination?: boolean;
}
