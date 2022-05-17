import { Flex, Input, Text, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import { RiSearchLine, RiNotification2Line, RiUserAddLine } from "react-icons/ri";

export function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1400}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            <Text
                fontFamily={"3xl"}
                fontWeight={"bold"}
                letterSpacing={"tight"}
                w="64"

            >
                dashgo
                <Text as="span" ml={"1"} color={"blue.500"}>.</Text>
            </Text>

            <Flex
                as="label"
                flex="1"
                py="4"
                px="8"
                ml="6"
                maxWidth={400}
                alignSelf="center"
                color='blue.200'
                position="relative"
                bg='blue.800'
                borderRadius="full"
            >
                <Input
                    color={'blue.50'}
                    variant="unstyled"
                    px={4}
                    mr={4}
                    placeholder="Buscar na plataforma"
                    _placeholder={{ color: 'blue.400' }}
                />
                <Icon as={RiSearchLine} size={24} />
            </Flex>

            <Flex
                align={'center'}
                ml="auto"
            >
                <HStack
                    spacing={4}
                    mx={8}
                    pr={8}
                    py={1}
                    color={'blue.300'}
                    borderRightWidth={1}
                    borderColor={'blue.700'}
                >
                    <Icon as={RiNotification2Line} size={24} />
                    <Icon as={RiUserAddLine} size={24} />
                </HStack>

                <Flex align={"center"}>
                    <Box mr={4} textAlign="right">
                        <Text >Edmilson Soares</Text>
                        <Text as="span" color={'blue.300'} fontSize="small">
                            esbnet@gmail.com
                        </Text>
                    </Box>
                    <Avatar size="md" name="Edmilson Soares" src="https://github.com/esbnet.png" />

                </Flex>

            </Flex>

        </Flex>
    );
}