import Styles from "./Filter.module.css";

import {
  Heading,
  Button,
  CheckboxGroup,
  Box,
  Flex,
  Grid,
  Stack,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from "@chakra-ui/react";

function Filter({ handleCategories, categories }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChecks = (value) => {
    // console.log(value);
    handleCategories(value);
  };

  const handleClear = () => {
    handleCategories([]);
    onClose();
  };

  return (
    <Box className={Styles.filterMain}>
      <Box width="100%" display={{ base: "none", md: "block" }}>
        <Heading fontSize="20px" padding="5px" ml={{lg:"10px"}}>
          Departments
        </Heading>
        <CheckboxGroup
          width="100%"
          colorScheme="green"
          value={categories}
          onChange={handleChecks}
        >
          <Stack spacing={"0px"} direction={["column"]} fontWeight={500} ml={{lg:"15px"}}>
            <Checkbox  value="audio">audio</Checkbox>
            <Checkbox  value="laptop">laptop</Checkbox>
            <Checkbox  value="tv">Tv</Checkbox>
            <Checkbox  value="mobile">mobile</Checkbox>
            <Checkbox  value="watch">watch</Checkbox>
            <Checkbox  value="kids-clothing">kids-clothing</Checkbox>
            <Checkbox  value="t-shirt">t-shirt</Checkbox>
            <Checkbox  value="jeans">jeans</Checkbox>
            <Checkbox  value="Jacket">Jacket</Checkbox>
            <Checkbox  value="kurta-suit-sets">kurta-suit-sets</Checkbox>
            <Checkbox  value="kurta-kurti">kurta-kurti</Checkbox>
            <Checkbox  value="shirts-tops-tunics">shirts-tops-tunics</Checkbox>
            <Checkbox  value="mens-clothing">mens-clothing</Checkbox>
            <Checkbox  value="saree">saree</Checkbox>
            <Checkbox  value="shirt">shirt</Checkbox>
            <Checkbox  value="women-clothing">women-clothing</Checkbox>
          </Stack>
        </CheckboxGroup>
      </Box>

      {/* drawer */}
      <Button
        display={{ base: "block", md: "none" }}
        float="right"
        colorScheme="blue"
        onClick={onOpen}
      >
        Filters
      </Button>
      <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth="1px"
            display="flex"
            justifyContent="space-between"
          >
            Departments
            <DrawerCloseButton />
          </DrawerHeader>

          <DrawerBody>
            <Flex w="100%" justifyContent="flex-end">
              <Button colorScheme="blue" onClick={handleClear}>
                clear
              </Button>
            </Flex>
            <CheckboxGroup
              width="100%"
              colorScheme="green"
              value={categories}
              onChange={handleChecks}
            >
              <Grid templateColumns="repeat(3,1fr)">
                <Checkbox onChange={onClose} value="women-clothing">
                  women-clothing
                </Checkbox>
                <Checkbox onChange={onClose} value="saree">
                  saree
                </Checkbox>
                <Checkbox onChange={onClose} value="kurta-suit-sets">
                  kurta-suit-sets
                </Checkbox>
                <Checkbox onChange={onClose} value="tv">
                  Tv
                </Checkbox>
                <Checkbox onChange={onClose} value="kurta-kurti">
                  kurta-kurti
                </Checkbox>
                <Checkbox onChange={onClose} value="laptop">
                  laptop
                </Checkbox>
                <Checkbox onChange={onClose} value="shirts-tops-tunics">
                  shirts-tops-tunics
                </Checkbox>
                <Checkbox onChange={onClose} value="mens-clothing">
                  mens-clothing
                </Checkbox>
                <Checkbox onChange={onClose} value="t-shirt">
                  t-shirt
                </Checkbox>
                <Checkbox onChange={onClose} value="mobile">
                  mobile
                </Checkbox>
                <Checkbox onChange={onClose} value="shirt">
                  shirt
                </Checkbox>
                <Checkbox onChange={onClose} value="jeans">
                  jeans
                </Checkbox>
                <Checkbox onChange={onClose} value="kids-clothing">
                  kids-clothing
                </Checkbox>
                <Checkbox onChange={onClose} value="watch">
                  watch
                </Checkbox>
                <Checkbox onChange={onClose} value="audio">
                  audio
                </Checkbox>
              </Grid>
            </CheckboxGroup>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Filter;
