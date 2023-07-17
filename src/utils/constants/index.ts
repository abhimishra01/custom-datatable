import { Row } from "@/utils/types";

export const columns = [
  {
    id: 1,
    label: "timestamp",
  },
  {
    id: 2,
    label: "purchaseId",
    isNumeric: true,
  },
  {
    id: 3,
    label: "mail",
  },
  {
    id: 4,
    label: "name",
  },
  {
    id: 5,
    label: "source",
  },
  {
    id: 6,
    label: "status",
  },
  {
    id: 7,
    label: "select",
  },
];

export const rows: Array<Row> = [
  {
    id: 1,
    timestamp: "35 minutes ago",
    purchaseId: 32907423,
    name: "XYZ",
    mail: "test@tryp.com",
    source: "India",
    status: "Success",
    select: "Select",
  },
  {
    id: 2,
    timestamp: "22 minutes ago",
    purchaseId: 12131,
    name: "ABC",
    mail: "abc@tryp.com",
    source: "India",
    status: "Failed",
    select: "Select",
  },
];
