export interface TableHead {
  label: string;
  isNumeric?: boolean;
}

export interface Header extends TableHead {
  id: string;
}

export interface TableRow {
  label: string;
  isNumeric?: boolean;
}

export interface Row extends TableRow {
  id: string;
}
