/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const SideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
const navigate=useNavigate()

const handleadmin=()=>{
  navigate("//adminlogin")
}

  const siginhandle=()=>{
    navigate("/login")
  }
  return (
    <>
      <Button
        ref={btnRef}
        bg={"none"}
        fontSize={"28px"}
        onClick={onOpen}
        _hover={{ bg: "none" }}
      >
        <HamburgerIcon />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} bg={"blur"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={"white"} />
          <DrawerHeader backgroundColor="#232f3e">
            <Box
            onClick={siginhandle}
            cursor={"pointer"}
              display={"flex"}
              alignItems={"center"}
              gap="20px"
              color={"white"}
              fontWeight={500}
            >
              <FaUserCircle fontSize={"30px"} />
              Hello,Sign in
            </Box>
          </DrawerHeader>
         

          <DrawerBody p={"20px 20px"} fontWeight={400}>
         <Box>
          <Text cursor={"pointer"} p={'5px'} fontWeight={600} fontSize={"20px"}>Trending</Text>
          <Text cursor={"pointer"} p={'5px'}>Best Sellers</Text>
          <Text cursor={"pointer"} p={'5px'}>New Releases</Text>
          <Text cursor={"pointer"} p={'5px'}> Movers and Shakers</Text>
         </Box>
         <hr />
        
          <Box>
          <Text cursor={"pointer"} p={'5px'} fontWeight={600} fontSize={"20px"}>Digital Content And Devices</Text>
          <Accordion defaultIndex={[0]} allowMultiple  >
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Echo & Alexa
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
   <Text m={'10px 0'}>All-new Echo Dot (4th Gen)</Text>
   <Text m={'10px 0'}>Echo Dot (3rd Gen)</Text>
   <Text m={'10px 0'}>Echo Show 8</Text>
   <Text m={'10px 0'}>All-new Echo (4th Gen)</Text>
   <Text m={'10px 0'}>Echo Show 5</Text>
   <Text m={'10px 0'}>Echo Studio</Text>
   <Text m={'10px 0'}>All-new Echo Show 10</Text>
   <Text m={'10px 0'}>See all devices with Alexa</Text>
   <hr />
   <Text cursor={"pointer"} p={'5px'} fontWeight={600} fontSize={"20px"}>Content & Resources</Text>
    <Text m={"10px 0"}>Meet Alexa</Text>
    <Text m={"10px 0"}>Alexa Skills</Text>
    <Text m={"10px 0"}>Alexa App</Text>
    <Text m={"10px 0"}>Alexa Smart Home</Text>
    <Text>Amazon Prime Music</Text>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
{/* ---------------------------------- */}
  <Accordion defaultIndex={[0]} allowMultiple  >
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Fire TV
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
   <Text m={'10px 0'}>Introducing: Fire TV Stick Lite</Text>
   <Text m={'10px 0'}>All-new Fire TV Stick (3rd Gen)</Text>
   <Text m={'10px 0'}>Fire TV Stick 4K</Text>
   <Text m={'10px 0'}>Fire TV Cube</Text>
   <Text m={'10px 0'}>Amazon Prime Video</Text>
   <Text m={'10px 0'}>Fire TV Apps & Games</Text>
   <Text m={'10px 0'}>See all Fire TV devices</Text>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
{/* ------------------------------------------------ */}
<Accordion defaultIndex={[0]} allowMultiple  >
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
     Kindle E-Readers
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
   <Text m={'10px 0'}>All-new Kindle</Text>
   <Text m={'10px 0'}>All-new Kindle Paperwhite</Text>
   <Text m={'10px 0'}>Kindle Paperwhite Starteer Pack</Text>
   <Text m={'10px 0'}>All-New Kindle Oasis</Text>
   <Text m={'10px 0'}>Refurbished & Open Box</Text>
   <Text m={'10px 0'}>Kindle E-Reader Accessories</Text>
   <Text m={'10px 0'}>See all kindle E-readers</Text>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
{/* --------------------------------------- */}
<Accordion defaultIndex={[0]} allowMultiple  >
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
     Audible Audiobooks
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
   <Text m={'10px 0'}>Audible Membership</Text>
   <Text m={'10px 0'}>All Audiobooks</Text>
   <Text m={'10px 0'}>Best Sellers</Text>
   <Text m={'10px 0'}>New Releases</Text>
   <Text m={'10px 0'}>Hindi Releases</Text>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
{/* --------------------------------------- */}
<Accordion defaultIndex={[0]} allowMultiple  >
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
   Amazon Prime Video
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
   <Text m={'10px 0'}>All Videos</Text>
   <Text m={'10px 0'}>Store</Text>
   <Text m={'10px 0'}>Categories</Text>
   <Text m={'10px 0'}>My Stuff</Text>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
{/* ------------------------------------------ */}
<Accordion defaultIndex={[0]} allowMultiple  >
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
   Amazon Prime Music
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
   <Text m={'10px 0'}>Amazon Prime Music</Text>
   <Text m={'10px 0'}>Open web player</Text>
   <Text m={'10px 0'}>Voice controlled with Alexa</Text>
   <Text m={'10px 0'}>Amazon Prime Music Apps</Text>
   <Text m={'10px 0'}>CDs and Vinyls</Text>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
<Text cursor={"pointer"} p={'5px'} fontWeight={600} fontSize={"20px"}>Shop By Category</Text>
<Text m={'10px 0'} cursor={'pointer'}>Mobiles,Computers</Text>
<Text m={'10px 0'} cursor={'pointer'}>TV,Appliance,Electronics</Text>
<Text m={'10px 0'} cursor={'pointer'}>Men's Fashion</Text>
<Text m={'10px 0'} cursor={'pointer'}>Women's Fashion</Text>
<hr />
<Text cursor={"pointer"} p={'5px'} fontWeight={600} fontSize={"20px"}>Programs & Features</Text>
<Text m={'10px 0'} cursor={'pointer'}>Gift Cards & Mobile Recharges</Text>
<Text m={'10px 0'} cursor={'pointer'}>Flight Tickets</Text>
<Text m={'10px 0'} cursor={'pointer'}>Clearance store</Text>
<hr />
<Text cursor={"pointer"} p={'5px'} fontWeight={600} fontSize={"20px"}>Help & Settings</Text>
<Text m={'10px 0'} cursor={'pointer'} >Customer Service</Text>
<Text m={'10px 0'} cursor={'pointer'}  onClick={handleadmin}>Admin</Text>
<Text m={'10px 0'} cursor={'pointer'}  onClick={siginhandle}>Sign in</Text>
          </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
