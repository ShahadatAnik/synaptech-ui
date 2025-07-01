import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Toaster } from '@/components/ui/sonner';

const queryClient = new QueryClient();

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
			<Toaster richColors position={'top-center'} expand={true} />
		</QueryClientProvider>
	);
};

export default AppProvider;
