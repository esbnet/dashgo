import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align={"center"}>
            <Box mr={4} textAlign="right">
                <Text >Edmilson Soares</Text>
                <Text as="span" color={'blue.300'} fontSize="small">
                    esbnet@gmail.com
                </Text>
            </Box>
            <Avatar size="md" name="Edmilson Soares" src="https://github.com/esbnet.png" />
        </Flex>
    )
}