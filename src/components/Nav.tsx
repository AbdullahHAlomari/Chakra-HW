import React from "react";
import {
  chakra,
  Box,
  Flex,
  Text,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  Image,
  CloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";


export default function Nav(){
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
      overflow="hidden"
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        zIndex="0"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto" zIndex="1">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >

              <VisuallyHidden>tripsa</VisuallyHidden>
            </chakra.a>
            <chakra.h1 color={"#2596be"} fontSize="xl" fontWeight="medium" ml="2">
              <Text fontSize={28} fontWeight={"bold"}>
              tripSA
              </Text>
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              zIndex="1"
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Button variant="ghost">DISCOVER</Button>
              <Button variant="ghost">ABOUT</Button>
              <Button variant="ghost">SIGN IN</Button>
            </HStack>
            <Button colorScheme="brand" size="sm">
              Get Started
            </Button>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
                zIndex={1}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Button w="full" variant="ghost">
                  DISCOVER
                </Button>
                <Button w="full" variant="ghost">
                  ABOUT
                </Button>
                <Button w="full" variant="ghost">
                  SIGN IN
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};