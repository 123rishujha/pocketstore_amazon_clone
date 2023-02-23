import React, { useState } from "react";
import {
  Box,
  Image,
  FormLabel,
  Input,
  Button,
  Heading,
  FormControl,
  Text,
  Center,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import "./signup.css";
import img1 from "../assets/website-logo.png"
import { Link, useNavigate } from "react-router-dom";
import Footer1 from "../components/Footer1";
import { useDispatch } from 'react-redux'
import { login } from "../redux/Auth/auth.actionTypes";
const Login = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("") 
  const navigate=useNavigate()
  const [show, setShow] =useState(false)
  const dispatch = useDispatch()
  
  const handleClick = () => setShow(!show)


 const handleUserLogin=()=>{
  const payload={
    email,password
  }
  console.log(payload);
  dispatch(login(payload))
  
 }

const handlesignup=()=>{
  navigate('/signup')
}

  return (
    <>
      <Box>
        <Box
          cursor={"pointer"}
          m="30px auto"
          w={{ base: "20%", md: "15%", lg: "9%" }}
        >
          <Link to="/">
            <Image src={img1} />
          </Link>
        </Box>
        <Box
          w={{ base: "75%", md: "40%", lg: "25%" }}
          m={"30px auto"}
          borderWidth={"1px"}
          padding={"15px"}
          borderRadius="5px"
        >
          <FormControl>
            <Heading fontWeight={"400"} textAlign="left" fontSize={"30px"}>
              Sign in
            </Heading>
            <FormLabel mt="10px">Email</FormLabel>
            <Input
            required
              h={"30px"}
              borderWidth={"2px"}
              borderRadius={"3px"}
              fontSize={"13px"}
              placeholder="Email.."
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <FormLabel mt="10px">Password</FormLabel>
            <InputGroup>
            <Input
             required
              h={"30px"}
              borderWidth={"2px"}
              borderRadius={"3px"}
              fontSize={"13px"}
              placeholder="Password.."
              type={show ? 'text' : 'password'}
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
             <InputRightElement mt={'-5px'} mr={'5px'}>
        <Button h="60%" fontSize={"13px"}  onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
            </InputGroup>

            <Button
              mt="20px"
              border={"1px black solid"}
              h={"30px"}
              borderRadius={"3px"}
              w={{ base: "100%", md: "100%", lg: "100%" }}
              bg={"orange.300"}
              onClick={handleUserLogin}
            >
              Contiune
            </Button>
          </FormControl>
          <Text
            mt="15px"
            fontSize={{ base: "12px", md: "12px", lg: "11px" }}
            fontWeight="500"
          >
            By continuing, you agree to Amazon's{" "}
            <Link style={{ color: "skyblue" }}> Conditions of use</Link> and{" "}
            <Link style={{ color: "skyblue" }}> Privacy Notice.</Link>
          </Text>
          <br />
          <Link
            style={{ color: "skyblue", fontWeight: "500", fontSize: "11px" }}
          >
            Need help?
          </Link>
        </Box>
     
          <Text
            fontSize={{ base: "12px", md: "12px", lg: "11px" }}
            fontWeight="500"
            textAlign={"center"}
          >
            New to Amazon
          </Text>
        
        <Center>
          <Button
          onClick={handlesignup}
            m="15px 0 20px 0"
            border={"1px solid black"}
            w={{ base: "73%", md: "40%", lg: "25%" }}
            borderRadius="3px"
            fontSize={"12px"}
            h="30px"
          >
            Create your Amazon Account
          </Button>
        </Center>
      </Box>

      <Footer1 />
    </>
  );
};

export default Login;
