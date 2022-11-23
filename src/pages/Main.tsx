import { Button, Container, Grid, Spacer } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../components/Item';

const Main: React.FC = () => {
	const navigate = useNavigate();
	const toSub = () => {
		navigate('/sub');
	};

	const sendReq = () => {
		axios.get('http://localhost:8080/user');
	};

	return (
		<Container maxW="container.lg">
			메인
			<Button mb={30} onClick={toSub}>
				서브창으로
			</Button>
			<Button onClick={sendReq}>요청보내기</Button>
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
