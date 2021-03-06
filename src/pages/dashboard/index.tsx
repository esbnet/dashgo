import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false
})

const options = {
  chart: {
    toolbar: { show: false },
    zoom: { enabled: false },
    foreColor: theme.colors.blue[500],
  },
  grid: { show: false, },
  dataLabels: { enabled: false },
  tooltip: {
    enabled: true,
    theme: "dark",
    x: { show: false }, 
    y: { show: false }
  },
  xaxis: {
    type: "datetime",
    axisBorder: { color: theme.colors.blue[600] },
    axisTicks: { color: theme.colors.blue[600] },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z',
    ]
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.30
    },
  },
}
const series = [{ name: "series-1", data: [1000, 40, 500, 51, 402, 109, 250] }]

function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex={1} gap="4" minChildWidth="320px" alignContent={"flex-start"}>
          <Box p={[6, 8]} bg="blue.800" borderRadius={8}>
            <Text fontSize="lg" mb={4}>Inscritos da semana</Text>

            <Chart options={options} series={series} type="area" height={160} />

          </Box>
          <Box p={8} bg="blue.800" borderRadius={8}>
            <Text fontSize="lg" mb={4}>Taxa de abertura</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

export default Dashboard;
