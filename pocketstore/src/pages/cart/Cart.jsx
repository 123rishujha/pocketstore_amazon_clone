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
  ,useToast
} from "@chakra-ui/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import swal from "sweetalert";
import {useDispatch,useSelector}from "react-redux";
import { useEffect, useState } from "react";
import { appendCart, deletedata } from "../../redux/cart/cart.action";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import Empty from "./Empty";

const Cart = () => {
const dispatch=useDispatch();
const [quantity,setQuantity]=useState(1)
const {cartData}=useSelector((store)=>store.cartReducers)
const navigate=useNavigate();
const toast=useToast()

let Total = cartData?.reduce((acc, el)=>acc+el.price, 0)

let count=cartData?.length
// console.log(count)
useEffect(()=>{
dispatch(appendCart())


},[dispatch])
console.log(cartData);
const handelcheckout=()=>{
  if(cartData.length===0){
    toast({
      title: "cart empty .",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  }else{
  navigate("/checkout")
  }
  
}

  const handleremove = async (id) => {

    try{
      const datade=await axios.delete(`https://shy-headscarf-tuna.cyclic.app/cart/?${id}`)
      console.log(datade)
      cartData()
      const willDelete = await swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete this product ?",
        icon: "warning",
        dangerMode: true,
      });
      if (willDelete) {
        swal("Deleted!", "Your imaginary file has been deleted!", "success");
      }
    }catch(err){
      console.log(err)
    }
  };

// ===============quantity==========================
const handlequantityde=()=>{
  setQuantity(quantity-1)
  // quantity--
}
// console.log(quantity)
const handlequantityin=()=>{
setQuantity(quantity+1)
//   quantity++
}
  return (
    <>
      <Box mt={{ lg: "40px" }}>
        <Heading>Shopping Cart</Heading>
        <Box
          m={"20px auto"}
          display={"grid"}
          w={{ lg: "80%", md: "90%", base: "95%" }}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(1,1fr)",
            lg: "repeat(2,70% 28%)",
          }}
          // borderWidth={'1px'}
          gap={"15px"}
        
>
<Box 
  display={"flex"}
  borderRadius={"10px"}
  flexDirection={{base:"column",lg:"column",md:"column"}}
  gap={'20px'}
>
{cartData.length===0?<Empty/> :cartData.map((el)=>(
  
  <Box key={el.id} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
  display={"flex"}
  borderRadius={"10px"}
  flexDirection={{base:"column",lg:"row",md:"row"}}
 
 >
  <Box m={{lg:"0",base:'auto',md:'0'}}p={"10px"} w={{ lg: "20%",md:"18%",base:"40%"}} >
    <Image
    
      src={el.image}
      alt="images"
    />
  </Box>
  <Box ml={"10px"} textAlign={"left"} fontWeight={600}>
    {" "}
    <Text fontWeight={600} fontSize={"20px"}>
     {el.name}
    </Text>
    <Text >{el.brand}</Text>
    <Text >{el.category}</Text>
    <Box pl={{lg:"10px",base:'90px',md:'10px'}}
      display={"flex"}
      alignItems={"center"}
      m={"10px 0"}
      gap={"10px"}
    >
      {" "}
      <Button _disabled={quantity===1} onClick={handlequantityde}>-</Button>
      <Text>{quantity}</Text>
      <Button onClick={handlequantityin}>+</Button>
    </Box>
    <Box
    pl={{lg:"10px",base:'100px',md:'10px'}}
      display={"flex"}
      alignItems={"center"}
      m={"10px 0"}
      gap={"10px"}
    >
      {" "}
      <Text>₹ {el.price}</Text>
      <Text textDecoration={"line-through"} color={'red.400'}>₹ {el.original_price}</Text>
    </Box>
    <Button ml={{lg:"10px",base:'116px',md:'10px'}} mb={{base:'10px'}} onClick={()=>handleremove(el.id)}>
      <RiDeleteBin5Line />
    </Button>
  </Box>
</Box>

))}
</Box>
          <Box
          align="center"
          display={'flex'}
          flexDirection={'column'}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            p={"10px"}
            borderRadius={"10px"}
            h={'200px'}
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
                Subtotal({count}items):
              </Text>
              <Text fontWeight={600}>₹{Total}</Text>
            </Flex>
            <Checkbox >This order contains a gift</Checkbox>
            <Button bgColor={'yellow.400'} w={'100%'} mt="10px" onClick={()=>handelcheckout()}>Proceed to Buy</Button>
          </Box>
        </Box>
      </Box>

    </>
  );
};

export default Cart;
