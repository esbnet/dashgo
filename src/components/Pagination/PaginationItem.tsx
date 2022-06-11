import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
    number: number;
    isCurrent?: Boolean;
    onPageChange: (page: number) => void;
}

export default function PaginationItem({ isCurrent = false, number, onPageChange }: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button size={"sm"} fontSize="xs" width={4} colorScheme="blue" disabled
                _disabled={{ bg: "blue.500", cursor: "default", }}>{number} </Button>
        )
    };
    return (
        <Button size={"sm"} fontSize="xs" width={4} bgColor="blue.700"
            _disabled={{ bg: "blue.500" }} onClick={() => onPageChange(number)}>{number}</Button>)
}