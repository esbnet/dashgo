import { useState } from "react";
import Link from "next/link";

import {
    Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Text, Td, Th,
    Thead, Tr, useBreakpointValue, Spinner
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import Pagination from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";
import { useUsers } from "../../services/hooks/useUsers";

export default function UserList() {
    const [page, setPage] = useState(1)
    const { data, isLoading, isFetching, error } = useUsers(page)

    console.log(data)

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
                <Sidebar />
                <Box flex="1" p={8} bg="blue.800" borderRadius={8}>
                    <Flex mb={8} justify="space-between" align={"center"}>
                        <Heading size={"lg"} fontWeight={"normal"}>
                            Usuários
                            {!isLoading && isFetching && <Spinner size="sm" color="blue.700" ml={4} />}
                        </Heading>
                        <Link href="/users/create" passHref>
                            <Button
                                as={"a"}
                                size="sm"
                                fontSize={"20"}
                                colorScheme="blue"
                                leftIcon={<Icon as={RiAddLine} />}
                            >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>
                    {isLoading ? (
                        <Flex justify={"center"}>
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify={"center"}>
                            <Text>Erro ao carregar dados de usuários...</Text>
                        </Flex>
                    ) : (
                        <>
                            <Table colorScheme={"whiteAlpha"}>
                                <Thead>
                                    <Tr>
                                        <Th px={[4, 4, 6]} color="blue.300" width={8}>
                                            <Checkbox colorScheme={'blue'} />
                                        </Th>
                                        <Th>Usuário</Th>
                                        {isWideVersion && <Th>Data de cadastro</Th>}
                                        <Th width={8}>Ação</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data.users.map(user => {
                                        return (
                                            <>
                                                <Tr>
                                                    <Td px={[4, 4, 6]}>
                                                        <Checkbox colorScheme={'blue'} />
                                                    </Td>
                                                    <Td>
                                                        <Box>
                                                            <Text fontWeight={"bold"}>{user.name}</Text>
                                                            <Text fontSize={"sm"} fontWeight={"small"} color="blue.300">{user.email}</Text>
                                                        </Box>
                                                    </Td>
                                                    {isWideVersion && <Td>{user.createdAt}</Td>}
                                                    <Td>
                                                        <Button
                                                            as={"a"}
                                                            size="sm"
                                                            fontSize={"sm"}
                                                            colorScheme="purple"
                                                            leftIcon={<Icon as={RiPencilLine} />}
                                                            cursor="pointer"
                                                        >{isWideVersion ? 'Editar' : ""}</Button>
                                                    </Td>
                                                </Tr>
                                            </>
                                        )
                                    })}
                                </Tbody>
                            </Table >
                            <Pagination
                                totalCountOfRegisters={data.totalCount}
                                currentPage={page}
                                onPageChange={setPage}
                            />
                        </>)
                    }
                </Box >
            </Flex >
        </Box >
    )
}
