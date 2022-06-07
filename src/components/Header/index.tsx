import { Flex, Divider, Stack, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

import Logo from "./Logo";
import NotificationNAv from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SeachBox";

export function Header() {
    const { onOpen } = useSidebarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Stack>
            <Flex as="header" w="100%" maxWidth={1400} h="20" mx="auto" mt="4"
                px="6" align="center" >

                {!isWideVersion && (
                    <IconButton
                        aria-label="Open navigation menu"
                        icon={<Icon as={RiMenuLine} />}
                        fontSize="24"
                        variant={"unstyled"}
                        onClick={onOpen}
                        mr="2"
                    >
                    </IconButton>
                )}

                <Logo />

                {isWideVersion && (<SearchBox />)}

                <Flex align={'center'} ml="auto" >
                    <NotificationNAv />
                    <Profile showProfileData={isWideVersion} />
                </Flex>
            </Flex>
            <Divider my={6} borderColor="blue.700" />
        </Stack>
    );
}