import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import MainRouter from './MainRouter';

const queryClient = new QueryClient();

const App: React.FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider>
				<MainRouter />
			</ChakraProvider>
		</QueryClientProvider>
	);
};

export default App;
