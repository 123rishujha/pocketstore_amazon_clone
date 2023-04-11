import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Flex, Image, Text, Badge, VStack } from "@chakra-ui/react";

//reudx functions
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/products/product.actions";

const Search = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productReducer.products);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const searchQuery = searchParams.getAll("q");
    if (searchQuery != "") {
      let getProductParams = {
        params: {
          q: searchQuery,
        },
      };
      dispatch(getProducts(getProductParams));
    }
  }, []);

  // console.log(searchQuery);
  console.log(products);
  return (
    <div>
      <Flex m="auto" w="75%" flexDir="column" gap="20px">
        {products?.map((elem) => {
          return (
            <Flex
              flexDir={{ base: "column", sm: "row" }}
              onClick={() => navigate(`/products/${elem.id}`)}
              cursor="pointer"
              w="100%"
              justifyContent="center"
              h="auto"
              p="20px"
              gap="10px"
              boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            >
              <Image
                maxW="230px"
                // w="40%"
                m="auto"
                w={{ base: "100%", sm: "40%" }}
                h="260px"
                src={elem.image}
                alt={elem.id}
              />
              <VStack
                w="65%"
                w={{ base: "100%", sm: "65%" }}
                textAlign="left"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Text noOfLines={5} fontSize={{ base: "18px", sm: "25px" }}>
                  {elem.description}
                </Text>
                <Badge bg="pink">{elem.discount}%</Badge>
                <Badge bg="pink">{elem.brand}</Badge>
                <Text color="green" fontSize="30px">
                  Rs {elem.price}
                </Text>
              </VStack>
            </Flex>
          );
        })}
      </Flex>
    </div>
  );
};

export default Search;
