import { Text } from "@chakra-ui/react";
import {useNavigate} from "react-router-dom"
import { Box } from "@chakra-ui/react";
import React from "react";
import SideDrawer from "./SideDrawer";

const Navbar2 = () => {
  const navigate=useNavigate()
  const handleRouter=()=>{
    navigate("/products")
  }
  return (
    <>
      <Box
        cursor="pointer"
        fontSize={{ md: "16px" }}
        display="flex"
        alignItems={"center"}
        gap={{ lg: "30px", md: "25px" }}
        w={{ lg: "100%" }}
        backgroundColor="#232f3e"
        color="white"
      >
        <Box
          display="flex"
          alignItems={"center"}
          _hover={{ borderWidth: "1px" }}
        >
          {" "}
          <SideDrawer />
          All
        </Box>
        <Text
        onClick={handleRouter}
          cursor="pointer"
          display={{ md: "block", lg: "block", base: "none" }}
        >
          Amazon miniTV
        </Text>
        <Text
        onClick={handleRouter}
          cursor="pointer"
          display={{ md: "none", lg: "block", base: "none" }}
        >
          Sell
        </Text>
        <Text
        onClick={handleRouter}
          cursor="pointer"
          display={{ md: "block", lg: "block", base: "none" }}
        >
          Best Sellers
        </Text>
        <Text
        onClick={handleRouter}
          cursor="pointer"
          display={{ md: "none", lg: "block", base: "none" }}
        >
          Mobiles
        </Text>
        <Text
        onClick={handleRouter}
          cursor="pointer"
          display={{ md: "none", lg: "block", base: "none" }}
        >

          Today's Deals
        </Text>
        <Text
        onClick={handleRouter}
          cursor="pointer"
          display={{ md: "none", lg: "block", base: "none" }}
        >
          Customer Service
        </Text>
        <Text
        onClick={handleRouter}
          cursor="pointer"
          display={{ md: "block", lg: "block", base: "none" }}
        >
          Electronics
        </Text>
        <Text
        onClick={handleRouter}
          cursor="pointer"
          display={{ md: "none", lg: "block", base: "none" }}
        >
          Prime
        </Text>
        <Text
        onClick={handleRouter}
          cursor="pointer"
          display={{ md: "none", lg: "block", base: "none" }}
        >
          New Releases
        </Text>
        <Text
        onClick={handleRouter}
          cursor="pointer"
          display={{ md: "block", lg: "block", base: "none" }}
        >
          Amazon Pay
        </Text>
        <Text
        onClick={handleRouter}
          cursor="pointer"
          display={{ md: "block    ", lg: "block", base: "none" }}
        >
          Home & Kitchen
        </Text>
      </Box>
    </>
  );
};

export default Navbar2;
