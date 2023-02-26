// import {
//   Box,
//   Image,
//   Input,
//   InputRightElement,
//   InputLeftElement,
//   InputGroup,
//   Select,
//   Button,
// } from "@chakra-ui/react";
// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../media/pocketstore.png";
// import {SearchIcon} from "@chakra-ui/icons"
// import usaIcon from '../media/India.webp';

// const Navbar1 = () => {
//   return (
//     <>
//       <Box
//         display={"flex"}
//         w={{ base: "100%", md: "100%", lg: "100%" }}
//         position={"sticky"}
//         color={"white"}
//        justifyContent={{base:"",md:"" ,lg:"space-between"}}
//         alignItems={"center"}
//         top={"0"}
//         bg={"#131921"}
//         marginBottom={'0px'}
//         padding={'10px'}
//       >
//         <Box w={{ base: "20%", md: "10%", lg: "25%" }}>
//           <Link>
//             <Image src={logo} alt="" />
//           </Link>
//         </Box>
//       <Box w={{ base: "50%", md: "40%", lg: "80%" }}
//        borderRadius={"5px"} borderWidth={'1px'} height={'40px'} bg={'white'}
//        display={"flex"} >
// <Box>
          
//   <Select borderRadius={"5px 0px 0px 5px"} color={'black'} placeholder={"All"}>
//     <option value="option1">Option 1</option>
//     <option value="option2">Option 2</option>
//     <option value="option3">Option 3</option>
//     <option value="option1">Option 1</option>
//     <option value="option2">Option 2</option>
//     <option value="option3">Option 3</option>
//     <option value="option1">Option 1</option>
//     <option value="option2">Option 2</option>
//     <option value="option3">Option 3</option>
//     <option value="option1">Option 1</option>
//     </Select>
// </Box>
//     <Input border={'none'} _hover={'none'}borderRadius={'0px'} type="text"/>
//     <button style={{color:"black",backgroundColor:"#febd69",padding:"0px 17px",borderRadius:"0 5px 5px 0"}}><SearchIcon/></button>
//       </Box>
//             <Box>
//          <Box w={{ base: "", md: "", lg: "3%" }}>
//             <Image src={usaIcon} alt=""/>
//          </Box>
//          </Box>

//       </Box>
//     </>
//   );
// };

// export default Navbar1;


// <InputGroup
// bg={"white"}
// color={"black"}
// w={{ base: "50%", md: "40%", lg: "190%" }}
// display={{base:"none",md:"block"}}
// p={"0 20px"}
// borderRadius={"5px"} 
// 
// <InputLeftElement h={"full"} bg={"white"} borderRadius={"5px 0px 0px 5px"}>
//   <Select borderRadius={"5px 0px 0px 5px"} placeholder={"All"}>
//     <option value="option1">Option 1</option>
//     <option value="option2">Option 2</option>
//     <option value="option3">Option 3</option>
//     <option value="option1">Option 1</option>
//     <option value="option2">Option 2</option>
//     <option value="option3">Option 3</option>
//     <option value="option1">Option 1</option>
//     <option value="option2">Option 2</option>
//     <option value="option3">Option 3</option>
//     <option value="option1">Option 1</option>

//   </Select>
// </InputLeftElement>
// <Input type="text" placeholder="Search Amazon.in" borderRadius={"0px"} />
// <InputRightElement borderRadius={"0px 5px 5px 0px"} h={"full"} m={'0 0px'} bg={'#febd69'}><SearchIcon/></InputRightElement>
// </InputGroup>


// bg={'#febd69'} color={'black'}