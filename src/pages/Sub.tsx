import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const processLogin = async () => {
	const loginRequest = await axios.post('http://localhost:8080/login', {
		userId: 'koorung',
		password: 'test',
	});

	const responseHeaders = loginRequest.headers;

	if (typeof responseHeaders.authorization === 'string') {
		const jwtToken = responseHeaders.authorization;
		localStorage.setItem('Authorization', jwtToken);
	}
};

const Sub: React.FC = () => {
	const navigate = useNavigate();
	const toBack = () => {
		const confirm = window.confirm('뒤로가시겠습니까?');
		if (confirm) {
			navigate(-1);
		}
	};

	return (
		<Container maxW="container.lg">
			<Heading>로그인</Heading>
			<VStack mt={10} gap={5}>
				<Input placeholder="Enter your id" />
				<Input placeholder="Enter your password" />
				<Button onClick={processLogin}>로그인 버튼</Button>
				<Button onClick={toBack}>뒤로가기 버튼</Button>
			</VStack>
		</Container>
	);
};

export default Sub;
