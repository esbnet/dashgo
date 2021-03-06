import { HStack, Icon } from "@chakra-ui/react";
import { RiNotification2Line, RiUserAddLine } from "react-icons/ri";

export default function NotificationNAv() {
    return (
        <HStack
            spacing={[6,8]}
            mx={[6,8]}
            pr={[6,8]}
            py={1}
            color={'blue.300'}
            borderRightWidth={1}
            borderColor={'blue.700'}
        >
            <Icon as={RiNotification2Line} size={24} />
            <Icon as={RiUserAddLine} size={24} />
        </HStack>
    )
}