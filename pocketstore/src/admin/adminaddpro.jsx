import React from 'react'
import { FormControl,FormLabel,Button,Input,Stack,Checkbox,Link,Heading,Box,Text } from '@chakra-ui/react';
import { addproduct } from './api';
const Adminaddpro = () => {
   
    const [text,settext]=React.useState({
        "image":"",
        "brand":"",
        "name":"",
        "description":"",
        "price":"",
        "original_price":"",
        "discount":"",
        "offer_prices":"",
        "category":"",
        "quantity":""
      });
    const handlechange=(e)=>{
        let x=e.target.name;
text[e.target.name]=e.target.value;
settext(text);
}
    console.log(text,"aaaaa");
    const handlesubmit=async()=>{
        console.log(text);
         let x=await addproduct(text);
         console.log(x);
    }
  return (
    <Box border={'0px solid red'} >
<Text fontSize={'2xl'} color={'orange'}>Add Products</Text>
<Stack border={'0px solid blue'} margin={"auto"} spacing={4} w={'full'} maxW={'md'}>
            {/* <Heading fontSize={'2xl'} justify={'left'} align={'left'}>Sign in</Heading> */}
            <form action="submit" onSubmit={(e)=>e.preventDefault()}>
            <FormControl id="image">
              <FormLabel>Image Link</FormLabel>
              <Input name="image" onChange={(e)=>handlechange(e)} type="text" placeholder='Image Link' />
            </FormControl>
            <FormControl id="brand">
              <FormLabel>Brand</FormLabel>
              <Input name="brand" onChange={(e)=>handlechange(e)} type="text" placeholder='Brand' />
            </FormControl>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input name='name' onChange={(e)=>handlechange(e)} type="text" placeholder='Name' />
            </FormControl>
            <FormControl id="description">
              <FormLabel>Description</FormLabel>
              <Input name="description" onChange={(e)=>handlechange(e)} type="text"  placeholder='Description'/>
            </FormControl>
            <FormControl >
              <FormLabel>Price</FormLabel>
              <Input name="price" onChange={(e)=>handlechange(e)} type="number" placeholder='Price'/><Input name="original_price" onChange={(e)=>handlechange(e)} type="number" placeholder='Original Price'/><Input name="discount" onChange={(e)=>handlechange(e)} type="number" placeholder='Discount'/><Input name="offer_prices" onChange={(e)=>handlechange(e)} type="number" placeholder='Offer Price'/>
            </FormControl>
            <FormControl id="category">
              <FormLabel>Category</FormLabel>
              <Input name="category" onChange={(e)=>handlechange(e)} type="text" placeholder='category' />
            </FormControl>
            <FormControl id="quantity">
              <FormLabel>Quantity</FormLabel>
              <Input name="quantity" onChange={(e)=>handlechange(e)} type="text" placeholder='quantity' />
            </FormControl>
            <Stack spacing={6}>
              <Button onClick={handlesubmit} type='submit' colorScheme={'orange'} variant={'solid'}>
                Add Product
              </Button>
            </Stack>
            </form>
          </Stack>
    </Box>
  )
}

export default Adminaddpro;