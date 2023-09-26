import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { TbBooks } from "react-icons/tb";
import { AiFillTrophy } from "react-icons/ai";

export default function CourseSummary() {
  return (
    <Flex my={5} gap={6} flexDir={["column", "row"]}>
      <Flex
        gap={5}
        flexDir={"column"}
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        h={"fit-content"}
        w={["100%", "250px"]}
        minW={"fit-content"}
        p={3}
      >
        <Flex gap={3} align={"center"}>
          <Box borderRadius={"full"} p={2} bg="#E7EEF1">
            <TbBooks color="#0F4868" />
          </Box>
          <Text as={"h5"} fontSize={14}>
            Courses
          </Text>
        </Flex>

        <Flex flexDir={"column"} gap={0}>
          <Text as="h4" fontSize={18}>
            45
          </Text>
          <Text fontSize={14}>Total no. of courses</Text>
        </Flex>
      </Flex>

      <Flex
        gap={5}
        flexDir={"column"}
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        h={"fit-content"}
        w={["100%", "250px"]}
        minW={"fit-content"}
        p={3}
      >
        <Flex gap={3} align={"center"}>
          <Box borderRadius={"full"} p={2} bg="#E7EEF1">
            <AiFillTrophy color="#0F4868" />
          </Box>
          <Text as={"h5"} fontSize={14}>
            Approved
          </Text>
        </Flex>

        <Flex flexDir={"column"} gap={0}>
          <Text as="h4" fontSize={18}>
            38
          </Text>
          <Text fontSize={14}>Total no. of approved courses</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
