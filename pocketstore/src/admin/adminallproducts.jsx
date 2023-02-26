import { Box, Flex,Grid,GridItem,Image,Text,Heading ,Button,Stack} from '@chakra-ui/react';
import React from 'react'
import WithAction from './Components/Navbar';
import { getallproducts } from './api';
import { updatequantity } from './api';
const Adminallproducts = () => {
    const handlequantityadd=async(id,q)=>{
     await updatequantity(id,q);
         await getall();
    };
    const handlequantityminus=async(id,q)=>{
        await updatequantity(id,q);
            await getall();
       }
const [data,setdata]=React.useState([]);
const getall=async()=>{
    console.log("getall");
  let x=await getallproducts();
  setdata(x);
}   

React.useEffect(()=>{
     getall();
},[]);
console.log(data);
  return (
    <div>
  <WithAction/>
<Box>
<Flex>
    <Box border={"0px solid grey"} w={"30%"}> 
    
    </Box>
    <Box>
        <Heading>All Products</Heading>
<Grid templateRows={"auto"} templateColumns={"repeat(4,1fr)"} gap={"10px"} marginTop={"15px"}>
    {data?.map((el)=>(
<GridItem key={el.id} style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',paddingBottom:'10px'}}>
    <Image src={el.image} alt="memo"/>
<Text>{el.brand}</Text>
<Text>{el.name}</Text>
<p style={{fontSize:"30px"}}> ₹{el.offer_prices} 
<span style={{color:'grey',fontSize:"13px"}}>M.R.P: ₹{el.original_price}</span>

<span style={{fontSize:"19px"}}>({el.discount}% off)</span>

</p>
<Flex align={'center'} justifyContent={'center'}>
    <Button onClick={()=>handlequantityadd(el.id,el.quantity+1)}>+</Button>
    <Button>{el.quantity}</Button>
    <Button onClick={()=>handlequantityminus(el.id,el.quantity-1)}>-</Button>
    </Flex>

</GridItem>
    ))}
</Grid>
    </Box>
</Flex>

</Box>
    </div>
  )
}

export default Adminallproducts