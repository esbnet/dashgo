import { Text } from "@chakra-ui/react";

export default function Logo() {
    return (
        <Text
            fontFamily={["2xl", "3xl"]}
            fontWeight={"bold"}
            letterSpacing={"tight"}
            w="64"
        >
            dashgo
            <Text as="span" ml={"1"} color={"blue.500"}>.</Text>
        </Text>
    )
}