import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

//reudx functions
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/products/product.actions";

const Search = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.getAll("q"));

  // useEffect(() => {
  //   if (searchQuery != "") {
  //     let getProductParams = {
  //       params: {
  //         q: searchParams.q,
  //       },
  //     };
  //     console.log("searchParams", searchParams);

  //     // dispatch(getProducts(getProductParams));
  //   }
  //   // console.log("search query", searchQuery);
  //   dispatch(getProducts());
  // }, []);

  return (
    <div>
      <h1>Search page</h1>
    </div>
  );
};

export default Search;
