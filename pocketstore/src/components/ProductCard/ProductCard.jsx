import {
  Badge,
  Flex,
  Text,
  GridItem,
  Image,
  useToast,
  Button,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import Styles from "./ProductCard.module.css";
import axios from "axios";

function ProductCard({
  id,
  image,
  category,
  name,
  price,
  discount,
  original_price,
}) {
  const toast = useToast();
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/products/${id}`);
  };

  const handlesendData = () => {
    let cartData={
      id,
      image,
      category,
      name,
      price,
      discount,
      original_price,
    }
    // console.log(cartData)
    axios
      .post(`https://shy-headscarf-tuna.cyclic.app/cart`,cartData)
      .then(({ data }) => {
        console.log(data);
        toast({
          title: "item has added to cart.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "item has added to cart.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      });
  };
  return (
    <GridItem key={id} className={Styles.gridItem} cursor={"pointer"}>
      <Image
        className={Styles.gridItem_image}
        src={image}
        onClick={() => handleNavigate(id)}
        alt={name}
      />
      <Flex className={Styles.details}>
        <Text noOfLines={1} fontWeight={500}>
          {name}
        </Text>
        <Badge colorScheme={"red"} size={"sm"} m="5px 0">
          Up to {discount}% off
        </Badge>
        <Text color="green">
          Rs{price}{" "}
          <span style={{ textDecoration: "line-through", color: "gray" }}>
            Rs{original_price}
          </span>
        </Text>
      </Flex>
      <Button
        color={"white"}
        mb={"5px"}
        bgColor={"orange.300"}
        _hover={{ bgColor: "orange.400" }}
        onClick={handlesendData}
      >
        Add to Cart
      </Button>
    </GridItem>
  );
}

export default ProductCard;
