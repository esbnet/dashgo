import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavSectionProps extends ChakraLinkProps {
    icon: ElementType;
    children: string;
}

export default function NavLink({ icon, children, ...rest }: NavSectionProps) {
    return (
        <Link display="flex" href="#" alignContent={"center"} {...rest}>
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="medium">{children}</Text>
        </Link>
    )
}