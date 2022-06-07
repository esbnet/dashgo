import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    shouldMatchExaxtHref?: boolean;
}

export function ActiveLink({ children, shouldMatchExaxtHref = false, ...rest }: ActiveLinkProps) {
    const { asPath } = useRouter();
    let isActive = false;

    if (shouldMatchExaxtHref && (asPath === rest.as || asPath === rest.href)) {
        isActive = true;
    }

    if (!shouldMatchExaxtHref &&
        (asPath.startsWith(String(rest.as)) ||
            asPath.startsWith(String(rest.href)))) {
        isActive = true;
    }

    return (
        <Link {...rest} passHref>
            {cloneElement(children, {
                color: isActive ? 'blue.200' : 'blue.500',
            })}
        </Link>
    );
}