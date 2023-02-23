import React from "react";
// import {Link} from "react-router-dom"
import { Box, Flex, Text } from "@chakra-ui/react";
const Footer1 = () => {
  return (
    <Box
      fontWeight="500"
      textAlign={"center"}
      m={"auto"}
      borderTop={"1px solid rgb(189, 187, 187)"}
      fontSize={{ base: "12px", md: "12px", lg: "13px" }}
      w={{ base: "100%", md: "100%", lg: "100%" }}
    >
      <Flex
        // borderWidth={"1px"}
        m={"10px auto"}
        color={"skyblue"}
        alignItems={"center"}
        justifyContent={"space-between"}
        w={{ base: "70%", md: "30%", lg: "20%" }}
      >
        <Text cursor={"pointer"} _hover={{textDecoration:"underline"}}>
          {" "}
          Conditions of Use{" "}
        </Text>
        <Text cursor={"pointer"} _hover={{textDecoration:"underline"}}>
          {" "}
          Privacy Notice{" "}
        </Text>{" "}
        <Text cursor={"pointer"} _hover={{textDecoration:"underline"}}>
          Help
        </Text>
      </Flex>

      <Text marginBottom={"20px"}>
        © 1996-2023, Amazon.com, Inc. or its affiliates
      </Text>
    </Box>
  );
};

export default Footer1;
