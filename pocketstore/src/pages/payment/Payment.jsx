import { Box, Button, Checkbox, Heading, Text ,Image, useToast} from "@chakra-ui/react";
import axios from "axios";  
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Payment = () => {
    const [append,setAppend]=useState([])
    const navigate=useNavigate()
    const toast=useToast()
    const {cartData}=useSelector((store)=>store.cartReducers)
    let Total = cartData?.reduce((acc, el)=>acc+el.price, 0)
   const paymentDone=()=>{
    toast({
      title: "place order.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
navigate("/")
   }
  const orderDataGet = () => {
axios.get(`https://shy-headscarf-tuna.cyclic.app/order`).then((res)=>{
    console.log("data",res.data)
    setAppend(res.data)
}).catch((err)=>{
console.log(err)
})
  }
useEffect(()=>{
    orderDataGet()
},[])

  return (
    <>
      <Box
        w={{ lg: "70%", md: "70%", base: "90%" }}
        m={"20px auto"}
      >
        <Box>
              {append.map((e)=>(
                <Box key={e.id} >
                 <Box fontWeight={500} fontSize={'25px'} borderWidth={'1px'} textAlign={"left"}>
                     <Text bgColor={"orange.300"} padding={'10px'}>Address</Text>
                    <Text>Name: {e?.address?.name}</Text>
                    <Text>City: {e?.address?.city}</Text>
                    <Text>Country: {e?.address?.country}</Text> 
                    <Text>Mobile No:{e?.address?.mobile}</Text>
                    <Text>Total: {e?.total}</Text>
                 </Box>
                    
                </Box>
              ))}

        </Box>
        <Box>
          <Heading>Payment</Heading>
          <br />

          <Button
            m={"auto"}
            bgColor={"green.300"}
            _hover={{ bgColor: "green.400" }}
            color={"white"}
            display={"flex"}
            alignItems={"center"}
            gap="30px"
            onClick={paymentDone}
          >
            cash on delivery{" "}
            <Checkbox color={"green.300"} bgColor={"white"}></Checkbox>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Payment;
/* <Box display={'grid'}borderWidth={'1px'} 
                      gridTemplateColumns={{lg:"repeat(3,1fr)",md:"repeat(2,1fr)",base:"repeat(,1fr)"}}>
                    {e.product.map((el)=>(
                      <Box key={el.id}> <Image w={'30%'} src={el.image} alt="image"/></Box>
                    ))}
                    </Box> */