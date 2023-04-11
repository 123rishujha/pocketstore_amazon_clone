import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [phone, setPhone] = useState("");
  const navigate=useNavigate()

  const { cartData } = useSelector((store) => store.cartReducers);
  const toast = useToast();
  let amount = cartData?.reduce((acc, el) => acc + el.price, 0);
  // console.log(amount);



  const handleSubmitCheckout = (e) => {
    e.preventDefault();
    let address={country,name,street,apartment,city,state,pincode,phone}
    const order = {
      product: cartData,
      address: address,
      total: amount,
    };
    axios
      .post(`https://shy-headscarf-tuna.cyclic.app/order`, order)
      .then(({ data }) => {
        // console.log(data);
        toast({
          title: "item has added to cart.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate('/payment')
      })
      .catch((err) => {
        console.log(err);
        navigate('/payment')
      });
  };

  return (
    <>
      <Box>
        <Heading>Enter a new shipping Address</Heading>
        <Box
          display={"grid"}
          gridTemplateColumns={{ lg: "repeat(2,60% 30%)",md:"repeat(1,1fr)" }}
          m={"15px auto"}
          p={"auto"}
          w={{ lg: "65%" ,md:"70%",base:"90%"}}
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
              <form onSubmit={handleSubmitCheckout}>
                <FormControl id="country">
                  <FormLabel>Country/Region</FormLabel>
                  <Input
                  required
                    type="text"
                    size="sm"
                    borderRadius={"5px"}
                    value={country}
                    onChange={(e)=>setCountry(e.target.value)}
                  />
                </FormControl>

                <FormControl id="first_last_name">
                  <FormLabel>Full name (First and Last name)</FormLabel>
                  <Input
                  required
                    type="text"
                    size="sm"
                    borderRadius={"5px"}
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  />
                </FormControl>

                <FormControl id="street_number">
                  <FormLabel>Street number</FormLabel>
                  <Input
                  required
                    type="text"
                    placeholder="Street address,PO.box,company namr, c/o"
                    size="sm"
                    borderRadius={"5px"}
                    mb={"5px"}
                    value={street}
                    onChange={(e)=>setStreet(e.target.value)}
                  />
                  <Input
                  required
                    type="text"
                    placeholder="Apartment,suit unit,building,floor, etc"
                    size="sm"
                    borderRadius={"5px"}
                    value={apartment}
                    onChange={(e)=>setApartment(e.target.value)}
                  />
                </FormControl>

                <FormControl id="city">
                  <FormLabel>City</FormLabel>
                  <Input
                  required
                    type="text"
                    size="sm"
                    borderRadius={"5px"}
                    value={city}
                    onChange={(e)=>setCity(e.target.value)}
                  />
                </FormControl>

                <FormControl id="state">
                  <FormLabel>State / Province / Region</FormLabel>
                  <Input
                  required
                    type="text"
                    size="sm"
                    borderRadius={"5px"}
                    value={state}
                    onChange={(e)=>setState(e.target.value)}
                  />
                </FormControl>

                <FormControl id="pincode">
                  <FormLabel>PIN Code</FormLabel>
                  <Input
                  required
                    type="number"
                    size="sm"
                    borderRadius={"5px"}
                    value={pincode}
                    onChange={(e)=>setPincode(e.target.value)}
                  />
                </FormControl>

                <FormControl id="phone_np">
                  <FormLabel>Phone number</FormLabel>
                  <Input required type="number" size="sm" borderRadius={"5px"}  value={phone}
                    onChange={(e)=>setPhone (e.target.value)}/>
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
              <Box >
              <Button w={'100%'} bgColor={"yellow.600"} _hover={"yellow.600"} type="submit">
                  Proseed to payment
                </Button>
              </Box>
              </form>
            </Stack>
          </Box>

          <Box
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            h={"279px"}
            borderRadius={"10px"}
          >
            <Box p={"10px"}>
              <Button
                color={"gray.400"}
                bgColor={"yellow.100"}
                fontWeight={400}
                fontSize={"14px"}
                w={"100%"}
                _hover={{ bgColor: "yellow.100" }}
              >
                {" "}
                Use this address
              </Button>
              <Text textAlign={"justify"} fontSize={"12px"}>
                Choose an address to continue checking out. You will still have
                a chance to review and edit your order before it is final.
              </Text>
              <hr />
              <Text fontWeight={700} textAlign={"left"}>
                Order Summary
              </Text>
              <Flex align={"center"} justifyContent={"space-between"}>
                <Text>items:</Text>
                <Text>--</Text>
              </Flex>
              <Flex align={"center"} justifyContent={"space-between"}>
                <Text>Delivery:</Text>
                <Text>--</Text>
              </Flex>
              <hr />
              <Flex
                color={"red.700"}
                fontSize={"25px"}
                fontWeight={600}
                align={"center"}
                justifyContent={"space-between"}
              >
                <Text>Order Total:</Text>
                <Text>₹{amount}</Text>
              </Flex>
            </Box>

            <Box
              w="100%"
              h={"54px"}
              borderWidth={"1px"}
              borderRadius={"0 0 5px 5px"}
              bgColor={"gray.200"}
              paddingTop={"11px"}
              fontSize={"12px"}
              cursor={"pointer"}
              _hover={{ textDecoration: "underline" }}
              color={"blue.500"}
            >
              How are delivery costs calculated?
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CheckOut;
