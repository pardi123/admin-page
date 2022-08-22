import { Flex, Icon, Link, FlexProps } from '@chakra-ui/react';
import { ReactText } from 'react';
import { IconType } from 'react-icons';
/* eslint-disable-next-line */
export interface SideLinkProps extends FlexProps {
  icon?: IconType;
  path: string;
  scope?: string;
  children: ReactText;
}

export const SideLink = ({
  icon,
  path,
  scope,
  children,

  ...props
}: SideLinkProps) => {
  return (
    <Link
      href={path}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...props}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default SideLink;
