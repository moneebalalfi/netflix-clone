import {
  Avatar,
  Box,
  Button,
  Flex,
  List,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsFillBellFill } from "react-icons/bs";
import { GiPresent } from "react-icons/gi";
import { ImSearch } from "react-icons/im";
import { IoMdArrowDropdown } from "react-icons/io";
import ListItem from "./ListItem";
import NLogo from "./NLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 140) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <Box pos="fixed" w="100%" top="0" left="0" zIndex="9999">
      <Flex
        bg={`${isScrolled ? "#141414" : ""}`}
        alignItems="center"
        justifyContent="space-between"
        p={4}
        transition="all .3s"
      >
        {/* LeftSide Box */}
        <Flex alignItems="center">
          <Box width={{ base: "70px", md: "100px" }}>{<NLogo />}</Box>

          {/* Normal screen Navbar*/}
          <List
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            ml={14}
          >
            <ListItem title="Home" />
            <ListItem title="Tv shows" />
            <ListItem title="Movies" />
            <ListItem title="New & Popular" />
          </List>

          {/* Base Screen Menu*/}
          <Box
            display={{ base: "block", md: "none" }}
            alignItems="center"
            ml={{ base: 4, sm: 6 }}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <Menu isOpen={isOpen}>
              <MenuButton
                as={Button}
                rightIcon={<IoMdArrowDropdown />}
                bg="none"
                _hover={{ bg: "none" }}
                _expanded={{ bg: "none" }}
                _focus={{ outline: 0, boxShadow: "none", bg: "none" }}
              >
                Browse
              </MenuButton>
              <MenuList
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                bg="bgColor"
                borderTop=".3rem solid white"
                w="300px"
              >
                <MenuItem w="100%" textAlign="center">
                  Home
                </MenuItem>
                <MenuItem>Tv shows</MenuItem>
                <MenuItem>Movies</MenuItem>
                <MenuItem>New & Popular</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>

        {/* RightSide Box */}
        <List
          display={{ base: "flex", md: "flex" }}
          alignItems="center"
          justifyContent="space-between"
          right={{ base: 4, md: 12 }}
        >
          <ListItem isIcon>
            <ImSearch size="100%" />
          </ListItem>
          <ListItem isIcon>
            <GiPresent size="100%" />
          </ListItem>
          <ListItem isIcon>
            <BsFillBellFill size="100%" />
          </ListItem>
          <ListItem isIcon>
            <Avatar bg="teal.500" size="100%" />
          </ListItem>
        </List>
      </Flex>
    </Box>
  );
};

export default Navbar;
