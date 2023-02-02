import React, { useState } from "react";
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, chakra, Divider, Flex, Heading, HStack, Icon, Image, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";


import { MdEmail, MdHeadset, MdLocationOn } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";

export default function Home(){
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  } as const;

  const slides = [
    {
      img: "https://scoopempire.com/wp-content/uploads/2019/11/FI.jpeg",
      label: "Riyadh season",
      description: "2022",
    },
    {
      img: "https://www.abercrombiekent.co.uk/-/media/abercrombieandkent/images/page-header-images/north-africa---middle-east/saudi-arabia/maraya-hall_alula_credit-visit-saudi.jpg?la=en&hash=0FFE992609CC65A3360CD0B7F76AB11DF913A163",
      label: "Al-Ula",
      description: "2023",
    },
    {
      img: "https://www.visitsaudi.com/content/dam/saudi-tourism/media/tour-packages/jeddah/1920x1080/Jeddah-beach-at-Night.jpg",
      label: "Jeddah",
      description:
        "2023",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide: number) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all 2s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Box zIndex="0">
    <Flex
      w={"80%"}
      bg="#eee"
      _dark={{ bg: "#3e3e3e" }}
      p={0}
      alignItems="center"
      justifyContent="center"
      margin={"20px auto"}
    >
      <Flex w="full" pos="relative" overflow="hidden">
        <Flex h="400px" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
              />
              <Stack
                p="8px 12px"
                pos="absolute"
                bottom="24px"
                textAlign="center"
                w="full"
                mb="8"
                color="white"
              >
                <Text fontSize="2xl">{slide.label}</Text>
                <Text fontSize="lg">{slide.description}</Text>
              </Stack>
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", null, "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: "blackAlpha.800" }}
              onClick={() => setSlide(slide)}
            ></Box>
            
          ))}
        </HStack>
      </Flex>
    </Flex>

    {/* -----------------Article------------- */}
    


    <Box className="textbody">
        <Text id="titlestep" fontSize={'48px'} marginTop={'80px'} color={"#2596be"}>
        Discover Saudi Arabia
        </Text>
        </Box>

        {/* ----------------------------Cards--------------------- */}

        <SimpleGrid columns={3} spacing={10} bg={"#eee"} padding={"100px 100px"}>

    <Card w='100%' margin={"0px auto"} boxShadow={"xl"}>
  <CardBody> 
    <Image h={"40vh"}
      src='https://www.timeoutriyadh.com/cloud/timeoutriyadh/2022/10/21/Winter-Wonderland-in-Riyadh-2022.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='6'>
      <Heading size='md'>Winter wonderland, Riyadh</Heading>
      <Text color={"#6d6e6e"}>
      The biggest theme park in its third season, combining rides & adventures in a unique experience for all ages.

      </Text>
    </Stack>
  </CardBody>
</Card>



<Card w='100% ' margin={"0px auto"} boxShadow={"xl"}>
  <CardBody>
    <Image h={"40vh"}
      src='https://www.visitsaudi.com/content/dam/saudi-tourism/media/arabian-winter/articles/the-cultural-secrets-of-alula/Stargazing-resized.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='6'>
      <Heading size='md'>Star party, Al-Ula</Heading>
      <Text color={"#6d6e6e"}>
      Relive the experience with a night of stargazing at Al Gharameel, where guests can recline on traditional seating and gaze up to the Milky Way stretching from horizon to horizon.  

      </Text>
    </Stack>
  </CardBody>
</Card>



<Card w='100%' margin={"0px auto"} boxShadow={"xl"}>
  <CardBody>
    <Image h={"40vh"}
      src='http://dqliving.com/wp-content/uploads/2022/06/Jeddah-Season-2.jpeg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='6'>
      <Heading size='md'>City Walk, Jeddah</Heading>
      <Text color={"#6d6e6e"}>
      A recreational zone for the whole family, various activities some of which are for the first time in Jeddah and the whole world, its shops and restaurants are diverse that satisfy all tastes.

      </Text>
    </Stack>
  </CardBody>
</Card>

    </SimpleGrid>



        {/* ---------------Article------------- */}
        
      

<Flex
      bg="#eee"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        maxW={{ lg: "5xl" }}
        shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}
      >
        <Box w={{ lg: "50%" }}>
          <Box
            h={{ base: 64, lg: "full" }}
            rounded={{ lg: "lg" }}
            bgSize="cover"
            style={{
              backgroundImage:
                "url('https://scth.scene7.com/is/image/scth/card-01-319')",
            }}
          ></Box>
        </Box>

        <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
          <chakra.h2
            fontSize={{ base: "2xl", md: "3xl" }}
            color="gray.800"
            _dark={{ color: "white" }}
            fontWeight="bold"
          >
            Language{" "}
            <chakra.span color="brand.600" _dark={{ color: "brand.400" }}>
              
            </chakra.span>
          </chakra.h2>
          <chakra.p mt={4} color="gray.600" _dark={{ color: "gray.400" }}>
          
Arabic is the official language of Saudi Arabia and the primary language used in all dealings and public transactions. English serves as an informal second language in the Kingdom and is spoken by a large section of its society. All road signs are bilingual, showing information in both Arabic and English. 
          </chakra.p>

        </Box>
      </Box>
    </Flex>

    {/* --------------Second Article------------- */}

    <Flex
      bg="#eee"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        maxW={{ lg: "5xl" }}
        shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}
      >

<Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
          <chakra.h2
            fontSize={{ base: "2xl", md: "3xl" }}
            color="gray.800"
            _dark={{ color: "white" }}
            fontWeight="bold"
          >
            Culture{" "}
            <chakra.span color="brand.600" _dark={{ color: "brand.400" }}>
              
            </chakra.span>
          </chakra.h2>
          <chakra.p mt={4} color="gray.600" _dark={{ color: "gray.400" }}>
          
          Saudi Arabia’s rich heritage and traditions have been shaped by its position as a historic trade hub and the birthplace of Islam. In recent years, the Kingdom has undergone a significant cultural transformation, evolving centuy-old customs to fit the contemporary world we live in today.
          </chakra.p>

        </Box>
        <Box w={{ lg: "50%" }}>
          <Box
            h={{ base: 64, lg: "full" }}
            rounded={{ lg: "lg" }}
            bgSize="cover"
            style={{
              backgroundImage:
                "url('https://scth.scene7.com/is/image/scth/card-02-303')",
            }}
          ></Box>
        </Box>

        
      </Box>
    </Flex>
    
    </Box>



    
    
    
  );
};


// --------------------------------



