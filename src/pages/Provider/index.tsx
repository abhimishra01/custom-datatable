"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

/**
 * A Chakra UI Provider component
 * @param {{React.ReactNode}} {children}
 * @returns {React.ComponentType}
 */
export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
}

/**
 * A HOC for providing chakra ui utilities :- withChakraProvider
 * @param {React.ComponentType} Component
 * @returns {React.ComponentType} Component wrapped with Chakra Provider
 */
export const withChakraProvider = (
  Component: React.ComponentType,
  props: any
) => (
  <Provider>
    <Component {...props} />
  </Provider>
);
