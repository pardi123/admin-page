import { Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react';
import { SideContent } from '@admin-page/admin-page/shared/ui';
/* eslint-disable-next-line */
export interface SidebarProps {}

export function Sidebar(props: SidebarProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box>
      <SideContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SideContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
