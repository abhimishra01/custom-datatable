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

export interface Row {
  id: string | number;
  timestamp: string;
  purchaseId: number;
  name: string;
  mail: string;
  source: string;
  status: string;
  select: string;
}
