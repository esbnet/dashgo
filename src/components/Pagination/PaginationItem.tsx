import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
    number: number;
    isCurrent?: Boolean;
}

export default function PaginationItem({ isCurrent = false, number }: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button size={"sm"} fontSize="xs" width={4} colorScheme="blue" disabled
                _disabled={{ bg: "blue.500", cursor: "default", }}>{number} </Button>
        )
    };
    return (
        <Button size={"sm"} fontSize="xs" width={4} bgColor="blue.700"
            _disabled={{ bg: "blue.500" }}>{number}</Button>)
}