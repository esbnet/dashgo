import {forwardRef, ForwardRefRenderFunction } from 'react'

import {
    FormControl,
    FormLabel, 
    Input as ChakraInput,
    InputProps as ChakraInputProps,
    
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, ...rest }, ref) => {

    return (
        <FormControl>
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
        </FormControl>

    )
}

export const Input = forwardRef(InputBase);