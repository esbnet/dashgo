import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";

import { Input } from "../../components/Form/Input";

import { Header } from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function CreateUser() {
    return (
        <Box>

            <Header />

            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" p={8} bg="blue.800" borderRadius={[6, 8]}>
                    <Heading size={"lg"} fontWeight={"normal"}>Criar usuário</Heading>

                    <Divider my={6} borderColor="blue.700" />

                    <VStack spacing={8}>
                        <SimpleGrid minChildWidth="240px" spacing={[6, 8]} w="100%">
                            <Input name="name" label="Nome completo" />
                            <Input name="email" type="email" label="E-mail" />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={[6, 8]} w="100%">
                            <Input name="passwor" label="Senha" />
                            <Input name="password_confirmation" type="password" label="Confirmação de senha" />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify={"flex-end"}>
                        <HStack spacing={4}>
                            <Link href="/users" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button colorScheme="blue">Salvar</Button>
                        </HStack>
                    </Flex>

                </Box>

            </Flex>

        </Box>
    )
}