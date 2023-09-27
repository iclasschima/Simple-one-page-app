import { ChakraProvider, CSSReset, Container } from "@chakra-ui/react";
import CourseList from "./components/CourseList";
import Header from "./components/Header";
import "./App.css";
import CourseSummary from "./components/CourseSummary";

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Container maxW={{ base: "100%", lg: "90%" }} py={2}>
        <Header />
        <CourseSummary />
        <CourseList courses={courses} />
      </Container>
    </ChakraProvider>
  );
}

export default App;

const courses = [
  {
    id: 1,
    title: "Introduction to Python Programming",
    description: "Learn the fundamentals of Python programming language.",
    instructor: "John Smith",
    duration: "4",
    price: 49.99,
  },
  {
    id: 2,
    title: "JavaScript for Beginners",
    description: "A beginner-friendly course to master JavaScript.",
    instructor: "Emily Johnson",
    duration: "6",
    price: 59.99,
  },
  {
    id: 3,
    title: "Web Development with React",
    description: "Build modern web applications using React.",
    instructor: "Michael Brown",
    duration: "8",
    price: 79.99,
  },
  {
    id: 4,
    title: "Data Structures and Algorithms",
    description: "Master essential data structures and algorithms concepts.",
    instructor: "Sarah Davis",
    duration: "10",
    price: 89.99,
  },
  {
    id: 5,
    title: "Advanced Java Programming",
    description:
      "Take your Java skills to the next level with advanced topics.",
    instructor: "Robert Clark",
    duration: "8",
    price: 69.99,
  },
];
