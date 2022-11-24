import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Box, Button, Checkbox, Container, Heading, Input, InputGroup, InputRightElement, Link, Spacer, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
	const [userId, setUserId] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const changeUserId = (input: string) => {
		setUserId(input);
	};

	const changePassword = (input: string) => {
		setPassword(input);
	};

	const processLogin = async () => {
		const loginRequest = await axios.post('http://localhost:8080/login', {
			userId,
			password,
		});

		const responseHeaders = loginRequest.headers;

		if (typeof responseHeaders.authorization === 'string') {
			const jwtToken = responseHeaders.authorization;
			localStorage.setItem('Authorization', jwtToken);
		}
	};

	const navigate = useNavigate();
	const toBack = () => {
		const confirm = window.confirm('뒤로가시겠습니까?');
		if (confirm) {
			navigate(-1);
		}
	};

	return (
		<Container maxW="container.lg" centerContent>
			<Heading>Login</Heading>
			<Box mt={10}>
				<Stack spacing={3}>
					<Input
						placeholder="아이디를 입력하세요"
						onChange={e => {
							changeUserId(e.currentTarget.value);
						}}
						height={50}
						width={350}
					/>
					<PasswordInput changePassword={changePassword} />
					<Button onClick={processLogin}>로그인</Button>
					<Button onClick={toBack}>뒤로가기</Button>
				</Stack>

				<Box mt="50px" display="flex">
					<Checkbox size="md" colorScheme="green" defaultChecked>
						자동 로그인
					</Checkbox>
					<Spacer />
					<Text color="white">아이디 찾기 | 비밀번호 찾기</Text>
				</Box>

				<Box mt="100px" fontSize={20} textAlign="center">
					<Link as={NavLink} to="/users/new">
						아직 Kooketplace의 회원이 아니신가요?
					</Link>
				</Box>

				<Box h={300} />
			</Box>
		</Container>
	);
};

interface IPasswordInputProps {
	changePassword: (input: string) => void;
}
const PasswordInput = ({ changePassword }: IPasswordInputProps): JSX.Element => {
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);

	return (
		<InputGroup size="md">
			<Input
				type={show ? 'text' : 'password'}
				placeholder="비밀번호를 입력하세요 "
				onChange={e => {
					changePassword(e.currentTarget.value);
				}}
				height={50}
				width={350}
			/>
			<InputRightElement mt="5px">
				<Button size="md" onClick={handleClick}>
					{show ? <ViewOffIcon /> : <ViewIcon />}
				</Button>
			</InputRightElement>
		</InputGroup>
	);
};
export default Login;
