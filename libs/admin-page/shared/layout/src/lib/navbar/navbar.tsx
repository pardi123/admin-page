import { Stack, Text, VStack } from '@chakra-ui/react';

export interface NavbarProps {
  pageName?: string;
}

export function Navbar({ pageName }: NavbarProps) {
  const today = new Date();
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const date = `${days[today.getDay()]}, ${today.getDate()} ${
    months[today.getMonth()]
  } ${today.getFullYear()}`;

  return (
    <Stack
      spacing={5}
      direction={{ base: 'column', md: 'row' }}
      justify="space-between"
      align={{ base: 'flex-start', md: 'center' }}
      mb={{ base: '2', lg: '6' }}
    >
      <VStack
        display="flex"
        alignItems="flex-start"
        color="black"
        spacing="1px"
        ml="2"
      >
        <Text
          fontSize="lg"
          fontWeight="bold"
          color="black"
          textTransform="capitalize"
        >
          {pageName}
        </Text>
        <Text fontSize="xs" color="blackAlpha.900">
          {date}
        </Text>
      </VStack>
    </Stack>
  );
}
