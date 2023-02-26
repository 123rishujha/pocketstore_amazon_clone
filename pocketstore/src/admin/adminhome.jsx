import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,Box,Grid, GridItem,Text,Highlight
  } from '@chakra-ui/react';
  import React from "react";
  import { deleteproduct } from './api';

  export default function SplitScree() {
    const [data,setdata]=React.useState([]);
    const [amount,setamount]=React.useState(0);
const fetchdata=async()=>{
try{
  let res=await fetch(`https://shy-headscarf-tuna.cyclic.app/cart`);
  let res1=await res.json();
  setdata(res1);
}
catch(er){
  console.log(er);
}
}
console.log(data);
    React.useEffect(()=>{
fetchdata();
},[])


return (
        <>
      
     <Box>
<Flex>
  <Box w="25%" border={"2px solid grey"}>
<Grid gap={"40px"} templateRows={"20% 20%"}>
  <GridItem><Highlight query={"TOTAL FUNDS"} styles={{ px: '1', py: '1', bg: 'orange.100' }}>TOTAL FUNDS</Highlight></GridItem>
<GridItem><Text><Highlight query={"₹"} styles={{ px: '1', py: '1', bg: 'orange.100' }}>₹</Highlight>{amount}</Text></GridItem>
</Grid>
  </Box>
  <Box w="75%" border={"0px solid brown"}>
    <Grid boxShadow={'1.5rem 0.5rem black, -0.5rem -0.5rem #ccc'} gap={"20px"} templateColumns={"auto"}>
      <Heading>Cart Items</Heading>
      {/* 1st */}
{data?.map((el)=>(
  <GridItem key={el.id}>
 <Grid justifyContent={"space-evenly"} templateColumns={"20% 50% 20%"}>
  <GridItem>
    <Image w={"50%"} src={el.image} alt={"memo"}/>
  </GridItem>
  <GridItem>
    <Text><Highlight query='Brand' styles={{ px: '1', py: '1', bg: 'orange.100' }}>Brand</Highlight>--{el.brand}</Text>
    <Text><Highlight query='Name' styles={{ px: '1', py: '1', bg: 'orange.100' }}>Name</Highlight>--{el.name}</Text>
  </GridItem>
  <GridItem>
  <Text><Highlight query='Price' styles={{ px: '1', py: '1', bg: 'orange.100' }}>Price</Highlight>--₹{el.price}</Text>
  <Button onClick={async()=>{let x=await deleteproduct(el.id);fetchdata();setamount((prev)=>prev+el.price) }} colorScheme='orange'>Dispatch</Button>
  </GridItem>
 </Grid>
</GridItem>
))}

{/* // 2nd */}

    </Grid>
  </Box>
</Flex>
     </Box>
      </>
    );
  }


