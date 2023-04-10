import { useState, useEffect } from "react";
import { useSearchParams, useLocation, useParams } from "react-router-dom";

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
import Pagination from "../../components/Pagination/Pagination";

function ProductPage() {
  const product = useSelector((store) => store.productReducer.products);
  const loading = useSelector((store) => store.productReducer.loading);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams({});
  const [categories, setCategories] = useState(
    searchParams.getAll("category") || []
  );
  const location = useLocation();
  //pagination
  const [active, setActive] = useState(1);
  const [nOfProduct, setNOfProduct] = useState(9);

  const handleCategories = (val) => {
    setCategories(val);
    setActive(1);
  };

  const handleActive = (val) => {
    setActive(val);
  };

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

  console.log(product);

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
      <Flex className={Styles.bodyContainer} gap="10px">
        {/* filtes */}
        <Filter categories={categories} handleCategories={handleCategories} />
        {/* products grid/ListProducts */}
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <ListProducts
            product={product}
            nOfProduct={nOfProduct}
            active={active}
          />
        )}
      </Flex>
      <Pagination
        active={active}
        nOfProduct={nOfProduct}
        handleActive={handleActive}
        length={product?.length}
      />
    </Flex>
  );
}

export default ProductPage;
