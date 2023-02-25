import { Flex, Button, Box, Image, Text } from "@chakra-ui/react";
import Styles from "./Pagination.module.css";

function Pagination({ active, length, nOfProduct, handleActive }) {
  let pages = Math.ceil(length / nOfProduct);

  return (
    <Box>
      <Flex className={Styles.paginationMain}>
        {active !== 1 && (
          <Button
            variant={"outline"}
            colorScheme="teal"
            size="sm"
            onClick={() => handleActive(active - 1)}
          >
            Prev
          </Button>
        )}
        {
          // left side buttons
          new Array(pages)
            .fill("")
            .map((elem, i) => {
              return (
                <Button
                  key={i}
                  colorScheme={i + 1 === active ? "teal" : "gray"}
                  variant={"outline"}
                  size="sm"
                  onClick={() => handleActive(i + 1)}
                >
                  {i + 1}
                </Button>
              );
            })
            .filter((elem, i) => {
              return i < active && i >= active - 2;
            })
        }

        {
          // middle dots
          new Array(pages)
            .fill("")
            .map((elem, i) => {
              return <Button>{i + 1}</Button>;
            })
            .filter((elem, i) => {
              return i >= active && i < active + 1 && i < pages - 1; //pages-value should be equal to right side buttons i>=pages-value;
            })
            .map((elem) => {
              return "•••";
            })
        }

        {
          // right side buttons(page-1=> means last button)
          new Array(pages)
            .fill("")
            .map((elem, i) => {
              return (
                <Button
                  key={i}
                  colorScheme={i + 1 === active ? "teal" : "gray"}
                  variant={"outline"}
                  size="sm"
                  onClick={() => handleActive(i + 1)}
                >
                  {i + 1}
                </Button>
              );
            })
            .filter((elem, i) => {
              return i >= pages - 1 && i !== 0 && i !== active - 1;
            })
        }
        <Button
          isDisabled={active === pages}
          variant={"outline"}
          colorScheme="teal"
          size="sm"
          onClick={() => handleActive(active + 1)}
        >
          Next
        </Button>
      </Flex>
      <Image
        width="100%"
        height="150px"
        minHeight="150px"
        objectFit="cover"
        objectPosition="50% 50%"
        marginTop="10px"
        src="https://images-na.ssl-images-amazon.com/images/I/7191qk-xnFL.jpg"
        alt="poster"
      />
    </Box>
  );
}

export default Pagination;

//pagination logic by 123rishujha;
