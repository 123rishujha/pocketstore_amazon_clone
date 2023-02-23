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
    return (
      <GridItem key={id} className={Styles.gridItem}>
        <Image className={Styles.gridItem_image} src={image} alt={name} />
        <Flex className={Styles.details}>
          <Text noOfLines={1}>{category}</Text>
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
            ${price}{" "}
            <span style={{ textDecoration: "line-through", color: "gray" }}>
              ${original_price}
            </span>
          </Text>
        </Flex>
      </GridItem>
    );
  }
  
  export default ProductCard;
  