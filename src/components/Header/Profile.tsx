import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align={"center"}>
            {showProfileData && (
                <Box mr={4} textAlign="right">
                    <Text >Edmilson Soares</Text>
                    <Text as="span" color={'blue.300'} fontSize="small">
                        esbnet@gmail.com
                    </Text>
                </Box>
            )}
            <Avatar size="md" name="Edmilson Soares" src="https://github.com/esbnet.png" />
        </Flex>
    )
}