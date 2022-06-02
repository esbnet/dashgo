import { Flex, Divider, Stack } from "@chakra-ui/react";

import Logo from "./Logo";
import NotificationNAv from "./NotificationNav";
import { Profile } from "./Profile";
import SearchBox from "./SeachBox";

export function Header() {
    return (
        <Stack>
            <Flex as="header" w="100%" maxWidth={1400} h="20" mx="auto" mt="4"
                px="6" align="center" >
                <Logo />
                <SearchBox />
                <Flex align={'center'} ml="auto" >
                    <NotificationNAv />
                    <Profile />
                </Flex>
            </Flex>
            <Divider my={6} borderColor="blue.700" />
        </Stack>
    );
}