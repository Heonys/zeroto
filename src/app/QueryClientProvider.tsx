"use client";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider as TanstackQeuryClientProvider,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 1000 * 60 * 60,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {},
  }),
});

const QueryClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <TanstackQeuryClientProvider client={queryClient}>
      {children}
    </TanstackQeuryClientProvider>
  );
};

export default QueryClientProvider;
