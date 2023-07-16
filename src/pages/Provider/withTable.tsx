import { Table } from "@chakra-ui/react";

/**
 * A HOC to wrap a component inside <Table></Table> from chakra-ui :- withTable
 * @param {React.ComponentType} Component
 * @returns {React.ComponentType} Component wrapped with Chakra Provider
 */
export default function withTable(Component: React.ComponentType, props?: any) {
  return (
    <Table>
      <Component {...props} />
    </Table>
  );
}
