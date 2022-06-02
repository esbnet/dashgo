import {
    Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Text, Td, Th,
    Thead, Tr
} from "@chakra-ui/react";

import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import Pagination from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";

export default function UserList() {
    return (
        <Box>

            <Header />

            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" p={8} bg="blue.800" borderRadius={8}>
                    <Flex mb={8} justify="space-between" align={"center"}>
                        <Heading size={"lg"} fontWeight={"normal"}>Usuários</Heading>

                        <Button
                            as={"a"}
                            size="sm"
                            fontSize={"20"}
                            colorScheme="blue"
                            leftIcon={<Icon as={RiAddLine} />}
                        >
                            Criar novo
                        </Button>
                    </Flex>

                    <Table colorScheme={"whiteAlpha"}>
                        <Thead>
                            <Tr>
                                <Th px={6} color="blue.300" width={8}>
                                    <Checkbox colorScheme={'blue'} />
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Td width={8}>Ação</Td>
                            </Tr>
                        </Thead>
                        <Tbody>

                            <Tr>
                                <Td px={6}>
                                    <Checkbox colorScheme={'blue'} />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight={"bold"}>Edmilson Soares</Text>
                                        <Text fontSize={"sm"} fontWeight={"small"} color="blue.300">esbnet@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>04 de Abril de 2021</Td>
                                <Td>
                                    <Button
                                        as={"a"}
                                        size="sm"
                                        fontSize={"sm"}
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine} />}
                                        cursor="pointer"
                                    >Editar</Button>

                                </Td>
                            </Tr>
                            <Tr>
                                <Td px={6}>
                                    <Checkbox colorScheme={'blue'} />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight={"bold"}>Edmilson Soares</Text>
                                        <Text fontSize={"sm"} fontWeight={"small"} color="blue.300">esbnet@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>04 de Abril de 2021</Td>
                                <Td>
                                    <Button
                                        as={"a"}
                                        size="sm"
                                        fontSize={"sm"}
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine} />}
                                        cursor="pointer"
                                    >Editar</Button>

                                </Td>
                            </Tr>
                            <Tr>
                                <Td px={6}>
                                    <Checkbox colorScheme={'blue'} />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight={"bold"}>Edmilson Soares</Text>
                                        <Text fontSize={"sm"} fontWeight={"small"} color="blue.300">esbnet@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>04 de Abril de 2021</Td>
                                <Td>
                                    <Button
                                        title="Editar"
                                        as={"a"}
                                        size="sm"
                                        fontSize={"sm"}
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine}/>}
                                        cursor="pointer"
                                    />

                                </Td>
                            </Tr>

                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>

            </Flex>

        </Box>
    )
}