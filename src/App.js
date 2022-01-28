import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";


function App() {
  const color = useColorModeValue("purple.500", "purple.100");
  const logo = useColorModeValue("white", "purple.400");
  const revlogo = useColorModeValue("purple.400", "black");
  const backcard = useColorModeValue("purple.200", "gray.700");

  const handlegithub = () => {
    window.open("https://github.com/Anshuman2305");
  };
  const handlelinkedin = () => {
    window.open("https://www.linkedin.com/in/anshuman-mohanty-33463b190");
  };

  const initialTodos = [
    {
      id: 1,
      body: "get bread",
    },
    {
      id: 2,
      body: "get butter",
    },
  ];

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex direction='column' minH='100vh'>
      <Flex p={6} direction={{ base: "column", md: "row" }}>
        <Box p="2" mx="auto" mb='9'>
          <Heading
            size="lg"
            fontWeight="bold"
            fontFamily="mono"
            bgColor={revlogo}
            color={logo}
            p={2}
            borderRadius="lg"
          >
            Todo App
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <HStack
            maxW="100vw"
            mx="auto"
            alignItems="center"
            justifyContent="center"
          >
            <Button
              colorScheme="facebook"
              onClick={handlelinkedin}
              display={{
                base: "block",
                sm: "block",
                md: "block",
                lg: "block",
                xl: "block",
              }}
              leftIcon={<FaLinkedin />}
            >
              Linkedin
            </Button>
            <Spacer />
            
            <Button
              colorScheme="twitter"
              onClick={handlegithub}
              display={{
                base: "block",
                sm: "block",
                md: "block",
                lg: "block",
                xl: "block",
              }}              
              leftIcon={<FaGithub />}
            >
              Github
            </Button>
            <Spacer />
            <IconButton
              icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
              isRound="true"
              size="lg"
              alignSelf="flex-end"
              onClick={toggleColorMode}
            />
          </HStack>
        </Box>
      </Flex>

      <Box
        display="flex"
        w="100vw"
        mx="auto"
        alignItems="center"
        justifyContent="center"
        position="relative"
        top="10vh"
        bgColor={backcard}
        maxW={{base: "90vw", sm: "90vw", md: "90vw", lg: "7xl"}}
        border="4px"
        borderRadius='lg'
        borderColor='purple.400'
      
      >
        <VStack p={4}>
          <Heading
            fontFamily="sans-serif"
            fontWeight="extrabold"
            fontSize={{ base: "24px", md: "40px", lg: "56px" }}
            color={color}
            pb="40px"
          >
            Write your Task Below
          </Heading>
          <TodoList todos={todos} deleteTodo={deleteTodo} />
          <AddTodo addTodo={addTodo} />
        </VStack>
      </Box>
      <Spacer />
      <Center position='relative' mt='20vh'>
      <Heading
            fontFamily="sans-serif"
            fontWeight="extrabold"
            fontSize={{ base: "18px", md: "24px", lg: "24px" }}
            color={color}
            pb="40px"
          >
            Made by Anshuman Mohanty
          </Heading>
          </Center>
    </Flex>
  );
}

export default App;
