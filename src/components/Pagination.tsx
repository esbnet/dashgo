import { Box, Button, Stack } from "@chakra-ui/react";

export default function Pagination() {
  return (
    <Stack direction={"row"} mt={8} justify="space-between" spacing={6} align="center">

      <Box>
        <strong>0</strong> - 
        <strong>10</strong> de  
        <strong> 100</strong>
      </Box>
      <Stack direction="row" spacing={2}>
        <Button size={"sm"} fontSize="xs" width={4} colorScheme="blue" disabled
          _disabled={{ bg: "blue.500", cursor: "default", }}>
          1
        </Button>
        <Button size={"sm"} fontSize="xs" width={4} bgColor="blue.700"
          _disabled={{ bg: "blue.500" }}>
          2
        </Button>
        <Button size={"sm"} fontSize="xs" width={4} bgColor="blue.700"
          _disabled={{ bg: "blue.500" }}>
          3
        </Button>
        <Button size={"sm"} fontSize="xs" width={4} bgColor="blue.700"
          _disabled={{ bg: "blue.500" }}>
          4
        </Button>
        <Button size={"sm"} fontSize="xs" width={4} bgColor="blue.700"
          _disabled={{ bg: "blue.500" }}>
          5
        </Button>
      </Stack>
    </Stack>
  );
};

