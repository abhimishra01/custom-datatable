export interface TableHead {
  label: string | number;
  isNumeric?: boolean;
}

export interface Header extends TableHead {
  id: string | number;
}

export interface TableData {
  label: string | number;
  isNumeric?: boolean;
}

export interface Row extends TableData {
  id: string | number;
}
