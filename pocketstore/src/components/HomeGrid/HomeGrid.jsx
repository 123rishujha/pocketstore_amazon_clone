import { Grid, GridItem, Heading, Flex, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Style from "./HomeGrid.module.css";

function HomeGrid() {
  const navigate = useNavigate();

  const handleDetails = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <Grid className={Style.container}>
      {/* multi grid item */}
      <GridItem className={Style.gridItem}>
        <Text fontSize="18px" fontWeight="bold">
          Pick up where you left off
        </Text>
        <Grid templateColumns="repeat(2,1fr)" height="100%" width="100%">
          <GridItem cursor="pointer" onClick={() => handleDetails(521)}>
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
              height="100%"
              width="100%"
            >
              <Image
                className={Style.multImage}
                src={
                  "https://www.reliancedigital.in/medias/HP-ER1501AU-Laptop-493178397-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0MDEzNDh8aW1hZ2UvanBlZ3xpbWFnZXMvaDQwL2g2Zi85OTAxNTUwNzMxMjk0LmpwZ3xhNzVhY2Y2NTdhYWY0YTlkNTA5NTBkYzI0ODhjYTQwNTk0MWU2OTEzYjBmZjE3NzIxMWRlYjdmNjA2Yjk4ZWM1"
                }
                alt="laptop"
              />
              <Text noOfLines={1} fontSize="12px">
                HP 15s-er1501AU Standard Laptop (AMD Ryzen 3 3250U/8 GB/256 GB
                SSD/Radeon Graphics/Windows 11 Home/MSO/HD), 39.62 cm (15.6
                Inch)
              </Text>
            </Flex>
          </GridItem>
          <GridItem cursor="pointer" onClick={() => handleDetails(524)}>
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                className={Style.multImage}
                src={
                  "https://www.reliancedigital.in/medias/Lenovo-LJIN-Laptops-492574616-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMDEzMzN8aW1hZ2UvanBlZ3xpbWFnZXMvaDhlL2g3OS85NzQxNTYzMTk5NTE4LmpwZ3xhMGU2NTcyYTdjMmZhNmYxMDg2ZGY2MDMzOWMwMmI3NDczZjNlNGU3MTU1N2U5OTEzMDI4MmFhNTI0YTkwZTgw"
                }
                alt="laptop"
              />
              <Text noOfLines={1} fontSize="12px">
                Lenovo LJIN IdeaPad 3 Laptop (11th Gen Intel Core
                i3-1115G4/8GB/512GB SSD/Intel UHD Graphics/Windows 11/MSO/Full
                HD), 39.62 cm (15.6 inch)
              </Text>
            </Flex>
          </GridItem>
          <GridItem cursor="pointer" onClick={() => handleDetails(528)}>
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                className={Style.multImage}
                src={
                  "https://www.reliancedigital.in/medias/Asus-M3400QA-KM512WS-Laptops-492850645-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMDc4MjB8aW1hZ2UvanBlZ3xpbWFnZXMvaGRkL2hiZi85ODUxNTg2ODM4NTU4LmpwZ3w0NjE3YTVmYmE5ZmMxMzU2ZWE1Njg5ODQ2NTY2MzJhZDhlYWMxMzEzZjRiZjM1MTBmZWE4YzA1NTQ1MDBjZWZk"
                }
                alt="laptop"
              />
              <Text noOfLines={1} fontSize="12px">
                Asus KM512WS VivoBook Pro 14 Laptop (AMD Ryzen5 5600H/16 GB/512
                GB SSD/AMD Radeon Graphics/Windows 11/MSO/OLED), 35.56 cm (14
                inch)
              </Text>
            </Flex>
          </GridItem>
          <GridItem cursor="pointer" onClick={() => handleDetails(535)}>
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                className={Style.multImage}
                src={
                  "https://www.reliancedigital.in/medias/pTron-Basspods-P181-Bluetooth-Earphones-492796965-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNjkzNTZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGNkL2hlMS85ODI1ODk0NjI5NDA2LmpwZ3xhODc1MTY0NmY0YWVmYzVmMWQ5MTk3ODVjMDk1YzQ4ZmU2YTQ1MzcyOTM0MjFiYWJkNjNiNTg5MzY3NjI3NDJm"
                }
                alt="bluetooth"
              />
              <Text noOfLines={1} fontSize="12px">
                pTron Basspods P181 Bluetooth 5.1 Wireless Headphones, 32Hrs
                Total Playtime, Immersive Stereo Sound, Stereo Calls, Snug-fit
                TWS Earbuds, Touch Controls, Voice Assistance, Type-C Fast
                Charging & IPX4 (Black)
              </Text>
            </Flex>
          </GridItem>
        </Grid>
      </GridItem>

      <GridItem
        className={Style.gridItem}
        onClick={() => navigate(`/products?category=laptop`)}
      >
        <Text fontSize="18px" fontWeight="bold">
          Computer and Accessories
        </Text>
        <Image
          className={Style.image}
          src={
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
          }
          alt="computer"
        />
      </GridItem>

      <GridItem
        className={Style.gridItem}
        onClick={() => navigate(`/products?category=watch`)}
      >
        <Text fontSize="18px" fontWeight="bold">
          Watches
        </Text>
        <Image
          className={Style.image}
          src={
            "https://www.reliancedigital.in/medias/Hammer-Pulse-Ace-Pro-Sports-Fitness-Watches-493177732-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTQ0OTh8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ1L2g1Yi85OTIzMTg5MDE0NTU4LmpwZ3w3YTUzZTUyYWNiMzk2NzRhZTYzZmM5ZmYyMDQ2OWFmODc5ZjZhYmEzNzY3MDcxZGFmMmMwNjY3MGU2NzdiZTQ5"
          }
          alt="watch"
        />
      </GridItem>

      <GridItem
        className={Style.gridItem}
        onClick={() => navigate(`/products?category=mobile`)}
      >
        <Text fontSize="18px" fontWeight="bold">
          Top Deals on Mobile
        </Text>
        <Image
          className={Style.image}
          src={
            "https://www.reliancedigital.in/medias/Apple-iPhone-14-Mobile-Phone-493177756-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NzA4MnxpbWFnZS9qcGVnfGltYWdlcy9oODUvaDNlLzk4OTA1MDEzOTQ0NjIuanBnfDc4ZjdkYzExNjA2NTE3NzMyMTNkMGUxYmQwNGI5NDg0MTYxMmRjZjI1ZGNlMzc2ODRkNjc3MzkwNjJlMjcwNTM"
          }
          alt="mobile"
        />
      </GridItem>

      <GridItem
        className={Style.gridItem}
        onClick={() => navigate(`/products?category=tv`)}
      >
        <Text fontSize="18px" fontWeight="bold">
          Top Deals on tv
        </Text>
        <Image
          className={Style.image}
          src={
            "https://www.reliancedigital.in/medias/Mi-4A-Horizon-Edition-Television-492166368-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNjk2MzB8aW1hZ2UvanBlZ3xpbWFnZXMvaDY5L2hkYS85NzkwODc0NTE3NTM0LmpwZ3wwYmMzMWVjZWU4M2FiOTljNmVmNTYzYjhlYjY1NGIyZTEwNzc0ZTI1M2Y3YTFhMTEyYmRlOGMyODYwMmUzYzU1"
          }
          alt="tv"
        />
      </GridItem>

      <GridItem
        className={Style.gridItem}
        onClick={() =>
          navigate(
            `/products?category=tv&category=mobile&category=watch&category=heater&category=laptop`
          )
        }
      >
        <Text fontSize="18px" fontWeight="bold">
          Electronics
        </Text>
        <Image
          className={Style.image}
          src={
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
          }
          alt="tv"
        />
      </GridItem>

      <GridItem
        className={Style.gridItem}
        onClick={() => navigate(`/products?category=kids-clothing`)}
      >
        <Text fontSize="18px" fontWeight="bold">
          Gift for Kids
        </Text>
        <Image
          className={Style.image}
          src={
            "https://assets.ajio.com/medias/sys_master/root/20221125/vwQX/637fdfb0aeb269659cb39d72/toonyport_multicoloured_typographic_print_sweatshirt_%26_joggers_set.jpg"
          }
          alt="tv"
        />
      </GridItem>

      <GridItem
        className={Style.gridItem}
        onClick={() =>
          navigate(`/products?category=shirts-tops-tunics&category=saree`)
        }
      >
        <Text fontSize="18px" fontWeight="bold">
          Dresses
        </Text>
        <Image
          className={Style.image}
          src={
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg"
          }
          alt="dress"
        />
      </GridItem>
    </Grid>
  );
}

export default HomeGrid;
