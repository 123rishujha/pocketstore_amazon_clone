import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Image,
  Button,
} from "@chakra-ui/react";
import { TbWorld } from "react-icons/tb";

import { React } from "react";
import img1 from "../assets/website-logo.png";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg={"#232F3E"} color={"white"} marginTop="20px">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 2, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Get to Know Us</ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Careers</Link>

            <Link href={"#"}>Press Releases</Link>
            <Link href={"#"}>Amazon Science</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Connect with Us</ListHeader>
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Twitter</Link>
            <Link href={"#"}>Instagram</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Make Monkey with US</ListHeader>
            <Link href={"#"}>Sell on Amazon</Link>
            <Link href={"#"}>Sell under Amazon Accelerator</Link>
            <Link href={"#"}>Protect and Build Your Brand</Link>
            <Link href={"#"}>Amazon Global Selling</Link>
            <Link href={"#"}>Status</Link>
            <Link href={"#"}></Link>
            <Link href={"#"}></Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Twitter</Link>
            <Link href={"#"}>Dribbble</Link>
            <Link href={"#"}>Instagram</Link>
            <Link href={"#"}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",

            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",

            flexGrow: 1,
            ml: 8,
          }}
        >
          <Image w={{ base: "20%", md: "10%", lg: "5.5%" }} src={img1} alt="" />
        </Flex>

        <Button
          bg={"none"}
          borderWidth={"1px"}
          borderRadius={"0px"}
          gap="10px"
          _hover={{ bg: "none" }}
        >
          <TbWorld />
          English
        </Button>

        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2023 Team Rct201. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
