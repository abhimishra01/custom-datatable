import type { Meta, StoryObj } from "@storybook/react";

import { withChakraProvider } from "@/pages/Provider";
import withTable from "@/pages/Provider/withTable";

import TableData from "../index";

// @ts-expect-error
const WithTableData = (props: any) => withTable(TableData, props);

const row = {
  id: 1,
  label: "Gangtok Trip!",
};

const meta: Meta<typeof TableData> = {
  component: TableData,
};

export default meta;
type Story = StoryObj<typeof TableData>;

export const Basic: Story = {
  render: () =>
    withChakraProvider(WithTableData, {
      ...row,
    }),
};
