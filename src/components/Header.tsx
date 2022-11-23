import { SearchIcon } from '@chakra-ui/icons';
import { Box, Container, HStack, Input, InputGroup, InputRightElement, Spacer, TagLabel } from '@chakra-ui/react';
import React from 'react';

const Header: React.FC = () => {
	return (
		<Container maxW="container.lg" height={150}>
			<HStack mt={10}>
				<Box>번개장터</Box>
				<Spacer />
				<Box>
					<InputGroup>
						<InputRightElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
						<Input type="text" placeholder="상품명, 지역명, @상점명 입력" width="500px" />
					</InputGroup>
				</Box>
				<Spacer />
				<Box>홈 | 로그인 | 쿠렁톡</Box>
			</HStack>
		</Container>
	);
};

export default Header;
