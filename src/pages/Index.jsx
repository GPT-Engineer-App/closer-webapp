import React from "react";
import { ChakraProvider, Box, Grid, GridItem, VStack, Text, Input, Button, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Avatar, InputGroup, InputRightElement, Divider } from "@chakra-ui/react";
import { FaBars, FaPaperPlane, FaUsers } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <ChakraProvider>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <GridItem colSpan={12}>
            <VStack spacing={8}>
              <IconButton ref={btnRef} colorScheme="teal" onClick={onOpen} icon={<FaBars />} aria-label="Open Menu" size="lg" alignSelf="flex-start" />
              <Text fontSize="3xl" fontWeight="bold">
                Team Collaboration Dashboard
              </Text>
              <Divider />
              <Chat />
            </VStack>
          </GridItem>
        </Grid>
      </Box>

      {/* Drawer Menu */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4}>
              <Button leftIcon={<FaUsers />} w="full" justifyContent="flex-start">
                Team Members
              </Button>
              <Button leftIcon={<FaPaperPlane />} w="full" justifyContent="flex-start">
                Messages
              </Button>
              <Button leftIcon={<FaBars />} w="full" justifyContent="flex-start">
                Tasks
              </Button>
              <Button leftIcon={<FaBars />} w="full" justifyContent="flex-start">
                Settings
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </ChakraProvider>
  );
};

const Chat = () => {
  return (
    <VStack w="100%" h="500px" p={4} borderWidth="1px" borderRadius="lg" overflowY="scroll">
      <VStack w="100%" spacing={4} alignItems="flex-start">
        {/* Placeholder for chat messages */}
        <Box w="100%" h="300px">
          {/* Messages will be displayed here */}
        </Box>
        <InputGroup size="md">
          <Input pr="4.5rem" type="text" placeholder="Type your message..." />
          <InputRightElement width="4.5rem">
            <IconButton h="1.75rem" size="sm" onClick={() => {}} icon={<FaPaperPlane />} aria-label="Send Message" />
          </InputRightElement>
        </InputGroup>
      </VStack>
    </VStack>
  );
};

export default Index;
