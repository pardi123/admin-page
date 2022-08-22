import { render as rtlRender, RenderOptions } from '@testing-library/react';
import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';

const queryClient = new QueryClient();

const RouterProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>{children}</Router>;
    </QueryClientProvider>
  );
};

export const renderWithRouter = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => rtlRender(ui, { wrapper: RouterProviders, ...options });

export * from '@testing-library/react';
