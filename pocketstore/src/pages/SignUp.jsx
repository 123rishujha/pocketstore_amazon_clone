import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  Heading,
  Image,
  Text,
  Flex,
  FormControl,
  FormLabel,
  InputGroup,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./signup.css";
import img from "../assets/website-logo.png"
// import Footer1 from "../components/Footer1";
import { useDispatch } from 'react-redux'
import { signup } from "../redux/Auth/auth.actionTypes";

const SignUp = () => {
  const dispatch = useDispatch()
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[mobile_no,setMobileNo]=useState('');
  const[password,setPassword]=useState('');
  const [show, setShow] =useState(false)
  const handleClick = () => setShow(!show)


const handelSubmituser=()=>{
  const payload={
    name,email,mobile_no,password
   
  }
  console.log(payload);
  dispatch(signup(payload))
  // console.log(name,email,mobile_no,password)
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
            <Image src={img} />
          </Link>
        </Box>
        <Box
          w={{ base: "75%", md: "40%", lg: "25%" }}
          m={"30px auto"}
          borderWidth={"1px"}
          padding={"15px"}
          borderRadius="5px"
        >
          <FormControl  >
            <Heading fontWeight={"450"} textAlign="left">
              Create Account
            </Heading>
            <FormLabel mt="10px">Your name</FormLabel>
            <Input
             required
              h={"30px"}
              borderWidth={"2px"}
              borderRadius={"3px"}
              fontSize={"13px"}
              type='text'
              placeholder="First and last name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />

            <FormLabel mt="10px">Email</FormLabel>
            <Input
             required
              h={"30px"}
              borderWidth={"2px"}
              borderRadius={"3px"}
              fontSize={"13px"}
              placeholder=""
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <FormLabel mt="10px">Mobile number(Optional)</FormLabel>
            <Input
             type="number"
              h={"30px"}
              borderWidth={"2px"}
              borderRadius={"3px"}
              fontSize={"13px"}
              placeholder="Mobile number"
              value={mobile_no}
              onChange={(e)=>setMobileNo(e.target.value)}
            />
            <FormLabel mt="10px">Password</FormLabel>
            <InputGroup>
            <Input
             required
              h={"30px"}
              borderWidth={"2px"}
              borderRadius={"3px"}
              fontSize={"13px"}
              placeholder="At least 6 characters"
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
            <FormHelperText textAlign={'justify'} fontSize={"13px"} fontWeight="500">
              Passwords must be at least 6 characters.
            </FormHelperText>

            <br />
            <Text
              textAlign="justify"
              fontSize={{ base: "12px", md: "12px", lg: "13px" }}
              fontWeight="500"
            >
              By enrolling your mobile phone number, you consent to receive
              automated security notifications via text message from Amazon.
              Message and data rates may apply.
            </Text>
            <br />
            <Button
              border={"1px black solid"}
              h={"30px"}
              borderRadius={"3px"}
              w={{ base: "100%", md: "100%", lg: "100%" }}
              bg={"orange.300"}
              onClick={handelSubmituser}
            >
              Contiune
            </Button>
            <hr />
            <br />
            <Box
              fontWeight="500"
              fontSize={{ base: "12px", md: "12px", lg: "13px" }}
            >
              <Text>
                Already have an account?{" "}
                <Link to="/login" style={{ color: "skyblue" }}>
                  Sign in
                </Link>
              </Text>
              <Text>
                Buying for work?{" "}
                <Link to="" style={{ color: "skyblue" }}>
                  Create a free business account
                </Link>
              </Text>
              <br />
              <Text>By creating an account or logging in, you agree to</Text>
              <Flex align={"center"} gap="5px">
                <Text>Amazon’s</Text>{" "}
                <Link to="" style={{ color: "skyblue" }}>
                  Conditions of Use{" "}
                </Link>{" "}
                <Text>and</Text>
                <Link to="" style={{ color: "skyblue" }}>
                  {" "}
                  Privacy Policy.
                </Link>
              </Flex>
            </Box>
          </FormControl>
        </Box>
      </Box>
      {/* <Footer1 /> */}
    </>
  );
};

export default SignUp;
