import { ListItem as ChakraListItem } from "@chakra-ui/react";
import React, { FC } from "react";
interface MenuItemProps {
  title?: string;
  isIcon?: boolean;
}
const ListItem: FC<MenuItemProps> = ({ children, title, isIcon }) => {
  return (
    <ChakraListItem
      mr={4}
      w={isIcon ? { base: "23px", md: "30px" } : ""}
      cursor="pointer"
      transition="all .3s"
      _hover={{ color: "#DDD" }}
    >
      {title}
      {children}
    </ChakraListItem>
  );
};

export default ListItem;
