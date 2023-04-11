import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProducts } from "../../redux/products/product.actions";

import {
  Box,
  Flex,
  Image,
  useToast,
  Button,
  Text,
  Heading,
} from "@chakra-ui/react";
import { getProducts } from "../../redux/products/product.actions";
import { useNavigate, useParams } from "react-router-dom";
import Styles from "./ProductDetails.module.css";
import axios from "axios";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productReducer.products);
  const data = products?.find((elem) => elem.id === Number(id));
  const toast = useToast();

  const handlecart = () => {
    axios
      .post(`https://shy-headscarf-tuna.cyclic.app/cart`, data)
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

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleChange = (e) => {
    let quantity = Number(e.target.value);
    dispatch(updateProducts(id, quantity));
  };

  return (
    <Box className={Styles.detailsBox}>
      {data && (
        <Flex
          className={Styles.detailsContainer}
          flexDir={{ base: "column", md: "row" }}
        >
          <Image
            className={Styles.productImage}
            src={data.image}
            alt="details"
          />
          <Box className={Styles.textBox}>
            <Text textAlign="left" as="h1">
              {data.description}
              <hr />
            </Text>
            <Box className={Styles.textDetails}>
              <Text textAlign="left">
                <span style={{ color: "green" }}>Brand:- </span>
                {data.brand}
              </Text>
              <Text textAlign="left">
                <span style={{ color: "green" }}>Price:- </span>
                Rs{data.price}
              </Text>
              <Text textAlign="left">
                <span style={{ color: "green" }}>Discount:- </span>
                {data.discount}% off
              </Text>
              <Text textAlign="left">
                <span style={{ color: "green" }}>you are saving:- </span>
                Rs{data.offer_prices}
              </Text>
              <Text textAlign="left">
                <span style={{ color: "green" }}>Return policy: </span>
                Eligible for Return, Refund or Replacement within 30 days of
                receipt
              </Text>
              <Text textAlign="left">
                <span style={{ color: "green" }}>Support: </span>
                Free Amazon tech support included
              </Text>
            </Box>
          </Box>
          <Flex className={Styles.payment}>
            <Heading>Rs{data.price}</Heading>
            <Text>shipping and imports are free</Text>
            <Text color="red">Only 1 left in stock (more on the way)</Text>
            <Text>Rs {data.price * data.quantity}</Text>
            <Flex justifyContent="center" alignItems="center">
              Qtn:
              <select
                onChange={(e) => handleChange(e)}
                defaultValue={data.quantity}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
                <option value={13}>13</option>
                <option value={14}>14</option>
                <option value={15}>15</option>
              </select>
            </Flex>
            <Button
              className={Styles.pay_btn}
              colorScheme="orange"
              onClick={() => handlecart()}
            >
              Add to Cart
            </Button>
            <Button
              onClick={() => navigate("/checkOut")}
              className={Styles.pay_btn}
              colorScheme="orange"
            >
              Buy Now
            </Button>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default ProductDetails;
