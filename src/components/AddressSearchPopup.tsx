import Postcode from '@actbase/react-daum-postcode';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';

const AddressSearchPopup = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [info, setInfo] = useState<IAddress>({ sido: '시도', sigungu: '시군구', dong: '동' });

	interface IAddress {
		sido: string;
		sigungu: string;
		dong: string;
	}

	return (
		<>
			<Button onClick={onOpen}>주소찾기</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent bgColor="black">
					<ModalHeader>주소검색하기</ModalHeader>
					<ModalBody>
						<Postcode
							jsOptions={{ animation: true, hideMapBtn: true, shorthand: false }}
							onSelected={data => {
								setInfo({ sido: data.sido, sigungu: data.sigungu, dong: data.bname });
								// console.table({ sido: data.sido, sigungu: data.sigungu, dong: data.bname });
							}}
							onError={() => {}}
							key="postcode"
						/>
					</ModalBody>
					<ModalCloseButton />
				</ModalContent>
			</Modal>
		</>
	);
};

export default AddressSearchPopup;
