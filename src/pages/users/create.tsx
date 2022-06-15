import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Input } from "../../components/Form/Input";

import { Header } from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form";

import { useMutation } from "react-query";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";

interface IFormInputs {
    name: string
    email: string
    password: string
    password_confirmation: string
}

const userFormSchema = yup.object().shape({
    name: yup
        .string()
        .min(4, "Nome deve ter no mínimo 4 caracteres")
        .required("Nome é obrigatório"),
    email: yup
        .string()
        .email("Email inválido")
        .required("Email é obrigatório"),
    password: yup
        .string()
        .required("Senha obrigatória")
        .min(6, "Senha deve ter no mínimo 6 caracteres")
        .max(16, "Senha deve ter no máximo 16 caracteres")
        .matches(/[a-zA-Z]/, "Senha deve conter letras")
        .matches(/[0-9]/, "Senha deve conter números")
        .matches(/[!@#$%^&*]/, "Senha deve conter caracteres especiais"),
    password_confirmation: yup
        .string().oneOf([null, yup.ref("password")], "Confirmação não conferem"),
})

export default function CreateUser() {
    const router = useRouter();

    const createUser = useMutation(async (user: IFormInputs) => {
        const response = await api.post("users", {
            user: {
                ...user,
                create_at: new Date()
            }
        })

        return response.data.user;
    }, {
        onSuccess: () => {
            alert(`Usuário criado com sucesso! \n`);
            queryClient.invalidateQueries("users");
        }
    });

    const { register, handleSubmit, formState, formState: { errors } } = useForm<IFormInputs>(
        { resolver: yupResolver(userFormSchema) }
    )

    const handleCreateUser: SubmitHandler<IFormInputs> = async (data) => {
        await createUser.mutateAsync(data);
        router.push("/users");
    }

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
                <Sidebar />
                <Box
                    as="form"
                    flex="1"
                    p={8}
                    bg="blue.800"
                    borderRadius={[6, 8]}
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size={"lg"} fontWeight={"normal"}>Criar usuário</Heading>

                    <Divider my={6} borderColor="blue.700" />

                    <VStack spacing={8}>
                        <SimpleGrid minChildWidth="240px" spacing={[6, 8]} w="100%">
                            <Input
                                name="name"
                                type="text"
                                label="Nome completo"
                                {...register("name")}
                                error={errors.name}
                            />
                            <Input
                                name="email"
                                type="email"
                                label="E-mail"
                                {...register("email")}
                                error={errors.email}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={[6, 8]} w="100%">
                            <Input
                                name="password"
                                type="password"
                                label="Senha"
                                {...register("password")}
                                error={errors.password}
                            />
                            <Input
                                name="password_confirmation"
                                type="password"
                                label="Confirmação de senha"
                                {...register("password_confirmation")}
                                error={errors.password_confirmation}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify={"flex-end"}>
                        <HStack spacing={4}>
                            <Link href="/users" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button
                                type="submit"
                                colorScheme="blue"
                                isLoading={formState.isSubmitting}
                            >Salvar</Button>

                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}