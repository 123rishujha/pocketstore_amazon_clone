import {
  Box,
  Image,
  Input,
  InputRightElement,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import { BiUserCircle } from "react-icons/bi";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../media/pocketstore.png";
import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import usaIcon from "../media/India.webp";
import Navbar2 from "./Navbar2";

const Navbar1 = () => {
  return (
    <>
      <Box
        display={"flex"}
        w={{ base: "100%", md: "100%", lg: "100%" }}
        position={"sticky"}
        color={"white"}
        justifyContent={{
          base: "space-around",
          md: "space-around",
          lg: "space-around",
        }}
        alignItems={"center"}
        top={"0"}
        bg={"#131921"}
        marginBottom={"0px"}
        padding={"5px"}
        zIndex={2}
      >
        <Box w={{ base: "13%", md: "6%", lg: "3.5%" }} _hover={{borderWidth:"1px"}}>
          <Link to="/">
            <Image src={logo} alt="" />
          </Link>
        </Box>
        <InputGroup
          bg={"white"}
          color={"black"}
          w={{ base: "50%", md: "45%", lg: "60%" }}
          //  h={{base:"20px"}}
          borderRadius={"5px"}
        >
          <Input
            h={{ base: "30px", md: "40px", lg: "40px" }}
            border="none"
            _hover={{ border: "none" }}
            type="text"
            placeholder="Search Amazon.in"
            borderRadius={"5px"}
          />
          <InputRightElement
            borderRadius={"0px 5px 5px 0px"}
            h={"full"}
            m={"0 0px"}
            bg={"#febd69"}
          >
            <SearchIcon />
          </InputRightElement>
        </InputGroup>

        <Image
          src={usaIcon}
          alt=""
          display={{ lg: "flex", md: "", base: "none" }}
          w={{ base: "4%", md: "5%", lg: "2%" }}
        />

        <Box
          display={{ lg: "flex", md: "", base: "none" }}
          gap={"55px"}
          fontSize={"15px"}
        >
          <Link to="/login"  _hover={{borderWidth:"1px"}}>
            <BiUserCircle fontSize={"25px"} />{" "}
            <Text fontSize={"10px"}>Sign in</Text>
          </Link>
          <Link to="/adminlogin">
            <MdOutlineAdminPanelSettings fontSize={"25px"} />
            <Text fontSize={"10px"}>Admin</Text>
          </Link>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={{ md: "20px", base: "10px" }}
        >
          <Link>
            <HiOutlineShoppingCart fontSize={"30px"} />
          </Link>
         
        </Box>
      </Box>
      <Navbar2/>
    </>
  );
};

export default Navbar1;
