import type { Meta, StoryObj } from "@storybook/react";

import { withChakraProvider } from "@/pages/Provider";
import { columns, rows } from "@/utils/constants";

import DataTable from "../index";
import { Header, Row } from "@/utils/types";

const meta: Meta<typeof DataTable> = {
  component: DataTable,
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Primary: Story = {
  render: () =>
    // @ts-expect-error
    withChakraProvider(DataTable<Row, Header>, {
      rows,
      caption: "Primary Table",
      headers: columns,
    }),
};

export const WithoutCaption: Story = {
  render: () =>
    // @ts-expect-error
    withChakraProvider(DataTable<Row, Header>, {
      rows,
      headers: columns,
    }),
};
