import { ElementType } from "react";
import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";

import { ActiveLink } from "../ActiveLink";

interface NavSectionProps extends ChakraLinkProps {
    icon: ElementType;
    children: string;
    href: string
}

export default function NavLink({ icon, children, href, ...rest }: NavSectionProps) {
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink display="flex" href="#" alignContent={"center"} {...rest}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">{children}</Text>
            </ChakraLink>
        </ActiveLink>
    )
}