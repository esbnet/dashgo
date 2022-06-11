import { Box, Stack, Text } from "@chakra-ui/react";
import PaginationItem from "./PaginationItem";

interface PaginationProps {
    totalCountOfRegisters: number;
    registerPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)]
        .map((_, index) => from + index + 1).filter(page => page > 0);
}

export default function Pagination({
    totalCountOfRegisters,
    registerPerPage = 10,
    currentPage = 1,
    onPageChange
}: PaginationProps) {

    const lastPage = Math.floor(totalCountOfRegisters / registerPerPage);
    const previousPage = currentPage > 1
        ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
        : [];

    const nextPage = currentPage < lastPage
        ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
        : [];


    return (
        <Stack
            direction={["column", "row"]}
            spacing={6}
            mt={8}
            justify="space-between"
            align="center"
        >
            <Box>
                <strong>0</strong> -
                <strong>10</strong> de
                <strong> 100</strong>
            </Box>
            <Stack direction="row" spacing={2}>

                {currentPage > (1 + siblingsCount) && (
                    <>
                        <PaginationItem number={1} />
                        {currentPage > (2 + siblingsCount) && (
                            <Text color={"blue.300"} width={8} textAlign="center">...</Text>
                        )}
                    </>
                )}

                {previousPage.length > 0 && previousPage.map(page => {
                    return <PaginationItem key={page} number={page} />
                })}

                <PaginationItem number={currentPage} isCurrent />

                {nextPage.length > 0 && nextPage.map(page => {
                    return <PaginationItem key={page} number={page} />
                })}

                {(currentPage + siblingsCount) < lastPage && (
                    <>
                        {(currentPage + 1 + siblingsCount) < lastPage && (
                            <Text color={"blue.300"} width={8} textAlign="center">...</Text>
                        )}
                        <PaginationItem number={lastPage} />
                    </>
                )}

            </Stack>
        </Stack>
    );
};

