import React, { useState } from "react";
import {
  Badge,
  Box,
  HStack,
  Text,
  VStack,
  SimpleGrid,
  Flex,
  Button,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiTrash, BiEdit } from "react-icons/bi";

import { BsDot } from "react-icons/bs";
import AddCourse from "./AddCourse";
import EditCourse from "./EditCourse";

const CourseList = ({ courses: predefinedCourses }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [courses, setCourses] = useState([...predefinedCourses]);
  const [activeCourse, setActiveCourse] = useState(null);
  const handleSubmit = (course) => {
    setCourses([{ ...course, id: courses.length + 1 }, ...courses]);
    setIsOpen(false);
  };

  const handleDelete = (index) => {
    const temp = [...courses];
    temp.splice(index, 1);
    setCourses([...temp]);
  };

  const handleEdit = (editedCourse) => {
    const indexToEdit = courses.findIndex(
      (course) => course.id === editedCourse.id
    );

    if (indexToEdit !== -1) {
      const updatedCourses = [...courses];
      updatedCourses[indexToEdit] = editedCourse;
      setCourses(updatedCourses);
      setShowEdit(false);
    }
  };

  return (
    <Box mt={10}>
      <Flex mb={5} justify={"space-between"} alignItems={"center"}>
        <Text as="h4" fontSize={20}>
          All Courses
        </Text>

        <Button
          bg="#E7EEF1"
          borderRadius={"full"}
          px={[8]}
          rightIcon={<AiOutlinePlus />}
          onClick={() => setIsOpen(true)}
        >
          <Text display={["none", "flex"]}> Add new course</Text>
          <Text display={["flex", "none"]}> Add</Text>
        </Button>
      </Flex>

      <SimpleGrid spacing={8} columns={[1, 2, 3, 4]} align="start">
        {courses.map((course, index) => (
          <Box
            maxW="full"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            key={index}
          >
            <Flex
              p="4"
              flexDir={"column"}
              gap={5}
              justify={"space-between"}
              h="full"
            >
              <VStack align="start" spacing={2}>
                <Flex
                  w="full"
                  mb={2}
                  justify={"space-between"}
                  align={"center"}
                >
                  <Badge
                    bg="#E7EEF1"
                    fontSize={11}
                    px={3}
                    borderRadius={"full"}
                  >
                    Approved
                  </Badge>

                  <Flex gap={3}>
                    <Box
                      cursor={"pointer"}
                      onClick={() => {
                        setActiveCourse(course);
                        setShowEdit(true);
                      }}
                    >
                      <BiEdit />
                    </Box>
                    <Box cursor={"pointer"} onClick={() => handleDelete(index)}>
                      <BiTrash color="red" />
                    </Box>
                  </Flex>
                </Flex>

                <Text fontSize="md" fontWeight="semibold">
                  {course.title}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {course.description}
                </Text>
              </VStack>

              <Box>
                <HStack spacing={2}>
                  <Text fontWeight="bold" fontSize="lg">
                    ${course.price}
                  </Text>
                  <Text
                    textDecoration="line-through"
                    color="gray.500"
                    fontSize={15}
                  >
                    $
                    {(
                      parseInt(course.price) * 0.1 +
                      parseInt(course.price)
                    )?.toFixed(2)}
                  </Text>
                </HStack>

                <HStack alignSelf={"baseline"}>
                  <Text fontSize={"sm"}>{course.instructor}</Text>
                  <BsDot />
                  <Text fontSize={"sm"}>{course.duration} weeks</Text>
                </HStack>
              </Box>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
      <AddCourse
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleSubmit={handleSubmit}
      />
      <EditCourse
        isOpen={showEdit}
        setIsOpen={setShowEdit}
        handleSubmit={handleEdit}
        course={activeCourse}
      />
    </Box>
  );
};

export default CourseList;
