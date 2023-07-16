export interface TableHead {
  label: string;
  isNumeric?: boolean;
}

export interface Header extends TableHead {
  id: string;
}
