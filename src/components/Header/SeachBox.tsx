import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine} from "react-icons/ri";

export default function SearchBox() {
    return (
        <Flex as="label" flex="1" py="4" px="8" ml="6" maxWidth={400}
            alignSelf="center" color='blue.200' position="relative"
            bg='blue.800' borderRadius="full" >
            <Input color={'blue.50'} variant="unstyled" px={4} mr={4}
                placeholder="Buscar na plataforma"
                _placeholder={{ color: 'blue.400' }} />
            <Icon as={RiSearchLine} size={24} />
        </Flex>
    )
}