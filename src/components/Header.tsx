import { SearchIcon } from '@chakra-ui/icons';
import { Box, Button, Container, HStack, Input, InputGroup, InputRightElement, Link, Spacer } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
	return (
		<Container maxW="container.lg" height={150}>
			<HStack mt={10}>
				<Link as={NavLink} to="/">
					<Box>Kooketplace</Box>
				</Link>
				<Spacer />
				<Box>
					<InputGroup>
						<InputRightElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
						<Input type="text" placeholder="상품명, 지역명, @상점명 입력" width="500px" />
					</InputGroup>
				</Box>
				<Spacer />
				<Box>
					<Link as={NavLink} to="/login" ml={1} mr={1}>
						로그인
					</Link>
					|
					<Link as={NavLink} to="/products/new" ml={1} mr={1}>
						판매하기
					</Link>
					|
					<Link as={NavLink} to="/" ml={1} mr={1}>
						내상점
					</Link>
					|
					<Link as={NavLink} to="/" ml={1} mr={1}>
						쿠렁톡
					</Link>
				</Box>
			</HStack>
		</Container>
	);
};

export default Header;
