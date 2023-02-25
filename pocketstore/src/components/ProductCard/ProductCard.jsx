import {
  Box,
  Badge,
  Flex,
  Grid,
  Text,
  GridItem,
  Image,
  Tag
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
      onClick={() => handleNavigate(id)}
      className={Styles.gridItem}
    >
      <Image className={Styles.gridItem_image} src={image} alt={name} />
      <Flex className={Styles.details}>
        <Text noOfLines={1}>{name}</Text>
        <Badge
          // w="50%"
          // display='flex'
          // justifyContent='center'
          // alignItems='center'
          // borderRadius={"0px"}
          // padding="5px"
          colorScheme={"red"}
          size={"sm"}
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
    </GridItem>
  );
}

export default ProductCard;
