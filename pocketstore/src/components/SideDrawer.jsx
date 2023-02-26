/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button 
  } from '@chakra-ui/react'
  import {HamburgerIcon} from "@chakra-ui/icons"
  
const SideDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

  

  return (
    <>
   <Button ref={btnRef} bg={'none'}  fontSize={'28px'}onClick={onOpen} _hover={{bg:"none"}}>
        <HamburgerIcon />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} bg={'blur'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
          
           
          </DrawerHeader>
          <hr />

          <DrawerBody p={'20px 20px'}>
           
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SideDrawer
