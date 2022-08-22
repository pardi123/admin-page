import {
  Box,
  Flex,
  useColorModeValue,
  Text,
  CloseButton,
  BoxProps,
  Stack,
} from '@chakra-ui/react';
import { groupingRoutes } from '@admin-page/admin-page/shared/routes';
import SideLink from '../side-links/side-links';

/* eslint-disable-next-line */
export interface SideContentProps extends BoxProps {
  onClose: () => void;
}

export function SideContent({ onClose, ...props }: SideContentProps) {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...props}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Stack>
        {Array.from(groupingRoutes).map((route, index) => {
          if (route[0] === route[1][0].name) {
            return (
              <Stack key={index}>
                {[...route[1]].map((value, idx) => {
                  return (
                    <SideLink
                      key={`${index}.${idx}.${value.name}`}
                      icon={value.icon}
                      path={value.path}
                      scope={value.scope}
                    >
                      {value.name}
                    </SideLink>
                  );
                })}
              </Stack>
            );
          }
          return null;
        })}
      </Stack>
    </Box>
  );
}

export default SideContent;
