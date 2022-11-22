import { Container, Grid, GridItem, HStack, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Item from '../components/Item';

const Main: React.FC = () => {
	return (
		<Container maxW="container.lg">
			메인
			<Grid templateColumns="repeat(4, 1fr)" gap={5}>
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
			</Grid>
		</Container>
	);
};

export default Main;
