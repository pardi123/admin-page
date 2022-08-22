import { Box, Center, Stack, Text, VStack } from '@chakra-ui/react';
import {
  FillTypes,
  getBarChartData,
  getPieChartData,
  getPiechartTipeIkanData,
} from '@admin-page/admin-page/shared/data-access';
import { BarChart, PieChart } from '@admin-page/admin-page/shared/ui';
/* eslint-disable-next-line */
export interface AdminPageHomeProps {}

export function AdminPageHome(props: AdminPageHomeProps) {
  const fillLokasi: FillTypes[] = [
    {
      match: {
        id: 'Pelabuhan',
      },
      id: 'PelabuhanColor',
    },
    {
      match: {
        id: 'Laut',
      },
      id: 'LautColor',
    },
    {
      match: {
        id: 'Laut Teritorial',
      },
      id: 'LautTeritorialColor',
    },
  ];
  const fillIkan: FillTypes[] = [
    {
      match: {
        id: 'Gulmah',
      },
      id: 'GulmahColor',
    },
    {
      match: {
        id: 'Remang Putih',
      },
      id: 'RemangPutihColor',
    },
    {
      match: {
        id: 'Bawal Hitam',
      },
      id: 'BawalHitamColor',
    },
    {
      match: {
        id: 'Lain-Lain',
      },
      id: 'LainLainColor',
    },
    {
      match: {
        id: 'Layur',
      },
      id: 'LayurColor',
    },
    {
      match: {
        id: 'Teri',
      },
      id: 'TeriColor',
    },
    {
      match: {
        id: 'Bawal Putih',
      },
      id: 'BawalPutihColor',
    },
  ];
  const colorsLokasi = ['#00B9D7', '#BFBFBF', '#AFECE1'];
  const colorsIkan = [
    '#FFB000',
    '#FF7900',
    '#75391C',
    '#FECB8B',
    '#006E96',
    '#00B9D7',
    '#AFECE1',
  ];
  return (
    <Box fontFamily="Poppins">
      <Stack direction="row" justifyContent="space-between">
        <Stack bg="white" w="30vw" minH="350px" rounded="xl">
          <Center flexDirection="row" h="full">
            <Box boxSize="13vw" color="black">
              <PieChart
                chartData={getPieChartData}
                ArclinksLabel={false}
                marginChart={{ top: 10, bottom: 10, right: 10, left: 10 }}
                fill={fillLokasi}
                colors={colorsLokasi}
              />
            </Box>
            <Stack direction="column" mt={-3} spacing={0}>
              <Stack direction="row" mr={12}>
                <Text fontWeight="bold" fontSize="33px" textColor="black">
                  500
                </Text>
                <Text fontWeight="normal" fontSize="33px" textColor="black">
                  Kapal
                </Text>
              </Stack>
              <Text color="#8C8C8C" fontSize="19px" fontWeight="medium">
                terdata
              </Text>
              <Text
                color="#00B9D7"
                fontStyle="normal"
                fontSize="24px"
                fontWeight="bold"
              >
                Berada di
              </Text>
              <Text
                color="#00B9D7"
                fontStyle="bold"
                fontSize="24px"
                fontWeight="bold"
              >
                Pelabuhan
              </Text>
            </Stack>
          </Center>
        </Stack>
        <Stack bg="white" w="30vw" minH="350px" rounded="xl" p="6">
          <VStack alignItems="start">
            <Text fontSize="23px" fontWeight="bold" textColor="#8C8C8C" mt={-4}>
              Sisa Quota KSO Kapal (2022)
            </Text>
            <Center w="full" bgColor="#8C8C8C" rounded="xl" height="245px">
              <Stack direction="column" spacing={-5}>
                <Text fontWeight="bold" fontSize="7xl" textColor="white">
                  200.000
                </Text>
                <Text
                  fontWeight="bold"
                  fontSize="33px"
                  textColor="#00B9D7"
                  textAlign="center"
                >
                  /600.000 ton
                </Text>
              </Stack>
            </Center>
          </VStack>
        </Stack>
        <Stack bg="white" w="30vw" minH="350px" rounded="xl" p="6">
          <VStack alignItems="start">
            <Text fontSize="24px" fontWeight="bold" textColor="#8C8C8C" mt={-4}>
              Sisa Net Quota (2022)
            </Text>
            <Center w="full" bgColor="#8C8C8C" rounded="xl" height="245px">
              <Stack direction="column" spacing={-5}>
                <Text fontWeight="bold" fontSize="7xl" textColor="white">
                  235.210
                </Text>
                <Text
                  fontWeight="bold"
                  fontSize="33px"
                  textColor="#00B9D7"
                  textAlign="center"
                >
                  /600.000 ton
                </Text>
              </Stack>
            </Center>
          </VStack>
        </Stack>
      </Stack>

      <Stack direction="row" justifyContent="space-between" mt={5}>
        <Stack bg="white" w="30vw" minH="350px" rounded="xl" p="6">
          <VStack alignItems="start">
            <Text fontSize="23px" fontWeight="bold" textColor="#8C8C8C" mt={-4}>
              Sisa Quota KSO Kapal (2022)
            </Text>
            <Center w="23vw" rounded="xl" height="245px">
              <PieChart
                chartData={getPiechartTipeIkanData}
                ArclinksLabel={true}
                marginChart={{ top: 10, bottom: 10, right: 115, left: 60 }}
                fill={fillIkan}
                colors={colorsIkan}
              />
            </Center>
          </VStack>
        </Stack>

        <Stack bg="white" w="30vw" minH="350px" rounded="xl" p="6">
          <VStack alignItems="start" spacing={-2}>
            <Text fontSize="24px" fontWeight="bold" mt={-4} textColor="#8C8C8C">
              Nilai Produksi
            </Text>
            <Text
              fontSize="24px"
              fontWeight="medium"
              textColor="#00B9D7"
              pb={2}
            >
              dalam Milliar Rupiah
            </Text>
            <Center w="22vw" rounded="xl" height="245px">
              <BarChart barChartData={getBarChartData} />
            </Center>
          </VStack>
        </Stack>
        <Stack bg="white" w="30vw" minH="350px" rounded="xl" p="6">
          <VStack alignItems="start" direction="column">
            <Text
              fontSize="24px"
              fontWeight="bold"
              textColor="#8C8C8C"
              mt={-4}
              pb={5}
            >
              Sisa Net Quota (2022)
            </Text>
            <Center w="full" bgColor="#8C8C8C" rounded="xl" height="245px">
              <Stack direction="column" spacing={-5}>
                <Text fontWeight="bold" fontSize="7xl" textColor="white">
                  235.210
                </Text>
                <Text
                  fontWeight="bold"
                  fontSize="33px"
                  textColor="#00B9D7"
                  textAlign="center"
                >
                  /600.000 ton
                </Text>
              </Stack>
            </Center>
          </VStack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default AdminPageHome;
