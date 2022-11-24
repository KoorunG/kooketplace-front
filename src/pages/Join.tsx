import { Box, Button, Container, Heading, Input, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import AddressSearchPopup from '../components/AddressSearchPopup';

const Join: React.FC = () => {
	return (
		<Container maxW="container.lg" centerContent>
			<Heading>회원가입</Heading>
			<Stack mt={10} gap={2}>
				<CustomInput title="아이디" placeholder="영문, 숫자 5-11자" required />
				<CustomInput title="비밀번호" placeholder="숫자, 영문, 특수문자 조합 최소 8자" required />
				<CustomInput placeholder="비밀번호 재입력" required />
				<CustomInput title="이름" required />
				<CustomInput title="전화번호" placeholder="전화번호 입력" />
				<CustomInput title="이메일" required />
				<Text fontSize={12} colorScheme="gray">
					계정분실 시 본인인증 정보로 활용됩니다.
				</Text>
				<CustomInput title="지역" placeholder="[주소찾기] 버튼으로 입력" disabled />
				<AddressSearchPopup />
				<Button>가입하기</Button>
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
	onChangeFn?: () => {};
}

const CustomInput = ({ title, placeholder, required, value, disabled }: ICustomInputProps): JSX.Element => {
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
			<Input placeholder={placeholder} onChange={e => {}} height={50} width={350} value={value} readOnly={disabled} />
		</>
	);
};

export default Join;
