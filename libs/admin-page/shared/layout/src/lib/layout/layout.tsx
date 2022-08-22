import { Box, useColorModeValue } from '@chakra-ui/react';
import { CurrentLocationReturn } from '@admin-page/admin-page/shared/context';
import { ReactNode } from 'react';
import Sidebar from '../sidebar/sidebar';
import { FiHome } from 'react-icons/fi';
import { useCurrentLocation } from '@admin-page/admin-page/shared/hooks';
import { Navbar } from '../navbar/navbar';
/* eslint-disable-next-line */
export interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const defaultCurrentRoute: CurrentLocationReturn = {
    path: 'beranda',
    isMain: true,
    name: 'Beranda',
    icon: FiHome,
    isShowSearchBar: false,
    isDetail: false,
  };

  const currentRoute = useCurrentLocation();
  const location = currentRoute ? currentRoute.location : defaultCurrentRoute;
  const pageName = location?.name;
  console.log(useCurrentLocation());
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <Sidebar />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Navbar pageName={pageName} />
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
