import { Box, Image, Badge, Spacer, Divider } from '@chakra-ui/react';
import React from 'react';

const Item = () => {
	const property = {
		imageUrl: 'https://bit.ly/2Z4KKcF',
		imageAlt: 'Rear view of modern home with pool',
		title: '인천유나이티드 21시즌 오반석 싸인 유니폼',
		formattedPrice: '12,000원',
		address: '경기도 시흥시 대야동',
		lastUpdated: '14시간 전',
		ad: true,
	};
	return (
		<Box maxW="sm" borderWidth="1px" borderRadius={10} overflow="hidden">
			<Image src={property.imageUrl} alt={property.imageAlt} />
			<Box p="4">
				<Box display="flex" alignItems="baseline">
					<Badge borderRadius="full" px="2" colorScheme="teal">
						Koo 페이
					</Badge>
					<Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
						3 beds &bull; 2 baths
					</Box>
				</Box>

				<Box mt="2" mb="3" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
					{property.title}
				</Box>

				<Box fontWeight="bold" display="flex">
					{property.formattedPrice}
					<Spacer />
					{property.ad ? (
						<Badge px="2" colorScheme="grey">
							AD
						</Badge>
					) : null}
				</Box>

				<Divider mt={3} />

				<Box display="flex" mt={3} alignItems="center">
					<Box as="span" color="gray.400" fontSize="sm">
						{property.address}
					</Box>
					<Spacer />
					<Box as="span" color="gray.400" fontSize="sm" alignSelf="end">
						{property.lastUpdated}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Item;
