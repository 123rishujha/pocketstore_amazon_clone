import {
  Box,
  Badge,
  Flex,
  Grid,
  Text,
  GridItem,
  Image,
  Tag,
  Button
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import Styles from "./ProductCard.module.css";

function ProductCard({
  id,
  image,
  category,
  name,
  price,
  discount,
  original_price
}) {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <GridItem
      key={id}
     
      className={Styles.gridItem}
      cursor={"pointer"}
    >
      <Image className={Styles.gridItem_image} src={image} onClick={() => handleNavigate(id)} alt={name} />
      <Flex className={Styles.details}>
        <Text noOfLines={1} fontWeight={500}>{name}</Text>
        <Badge
          colorScheme={"red"}
          size={"sm"}
          m="5px 0"
        >
          Up to {discount}% off
        </Badge>
        <Text color="green">
          Rs{price}{" "}
          <span style={{ textDecoration: "line-through", color: "gray" }}>
            Rs{original_price}
          </span>
        </Text>
      </Flex>
      <Button color={'white'} mb={'5px'}  bgColor={"orange.300"} _hover={{bgColor:"orange.400"}}>Add to Cart</Button>
    </GridItem>
  );
}

export default ProductCard;
