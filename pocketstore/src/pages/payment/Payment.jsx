import { Box, Button, Checkbox, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Payment = () => {
    const [append,setAppend]=useState([])
   const paymentDone=()=>{

   }
  const orderDataGet = () => {
axios.get(`https://shy-headscarf-tuna.cyclic.app/order`).then((res)=>{
    console.log(res.data)
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
        w={{ lg: "80%", md: "70%", base: "90%" }}
        m={"20px auto"}
        borderWidth={"1px"}
      >
        <Box>
              {append.map((e)=>(
                <Box key={e.id}>
                    <Text>{e.product.name}</Text>
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
