import React from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  HStack,
  Heading,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";

function Header() {
  return (
    <Box py={4}>
      <Flex alignItems="center" justify={"space-between"}>
        <Flex flexDir={"column"}>
          <Heading fontSize={["18", "25"]}>Course Management</Heading>
          <Text fontSize={["14"]}>Make sure courses are well managed!</Text>
        </Flex>

        <HStack spacing={2} ml={4}>
          <InputGroup display={["none", "none", "flex"]}>
            <Input placeholder="Search course" w={"15rem"} borderRight={0} />
            <InputRightAddon
              bg={"transparent"}
              borderLeft={0}
              zIndex={4}
              cursor={"pointer"}
            >
              <BiSearch />
            </InputRightAddon>
          </InputGroup>

          <Flex
            border="1px solid"
            borderColor={"gray.200"}
            borderRadius="md"
            p={3}
            align={"center"}
            justify={"center"}
            cursor={"pointer"}
            display={["flex", "flex", "none"]}
          >
            <BiSearch />
          </Flex>

          <Flex
            border="1px solid"
            borderColor={"gray.200"}
            borderRadius="md"
            p={3}
            align={"center"}
            justify={"center"}
            cursor={"pointer"}
          >
            <GrNotification />
          </Flex>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Header;
