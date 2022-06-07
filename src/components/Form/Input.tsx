import { forwardRef, ForwardRefRenderFunction } from 'react'

import {
    FormControl,
    FormLabel,
    Input as ChakraInput,
    InputProps as ChakraInputProps,
} from "@chakra-ui/react";

import { FieldError } from "react-hook-form"

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
    = ({ name, label, error, ...rest }, ref) => {

        return (
            <FormControl isInvalid={!!error}>
                {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
                <ChakraInput
                    name={name}
                    id={name}
                    focusBorderColor="blue.500"
                    bgColor={"blue.900"}
                    variant={"filled"}
                    _hover={{
                        bg: "blue.900",
                    }}
                    size="lg"
                    ref={ref}
                    {...rest}
                />
                {!!error && <FormLabel>{error.message}</FormLabel>}
            </FormControl>

        )
    }

export const Input = forwardRef(InputBase);