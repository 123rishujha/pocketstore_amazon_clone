import { Box, Grid, GridItem } from "@chakra-ui/react";

import Styles from "./ListProducts.module.css";

import ProductCard from "../ProductCard/ProductCard";

function ListProducts({ product }) {
  return (
    <Grid
      className={Styles.grid}
      templateColumns={{
        base: "repeat(1,1fr)",
        sm: "repeat(2,1fr)",
        md: "repeat(3,1fr)"
      }}
    >
      {product?.map((elem) => {
        return <ProductCard key={elem.id} {...elem} />;
      })}
    </Grid>
  );
}

export default ListProducts;
