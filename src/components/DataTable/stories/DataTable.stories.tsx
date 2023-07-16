import type { Meta, StoryObj } from "@storybook/react";

import { withChakraProvider } from "@/pages/Provider"; // due to some reason, the alias wasn't working, TODO: checkout this issue later

import DataTable from "../index";
import { Header, Row } from "@/utils/types";

const columns: Array<Header> = [
  {
    id: 1,
    label: "To convert",
  },
  {
    id: 2,
    label: "into",
  },
  {
    id: 2,
    label: "Centimeters",
    isNumeric: true,
  },
];

const rows: Array<Row> = [
  {
    id: 1,
    label: "To convert",
  },
  {
    id: 2,
    label: "into",
  },
  {
    id: 2,
    label: "Centimeters",
    isNumeric: true,
  },
];

const meta: Meta<typeof DataTable> = {
  component: DataTable,
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Primary: Story = {
  render: () =>
    // @ts-expect-error
    withChakraProvider(DataTable, {
      caption: "Primary Table",
      headers: columns,
      rows,
    }),
};
