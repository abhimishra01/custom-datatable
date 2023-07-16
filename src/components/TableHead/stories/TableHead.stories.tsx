import type { Meta, StoryObj } from "@storybook/react";

import { withChakraProvider } from "@/pages/Provider";
import withTable from "@/pages/Provider/withTable";

import TableHead from "../index";

// @ts-expect-error
const WithTableHead = (props: any) => withTable(TableHead, props);

const column = {
  id: 1,
  label: "Where to go?",
};

const meta: Meta<typeof TableHead> = {
  component: TableHead,
};

export default meta;
type Story = StoryObj<typeof TableHead>;

export const Basic: Story = {
  render: () =>
    withChakraProvider(WithTableHead, {
      ...column,
    }),
};
