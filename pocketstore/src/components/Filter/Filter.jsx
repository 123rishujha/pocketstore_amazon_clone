import Styles from "./Filter.module.css";

import { Heading, CheckboxGroup, Box, Stack, Checkbox } from "@chakra-ui/react";

function Filter({ handleCategories, categories }) {
  const handleChecks = (value) => {
    // console.log(value);
    handleCategories(value);
  };

  return (
    <Box className={Styles.filterMain}>
      <Box width="100%" display={{ base: "none", md: "block" }}>
        <Heading fontSize="20px" padding="5px">
          Departments
        </Heading>
        <CheckboxGroup
          width="100%"
          colorScheme="green"
          value={categories}
          onChange={handleChecks}
        >
          <Stack spacing={"0px"} direction={["column"]}>
            <Checkbox value="women-clothing">women-clothing</Checkbox>
            <Checkbox value="saree">saree</Checkbox>
            <Checkbox value="kurta-suit-sets">kurta-suit-sets</Checkbox>
            <Checkbox value="tv">Tv</Checkbox>
            <Checkbox value="kurta-kurti">kurta-kurti</Checkbox>
            <Checkbox value="laptop">laptop</Checkbox>
            <Checkbox value="shirts-tops-tunics">shirts-tops-tunics</Checkbox>
            <Checkbox value="mens-clothing">mens-clothing</Checkbox>
            <Checkbox value="t-shirt">t-shirt</Checkbox>
            <Checkbox value="mobile">mobile</Checkbox>
            <Checkbox value="shirt">shirt</Checkbox>
            <Checkbox value="jeans">jeans</Checkbox>
            <Checkbox value="kids-clothing">kids-clothing</Checkbox>
            <Checkbox value="watch">watch</Checkbox>
            <Checkbox value="audio">audio</Checkbox>
          </Stack>
        </CheckboxGroup>
      </Box>
    </Box>
  );
}

export default Filter;
