import { AspectRatio, Box, Button, Container, Grid, Image } from '@chakra-ui/react';
import axios, { AxiosRequestConfig } from 'axios';
import React from 'react';
import Item from '../components/Item';

const Main: React.FC = () => {
	const sendReq = () => {
		const jwtToken = localStorage.getItem('Authorization');
		const config: AxiosRequestConfig = { headers: { Authorization: jwtToken } };

		console.log(config);

		axios.get('http://localhost:8080/user/test', config);
	};

	return (
		<Container maxW="container.lg">
			<Box mb={5}>
				<Button onClick={sendReq}>요청보내기</Button>
			</Box>
			<AspectRatio maxW="container.lg" ratio={10 / 3} mb="10px">
				<Image src="https://media.bunjang.co.kr/images/nocrop/907207228_w2058.jpg" alt="naruto" objectFit="cover" />
			</AspectRatio>
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
