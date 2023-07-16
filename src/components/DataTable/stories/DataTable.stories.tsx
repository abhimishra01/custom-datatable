import type { Meta, StoryObj } from "@storybook/react";

import { withChakraProvider } from "../../../pages/Provider"; // due to some reason, the alias wasn't working, TODO: checkout this issue later

import DataTable from "../index";

const meta: Meta<typeof DataTable> = {
  component: DataTable,
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Primary: Story = {
  render: () => withChakraProvider(DataTable, { caption: "Primary Table" }),
};
