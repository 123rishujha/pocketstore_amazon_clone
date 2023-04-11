import {Grid} from "@chakra-ui/react";

import Styles from "./ListProducts.module.css";

import ProductCard from "../ProductCard/ProductCard";

function ListProducts({ product,nOfProduct,active }) {
  return (
    <Grid
      className={Styles.grid}
      templateColumns={{
        base: "repeat(1,1fr)",
        sm: "repeat(2,1fr)",
        md: "repeat(3,1fr)",
        lg: "repeat(3,1fr)"
      }}
      gap="20px"
    >
      {product?.filter((elem,i)=>{
        // return i>= noOfproducts && i<=noOfProduct * action;
        return i >= nOfProduct * (active - 1) && i < nOfProduct * active
      })
      .map((elem) => {
        return <ProductCard key={elem.id} {...elem} />;
      })}
    </Grid>
  );
}

export default ListProducts;
