import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

import Styles from "./ProductPage.module.css";
import MultiProductCarousel from "../../components/CategoriesCarousel/ProductCarousel";

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/products/product.actions";
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

import ProductCard from "../../components/ProductCard/ProductCard";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";
import ListProducts from "../../components/ListProducts/ListProducts";
import Filter from "../../components/Filter/Filter";

function ProductPage() {
  const product = useSelector((store) => store.productReducer.products);
  const loading = useSelector((store) => store.productReducer.loading);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  // console.log(product);

  // console.log("loaction", location);

  const handleCategories = (val) => {
    setCategories(val);
  };

  // console.log("categories", categories);

  //geting products;
  useEffect(() => {
    let getProductParams = {
      params: {
        category: categories
      }
    };
    dispatch(getProducts(getProductParams));
  }, [location.search]);

  //setparams;
  useEffect(() => {
    let params = {};
    if (categories.length !== 0) {
      params.category = categories;
    }
    setSearchParams(params);
  }, [categories]);

  return (
    <Flex flexDir="column" className={Styles.main} boxSize="border-box">
      <h1 style={{ fontSize: "30px", textAlign: "left", margin: "10px" }}>
        Today's Deals
      </h1>
      <Box className={Styles.carouselHolder}>
        <MultiProductCarousel
          categories={categories}
          handleCategories={handleCategories}
        />
      </Box>
      <Flex className={Styles.bodyContainer}>
        {/* filtes */}
        <Filter categories={categories} handleCategories={handleCategories} />
        {/* products grid/ListProducts */}
        {loading ? <LoadingSkeleton /> : <ListProducts product={product} />}
      </Flex>
    </Flex>
  );
}

export default ProductPage;
