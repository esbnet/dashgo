import { useState } from "react";
import NextLink from "next/link";

import {
    Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Text, Td, Th,
    Thead, Tr, useBreakpointValue, Spinner, Link
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import Pagination from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";
import { getUsers, useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";
import { GetServerSideProps } from "next";


export default function UserList({ users }) {
    const [page, setPage] = useState(1)
    const { data, isLoading, isFetching, error } = useUsers(page, {
        initialData: users,
    })

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    async function handlePrefetchUser(userId: number) {
        await queryClient.prefetchQuery(["user", userId], async () => {
            const response = await api.get(`users/${userId}`)
            return response.data;
        }, {
            staleTime: 1000 * 60 * 10, // 10 minutes
        })
    }

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
                        <NextLink href="/users/create" passHref>
                            <Button
                                as={"a"}
                                size="sm"
                                fontSize={"20"}
                                colorScheme="blue"
                                leftIcon={<Icon as={RiAddLine} />}
                            >
                                Criar novo
                            </Button>
                        </NextLink>
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
                                                            <Link color="blue.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
                                                                <Text fontWeight={"bold"}>{user.name}</Text>
                                                            </Link>
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

export const getServerSideProps: GetServerSideProps = async () => {
    const { users, totalCount } = await getUsers(1)

    return {
        props: {
            users
        },
    }
}