import { Box, Heading,Image  } from '@chakra-ui/react';
import React from 'react';

const Empty = () => {
  return (
    <>
      <Box >
        <Image w={{lg:"50%",md:"50%",base:"50%"}}m={'auto'} src={"https://www.dvnjewelry.com/images/cart-empty.png"} alt="empty"/>
        <Heading>Cart empty</Heading>
      </Box>
    </>
  )
}

export default Empty
