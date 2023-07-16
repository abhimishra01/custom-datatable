import type { Meta, StoryObj } from "@storybook/react";

import { withChakraProvider } from "@/pages/Provider";
import withTable from "@/pages/Provider/withTable";
import { rows } from "@/utils/constants";

import TableData from "../index";

// @ts-expect-error
const WithTableData = (props: any) => withTable(TableData, props);

const meta: Meta<typeof TableData> = {
  component: TableData,
};

export default meta;
type Story = StoryObj<typeof TableData>;

export const Basic: Story = {
  render: () =>
    withChakraProvider(WithTableData, {
      ...rows[0],
    }),
};
