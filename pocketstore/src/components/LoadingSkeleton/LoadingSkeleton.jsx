import { Skeleton, Grid, GridItem } from "@chakra-ui/react";

import Styles from "./LoadingSkeleton.module.css";

function LoadingSkeleton() {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1,1fr)",
        sm: "repeat(2,1fr)",
        md: "repeat(3,1fr)"
      }}
      gap="10px"
      className={Styles.grid}
    >
      <GridItem height="450px">
        <Skeleton h="100%" w="100%" />
      </GridItem>
      <GridItem height="450px">
        <Skeleton h="100%" w="100%" />
      </GridItem>
      <GridItem height="450px">
        <Skeleton h="100%" w="100%" />
      </GridItem>
      <GridItem height="450px">
        <Skeleton h="100%" w="100%" />
      </GridItem>
      <GridItem height="450px">
        <Skeleton h="100%" w="100%" />
      </GridItem>
      <GridItem height="450px">
        <Skeleton h="100%" w="100%" />
      </GridItem>
      <GridItem height="450px">
        <Skeleton h="100%" w="100%" />
      </GridItem>
      <GridItem height="450px">
        <Skeleton h="100%" w="100%" />
      </GridItem>
      <GridItem height="450px">
        <Skeleton h="100%" w="100%" />
      </GridItem>
      <GridItem height="450px">
        <Skeleton h="100%" w="100%" />
      </GridItem>
    </Grid>
  );
}

export default LoadingSkeleton;
