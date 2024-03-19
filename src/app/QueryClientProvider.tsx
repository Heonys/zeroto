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
      refetchOnMount: false, // 컴포넌트가 마운트될 때 해당 쿼리를 다시 불러올지
      refetchOnWindowFocus: false, // 윈도우 포커스마다 불러올지
      retry: false, // 실패하면 자동으로 재시도할지
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
