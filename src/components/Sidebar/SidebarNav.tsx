import { Stack } from "@chakra-ui/react";
import NavLink from "./NavLink";
import NavSection from "./NavSection";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";
import { RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";

export function SidebarNav() {
    return (
        < Stack spacing="12" align="flex-start" >
            <NavSection title="Geral">
                <NavLink icon={RiDashboardLine} >Dashboard </NavLink>
                <NavLink icon={RiContactsLine} >Usuários</NavLink>
            </NavSection>
            <NavSection title="Automação">
                <NavLink icon={RiInputMethodLine} >Formulários</NavLink>
                <NavLink icon={RiGitMergeLine} >Automação</NavLink>
            </NavSection>
        </Stack >);
}