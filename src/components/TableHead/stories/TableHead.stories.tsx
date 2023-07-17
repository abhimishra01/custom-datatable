import type { Meta, StoryObj } from "@storybook/react";

import { withChakraProvider } from "@/pages/Provider";
import withTable from "@/pages/Provider/withTable";
import { columns } from "@/utils/constants";

import TableHead from "../index";

// @ts-expect-error
const WithTableHead = (props: any) => withTable(TableHead, props);

const meta: Meta<typeof TableHead> = {
  component: TableHead,
};

export default meta;
type Story = StoryObj<typeof TableHead>;

export const Basic: Story = {
  render: () =>
    withChakraProvider(WithTableHead, {
      ...columns[0],
    }),
};
