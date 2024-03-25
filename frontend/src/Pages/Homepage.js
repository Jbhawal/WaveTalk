import { Box, Container, Text, Tab, TabList,TabPanel,TabPanels,Tabs } from '@chakra-ui/react'
import React from 'react'
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

const Homepage = () => {
  return (
    <Container maxW='xl' alignContent="center">
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        background="rgba(165,217,230, 0.5)"
        w="100%"
        m="20px 0 20px 0"
        borderRadius ="lg"
        borderWidth="1px"
        borderColor="black"
      >
        <Text fontSize='4xl' color= "black" align="center" fontFamily="Comfortaa">WaveTalk</Text>
      </Box>
      <Box bg="white" w="100%" p={4} color="black" borderRadius="lg" borderWidth="1px" borderColor="black" margin="10px 0 20px 0">
        <Tabs variant='soft-rounded' >
          <TabList>
            <Tab width="50%" background="rgba(165,217,230, 0.5)" m="2px" borderWidth="1px" borderColor="black">Login</Tab>
            <Tab width="50%" background="rgba(165,217,230, 0.5)" m="2px" borderWidth="1px" borderColor="black">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel >
              <Login/>
            </TabPanel>
            <TabPanel>
              <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage
