import type { Meta, StoryObj } from "@storybook/react";

import DataTable from "../index";

const meta: Meta<typeof DataTable> = {
  component: DataTable,
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Primary: Story = {
  render: () => <DataTable />,
};

export const Secondary: Story = {
  render: () => <DataTable />,
};

export const Tertiary: Story = {
  render: () => <DataTable />,
};
