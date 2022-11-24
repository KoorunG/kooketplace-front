import { Box, Button, Container, Heading, Input, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import AddressSearchPopup from '../components/AddressSearchPopup';

const Join: React.FC = () => {
	const [userId, setUserId] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');

	interface IJoinRequest {
		userId: string;
		password: string;
		name: string;
		email: string;
		phoneNumber?: string;
		address?: IAddress;
	}

	interface IAddress {
		sido: string;
		signgu: string;
		dong: string;
	}

	interface IExceptionInfo {
		errorCode: string;
		fieldName: string;
		message: string;
	}
	const joinRequest: IJoinRequest = { userId, password, name, email, phoneNumber };

	const postJoinRequest = async () => {
		const confirm = window.confirm('회원가입을 진행하시겠습니까?');
		if (!confirm) return;

		await axios.post('http://localhost:8080/join', joinRequest).catch(error => {
			if (error) {
				const data: IExceptionInfo[] = error.response.data.exceptionInfoList;
				for (const info of data) {
					console.table(info);
				}
			}
		});
	};

	return (
		<Container maxW="container.lg" centerContent>
			<Heading>회원가입</Heading>

			<Stack mt={10} gap={2}>
				<CustomInput title="아이디" placeholder="영문, 숫자 5-11자" required onChangeFn={setUserId} />
				<CustomInput title="비밀번호" placeholder="숫자, 영문, 특수문자 조합 최소 8자" required onChangeFn={setPassword} />
				<CustomInput placeholder="비밀번호 재입력" required />
				<CustomInput title="이름" required onChangeFn={setName} />
				<CustomInput title="전화번호" placeholder="전화번호 입력" onChangeFn={setPhoneNumber} />
				<CustomInput title="이메일" required onChangeFn={setEmail} />
				<Text fontSize={12} colorScheme="gray">
					계정분실 시 본인인증 정보로 활용됩니다.
				</Text>
				<CustomInput title="지역" placeholder="[주소찾기] 버튼으로 입력" disabled />
				<AddressSearchPopup />
				<Button onClick={postJoinRequest}>가입하기</Button>
			</Stack>
		</Container>
	);
};

interface ICustomInputProps {
	title?: string;
	placeholder?: string;
	required?: boolean;
	value?: string;
	disabled?: boolean;
	onChangeFn?: (input: string) => void;
}

const CustomInput = ({ title, placeholder, required, value, disabled, onChangeFn }: ICustomInputProps): JSX.Element => {
	return (
		<>
			{title ? (
				<Box display="flex">
					<Text>{title}</Text>
					{required ? (
						<Text ml="3px" textColor="red.300">
							*
						</Text>
					) : null}
				</Box>
			) : null}
			<Input
				placeholder={placeholder}
				onChange={e => {
					if (onChangeFn) onChangeFn(e.currentTarget.value);
				}}
				height={50}
				width={350}
				value={value}
				readOnly={disabled}
			/>
		</>
	);
};

export default Join;
