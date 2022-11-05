import {
  Icon,
  Link,
  LinkProps as ChakraLinkProps,
  Text,
} from "@chakra-ui/react";
import { ElementType } from "react";

interface navLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
}
export function NavLink({ icon, children, ...rest }: navLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="mediun">
        {children}
      </Text>
    </Link>
  );
}
