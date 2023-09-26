import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import CustomSidePanel from "./SideModal";
import { AiOutlineClose } from "react-icons/ai";

export default function Edit({ setIsOpen, isOpen, handleSubmit, course }) {
  const [state, setState] = useState({ ...course });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  useEffect(() => {
    setState({ ...course, duration: parseInt(course?.duration) });
  }, [course]);

  return (
    <CustomSidePanel isOpen={isOpen}>
      <Flex flexDir={"column"}>
        <Flex justify={"flex-end"}>
          <Box onClick={() => setIsOpen(!isOpen)} cursor={"pointer"}>
            <AiOutlineClose size={20} />
          </Box>
        </Flex>

        <Flex mt={3} flexDir={"column"} gap={2}>
          <Text as="H4" fontSize={19}>
            Edit Course
          </Text>
        </Flex>

        <Flex my={6} gap={5} flexDir={"column"}>
          <FormControl>
            <FormLabel fontSize={14}>Course title</FormLabel>
            <Input
              fontSize={14}
              placeholder="Enter course name"
              name="title"
              onChange={handleChange}
              value={state.title}
            />
          </FormControl>

          <FormControl>
            <FormLabel fontSize={14}>Course description</FormLabel>
            <Textarea
              fontSize={14}
              placeholder="Enter course description"
              name="description"
              value={state.description}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel fontSize={14}>Instructor</FormLabel>
            <Input
              fontSize={14}
              placeholder="Enter instructor name"
              name="instructor"
              onChange={handleChange}
              value={state.instructor}
            />
          </FormControl>

          <FormControl>
            <FormLabel fontSize={14}>Duration (in weeks)</FormLabel>
            <Input
              fontSize={14}
              type="number"
              placeholder="Enter duration"
              name="duration"
              onChange={handleChange}
              value={state.duration}
            />
          </FormControl>

          <FormControl>
            <FormLabel fontSize={14}>Price</FormLabel>
            <Input
              fontSize={14}
              type="number"
              placeholder="Enter price"
              name="price"
              onChange={handleChange}
              value={state.price}
            />
          </FormControl>
        </Flex>

        <Flex justify={"flex-end"} mt={2}>
          <Button onClick={() => handleSubmit(state)}>Save changes</Button>
        </Flex>
      </Flex>
    </CustomSidePanel>
  );
}
