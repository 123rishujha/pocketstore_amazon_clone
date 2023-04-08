import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const CheckOut = () => {
  return (
    <>
      <Box>
        <Heading>Enter a new shipping Address</Heading>
        <Box
          display={"grid"}
          gridTemplateColumns={{ lg: "repeat(2,60% 30%)" }}
          m={"15px auto"}
          p={"auto"}
          w={{ lg: "65%" }}
          gap={{ lg: "40px" }}
        >
          <Box
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            padding={"10px"}
            borderRadius={"10px"}
          >
            <Text textAlign={"left"} fontSize={"25px"} fontWeight={600}>
              Add a new address
            </Text>
            <Stack>
              <FormControl id="country">
                <FormLabel>Country/Region</FormLabel>
                <Input type="text" size="sm" borderRadius={"5px"} />
              </FormControl>

              <FormControl id="first_last_name">
                <FormLabel>Full name (First and Last name)</FormLabel>
                <Input type="text" size="sm" borderRadius={"5px"} />
              </FormControl>

              <FormControl id="street_number">
                <FormLabel>Street number</FormLabel>
                <Input
                  type="text"
                  placeholder="Street address,PO.box,company namr, c/o"
                  size="sm"
                  borderRadius={"5px"}
                  mb={"5px"}
                />
                <Input
                  type="text"
                  placeholder="Apartment,suit unit,building,floor, etc"
                  size="sm"
                  borderRadius={"5px"}
                />
              </FormControl>

              <FormControl id="city">
                <FormLabel>City</FormLabel>
                <Input type="text" size="sm" borderRadius={"5px"} />
              </FormControl>

              <FormControl id="state">
                <FormLabel>State / Province / Region</FormLabel>
                <Input type="text" size="sm" borderRadius={"5px"} />
              </FormControl>

              <FormControl id="pincode">
                <FormLabel>PIN Code</FormLabel>
                <Input type="number" size="sm" borderRadius={"5px"} />
              </FormControl>

              <FormControl id="phone_np">
                <FormLabel>Phone number</FormLabel>
                <Input type="number" size="sm" borderRadius={"5px"} />
                <Text
                  textAlign={"left"}
                  fontSize={"12px"}
                  fontWeight={500}
                  color={"gray.600"}
                >
                  My be used to asssist delivery
                </Text>
              </FormControl>
              <Checkbox>Use as my defult address</Checkbox>
              <Button bgColor={"yellow.600"} _hover={"yellow.600"}>
                Proseed to payment
              </Button>
            </Stack>
          </Box>

          <Box
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            h={"279px"}
            borderRadius={"10px"}
          >
           <Box p={'10px'}>
           <Button
              color={"gray.400"}
              bgColor={"yellow.100"}
              fontWeight={400}
              fontSize={"14px"}
              w={"100%"}
              _hover={{ bgColor:"yellow.100"}}
            >
              {" "}
              Use this address
            </Button>
            <Text textAlign={"justify"} fontSize={"12px"}>
              Choose an address to continue checking out. You will still have a
              chance to review and edit your order before it is final.
            </Text>
            <hr />
            <Text fontWeight={700}  textAlign={"left"}>Order Summary</Text>
            <Flex align={"center"} justifyContent={"space-between"}>
              <Text>items:</Text>
              <Text>--</Text>
            </Flex>
            <Flex align={"center"} justifyContent={"space-between"}>
              <Text>Delivery:</Text>
              <Text>--</Text>
            </Flex>
            <hr />
            <Flex color={"red.700"} fontSize={"25px"}fontWeight={600}  align={"center"} justifyContent={"space-between"}>
              <Text>Order Total:</Text>
              <Text>₹1,137.00</Text>
            </Flex>
           </Box>

            <Box w="100%" h={'54px'} borderWidth={'1px'} borderRadius={"0 0 5px 5px"} bgColor={"gray.200"}paddingTop={'11px'} fontSize={'12px'} cursor={"pointer"} _hover={{textDecoration:"underline"}}color={'blue.500'}>How are delivery costs calculated?</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CheckOut;
