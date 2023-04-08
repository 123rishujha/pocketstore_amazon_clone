import {
  Box,
  Image,
  Text,
  Button,
  Link,
  Heading,
  AlertIcon,
  Alert,
  Flex,
  Checkbox 
} from "@chakra-ui/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import swal from "sweetalert";
import React from "react";

const Cart = () => {
  const handledelete = async () => {
    const willDelete = await swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this product ?",
      icon: "warning",
      dangerMode: true,
    });

    if (willDelete) {
      swal("Deleted!", "Your imaginary file has been deleted!", "success");
    }
  };
  return (
    <>
      <Box mt={{ lg: "40px" }}>
        <Heading>Shopping Cart</Heading>
        <Box
          m={"20px auto"}
          display={"flex"}
          w={{ lg: "70%", md: "90%", base: "95%" }}
          flexDirection={{
            base: "column",
            md: "column",
            lg: "row",
          }}
          gap={"15px"}
        >
          <Box
            borderWidth={"1px"}
            display={"flex"}
            borderRadius={"10px"}
            flexDirection={{base:"column",lg:"row",md:"row"}}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          >
            <Box m={{lg:"0",base:'auto',md:'0'}}p={"10px"} w={{ lg: "20%",md:"18%",base:"40%"}} >
              <Image
              
                src={
                  "https://m.media-amazon.com/images/I/81kDI4r4jkL._AC_UL480_FMwebp_QL65_.jpg"
                }
                alt="images"
              />
            </Box>
            <Box ml={"10px"} textAlign={"left"} fontWeight={600}>
              {" "}
              <Text fontWeight={600} fontSize={"20px"}>
                Full Sleeve Blue Solid Women's Denim Jacket
              </Text>
              <Text >Marks &amp; Spencer</Text>
              <Text >women-clothing</Text>
              <Box pl={{lg:"10px",base:'90px',md:'10px'}}
                display={"flex"}
                alignItems={"center"}
                m={"10px 0"}
                gap={"10px"}
              >
                {" "}
                <Button>-</Button>
                <Text>1</Text>
                <Button>+</Button>
              </Box>
              <Box
              pl={{lg:"10px",base:'100px',md:'10px'}}
                display={"flex"}
                alignItems={"center"}
                m={"10px 0"}
                gap={"10px"}
              >
                {" "}
                <Text>Rs 305</Text>
                <Text textDecoration={"line-through"} color={'red.400'}>Rs 509</Text>
              </Box>
              <Button ml={{lg:"10px",base:'116px',md:'10px'}} mb={{base:'10px'}} onClick={handledelete}>
                <RiDeleteBin5Line />
              </Button>
            </Box>
          </Box>


          <Box
          align="center"
          display={'flex'}
          flexDirection={'column'}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            p={"10px"}
            borderRadius={"10px"}
          >
            <Alert
              bgColor={"white"}
              status="success"
              color="green.600"
              display={"flex"}
              alignItems={"center"}
            >
              <AlertIcon boxSize="15px" ml={{lg:"-5%",}} />
              Your order is eligible for FREE Delivery.
            </Alert>
            <Text textAlign={'left'} ml={{md:'40px',lg:"25px"}}>
              {" "}
              Select this option at checkout.{" "}
              <Link color="green.600">Details</Link>
            </Text>
            <Flex gap="10px" m="10px 30px 0 " align={"center"}>
              <Text fontWeight={700} fontSize={"20px"}>
                Subtotal(2 items):
              </Text>
              <Text fontWeight={600}>Rs 786</Text>
            </Flex>
            <Checkbox >This order contains a gift</Checkbox>
            <Button bgColor={'yellow.400'} w={'100%'} mt="10px">Proceed to Buy</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
