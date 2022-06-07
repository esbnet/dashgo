import { Flex, Button, Stack } from "@chakra-ui/react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../components/Form/Input"

import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

interface IFormInputs {
    email: string
    password: string
}

const signFormSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
})

export default function Home() {
    const { register, handleSubmit, formState, formState: { errors } } = useForm<IFormInputs>(
        { resolver: yupResolver(signFormSchema) }
    )

    const handleSignIn: SubmitHandler<IFormInputs> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log(data)
    }

    return (
        <Flex
            w="100vw"
            h="100vh"
            alignItems="center"
            justifyContent="center"
        >
            <Flex
                alignContent={"space-around"}
                flexDir={"column"}
                as="form"
                width="100%"
                maxWidth={360}
                bg="blue.800"
                p={8}
                borderRadius={8}
                boxShadow="0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)"
                onSubmit={handleSubmit(handleSignIn)}
            >
                <Stack spacing={4}>
                    <Input
                        name="email"
                        type="email"
                        label="E-mail"
                        {...register("email", { required: true })}
                        error={errors.email}

                    />
                    <Input
                        name="password"
                        type="password"
                        label="Senha"
                        {...register("password", { required: true })}
                        error={errors.password}
                    />
                </Stack>
                <Button
                    type="submit"
                    mt={6}
                    colorScheme={"blue"}
                    size="lg"
                    isLoading={formState.isSubmitting}
                >
                    Entrar
                </Button>
            </Flex>
        </Flex>
    )
}
