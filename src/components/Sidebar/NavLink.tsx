import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from "next/Link";

interface NavSectionProps extends ChakraLinkProps {
    icon: ElementType;
    children: string;
    href: string
}

export default function NavLink({ icon, children, href, ...rest }: NavSectionProps) {
    return (
        <Link href={href} passHref>
            <ChakraLink display="flex" href="#" alignContent={"center"} {...rest}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">{children}</Text>
            </ChakraLink>
        </Link>
    )
}