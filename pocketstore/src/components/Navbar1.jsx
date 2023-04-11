import {
  Box,
  Image,
  Input,
  InputRightElement,
  InputGroup,
  Text,
  Flex,
} from "@chakra-ui/react";
import { BiUserCircle } from "react-icons/bi";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../media/pocketstore.png";
import { SearchIcon } from "@chakra-ui/icons";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import usaIcon from "../media/India.webp";
import Navbar2 from "./Navbar2";
import style from "./navbar.module.css";
import { useThrottle } from "use-throttle";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/products/product.actions";

const Navbar1 = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productReducer.products);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestion] = useState([]);
  const [showSugg, setShowSugg] = useState(false);
  const throttleText = useThrottle(search, 400);
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("item"));

  useEffect(() => {
    if (search === "") {
      setSuggestion([]);
      setShowSugg(false);
    } else {
      let newSuggestions = products.filter((item) => {
        return item?.category
          ?.split(" ")
          ?.join("")
          .trim()
          .toLowerCase()
          .indexOf(throttleText) !== -1
          ? true
          : false;
      });
      setSuggestion(newSuggestions);
      setShowSugg(true);
    }
    let Token = localStorage.getItem("item");
    setToken(Token);
  }, [throttleText, token]);

  const handleToggle = () => {
    // console.log(localStorage.removeItem("item"))
    setToken(localStorage.removeItem("item"));
  };

  const handleSearchClick = () => {
    if (search !== "") {
      let getProductParams = {
        params: {
          q: search,
        },
      };
      dispatch(getProducts(getProductParams));
      navigate(`/search?q=${search}`);
    }
    setSearch("");
    setShowSugg(false);
  };

  return (
    <>
      <Box
        display={"flex"}
        w={{ base: "100%", md: "100%", lg: "100%" }}
        position={"sticky"}
        color={"white"}
        justifyContent={{
          base: "space-around",
          md: "space-around",
          lg: "space-around",
        }}
        alignItems={"center"}
        top={"0"}
        bg={"#131921"}
        marginBottom={"0px"}
        padding={"5px"}
        zIndex={2}
      >
        <Box
          w={{ base: "13%", md: "6%", lg: "3.5%" }}
          _hover={{ borderWidth: "1px" }}
        >
          <Link to="/">
            <Image src={logo} alt="" />
          </Link>
        </Box>
        <InputGroup
          bg={"white"}
          color={"black"}
          w={{ base: "50%", md: "45%", lg: "60%" }}
          //  h={{base:"20px"}}
          borderRadius={"5px"}
        >
          {/* Search bar  */}
          <Input
            h={{ base: "30px", md: "40px", lg: "40px" }}
            border="none"
            _hover={{ border: "none" }}
            type="text"
            placeholder="Search Amazon.in"
            borderRadius={"5px"}
            position="relative"
            value={search}
            onKeyPress={(e) => (e.key === "Enter" ? handleSearchClick() : null)}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* suggestions */}
          {showSugg && (
            <Box
              w={{ base: "100%", md: "100%", lg: "130%" }}
              maxW="800px"
              maxH="400px"
              textAlign="left"
              position="absolute"
              bg="white"
              padding="5px"
              pl="10px"
              lineHeight="35px"
              top="80%"
              zIndex="5"
              overflow="scroll"
              // maxH="400px"
            >
              {suggestions.map((elem, index) => {
                if (index > 10) {
                  return;
                }
                return (
                  <Flex
                    key={elem.id}
                    onClick={() => {
                      setShowSugg(false);
                      navigate(`/products/${elem.id}`);
                    }}
                    cursor="pointer"
                    gap="3px"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Image w="30px" h="30px" src={elem.image} alt={elem.id} />
                    <Text width="88%" noOfLines={1}>
                      {elem.name}
                    </Text>
                  </Flex>
                );
              })}
            </Box>
          )}
          <InputRightElement
            borderRadius={"0px 5px 5px 0px"}
            h={"full"}
            m={"0 0px"}
            bg={"#febd69"}
            onClick={() => handleSearchClick()}
          >
            <SearchIcon />
          </InputRightElement>
        </InputGroup>

        <Image
          src={usaIcon}
          alt=""
          display={{ lg: "flex", md: "", base: "none" }}
          w={{ base: "4%", md: "5%", lg: "2%" }}
        />

        <Box
          display={{ lg: "flex", md: "", base: "none" }}
          gap={"55px"}
          fontSize={"15px"}
        >
          <Box className={style.sign}>
            <Link to="/login" _hover={{ borderWidth: "1px" }}>
              <BiUserCircle fontSize={"25px"} />{" "}
              <Text fontSize={"10px"}>SignIn</Text>
            </Link>
            <Box className={style.log}>
              <Text
                color={"black"}
                cursor={"pointer"}
                onClick={() => handleToggle()}
              >
                {localStorage.getItem("item") ?  "HI User/Logout" : "SignIn"}
              </Text>
            </Box>
          </Box>

          <Link to="/adminlogin">
            <MdOutlineAdminPanelSettings fontSize={"25px"} />
            <Text fontSize={"10px"}>Admin</Text>
          </Link>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={{ md: "20px", base: "10px" }}
        >
          <Link to="/cart">
            <HiOutlineShoppingCart fontSize={"30px"} />
          </Link>
        </Box>
      </Box>
      <Navbar2 />
    </>
  );
};

export default Navbar1;
