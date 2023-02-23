import React, { useEffect, useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Styles from "./ProductCarousel.module.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";

export default function MultiProductCarousel({ handleCategories, categories }) {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [categories, setCategories] = useState([]);

  const data = [
    {
      image:
        "https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Alldeals_white._CB468586681_.png",
      title: "All"
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20211216/9VLw/61ba5599aeb26901100e8e86/heeposh_purple_floral_embroidery_flared_kurta_sets.jpg",
      title: "women-clothing"
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20221228/xST0/63ac59bcaeb269659c1343b7/anjaneya_sarees_red_banarasi_silk_kanjivaram_saree_with_contrast_border.jpg",
      title: "saree"
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20221118/PR8z/6376a1a4aeb269659c9adb5e/fiorra_maroon_round-neck_straight_kurta_suit_set.jpg",
      title: "kurta-suit-sets"
    },
    {
      image:
        "https://www.reliancedigital.in/medias/ONEPLUS-43Y1-TV-491895011-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxODYzOTV8aW1hZ2UvanBlZ3xpbWFnZXMvaGFlL2gzOC85ODEwMDU4Mzc5Mjk0LmpwZ3wwYWE2Y2UzOTE3MzU3ODI0ZjJmZjhkZGVmZTVkNzc3ODlmNzIwMjQ3N2U0ZWViMzFmOGYxMmYxZWNiZGM2NGUx",
      title: "tv"
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20220923/UHfs/632d9997f997dd1f8d1915fe/hritika_multicoloured_striped_straight_kurta.jpg",
      title: "kurta-kurti"
    },
    {
      image:
        "https://www.reliancedigital.in/medias/Asus-X415EA-EK522WS-Laptop-493178259-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3Nzg0NnxpbWFnZS9qcGVnfGltYWdlcy9oMzQvaDA4Lzk5MDQ3MzEzMjQ0NDYuanBnfDA4NWIwYTJkNDRlMWUwMmM4YzZhYmI4NDJjYjhmOTc4ZDM4ZmRhMTQxN2UxM2RiMTQ2NWI0ZTk3YjkwNTE2NjE",
      title: "laptop"
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20221114/3kgH/63722df9f997ddfdbd71ad50/jinal_%26_jinal_maroon_chevron_print_top.jpg",
      title: "shirts-tops-tunics"
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20221027/6tk7/635ac20baeb269659c5cb68a/jump_cuts_white_typographic_print_crew-neck_t-shirt.jpg",
      title: "mens-clothing"
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20220527/mdHs/628fed3bf997dd03e2354ec1/netplay_khaki_polo_t-shirt_with_welt_pocket.jpg",
      title: "t-shirt"
    },
    {
      image:
        "https://www.reliancedigital.in/medias/Apple-iPhone-14-Mobile-Phone-493177749-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MjYxNnxpbWFnZS9qcGVnfGltYWdlcy9oNWQvaGYxLzk4OTA0ODgyODcyNjIuanBnfDZiZWJmNDQ2ZmEwOGNiY2EzNzVjZWZiMjY0NjBhMGYwYzk3MzQ4NDZjYzY1MzliZTZjYmJjZWNhNzdjMDA0ZjY",
      title: "mobile"
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20210316/sz0f/6050cc0bf997dd5c4013b366/the_indian_garage_co_beige_checked_slim_fit_shirt_with_patch_pocket.jpg",
      title: "shirt"
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20220623/Y4l8/62b49780f997dd03e299f079/john_players_jeans_dark_blue_lightly_washed_distressed_skinny_jeans.jpg",
      title: "jeans"
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20221229/HsT3/63adb569aeb269659c16474b/mom%27s_love_mustard_%26white_colourblock_hoodie_%26_joggers_set.jpg",
      title: "kids-clothing"
    },
    {
      image:
        "https://www.reliancedigital.in/medias/Ambrane-Wise-Spirit-Smart-watch-492850573-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w5MjMyMnxpbWFnZS9qcGVnfGltYWdlcy9oMDkvaGE1Lzk4NDIwOTc1ODYyMDYuanBnfGYxZThhZTQ3N2I4ZDk5NjRlZWM4NDkzNDM4NTBjMjUyNzQwYmYxZDBlMjc4OWUzZTQ4MzllNjgxNGJiZjEwYjA",
      title: "watch"
    },
    {
      image:
        "https://www.reliancedigital.in/medias/pTron-Basspods-P181-Bluetooth-Earphones-492796965-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNjkzNTZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGNkL2hlMS85ODI1ODk0NjI5NDA2LmpwZ3xhODc1MTY0NmY0YWVmYzVmMWQ5MTk3ODVjMDk1YzQ4ZmU2YTQ1MzcyOTM0MjFiYWJkNjNiNTg5MzY3NjI3NDJm",
      title: "audio"
    }
  ];

  // useEffect(() => {
  //   let param = {};

  //   if (categories.length) {
  //     param.filter = categories;
  //   }

  //   console.log("ProductCarouselPage-param",param);

  //   setSearchParams(param);
  // }, [categories]);

  const handleChoice = (title) => {
    // setCategories([title]);
    if (categories.includes(title) === false) {
      if (title === "All") {
        handleCategories([]);
      } else {
        handleCategories([...categories, title]);
      }
    }
  };

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={50}
      totalSlides={16}
      visibleSlides={5}
      // isInfinity={true}
      className={Styles.CarouselProvider}
    >
      <Slider
        className={Styles.Slider}
        style={{
          height: "100%"
          // border: "1px solid red"
        }}
      >
        {data.map((elem, i) => {
          return (
            <Slide
              index={i}
              className={Styles.Slide}
              key={i}
              style={{
                height: "100%"
                // border:'1px solid green',
              }}
            >
              <div
                onClick={() => handleChoice(elem.title)}
                className={Styles.cardHolder}
                style={{ height: "100%" }}
              >
                <img src={elem.image} alt="women-clothing" />
                <p>{elem.title}</p>
              </div>
            </Slide>
          );
        })}
      </Slider>
      <ButtonBack className={Styles.BtnPrev}>
        <BsChevronLeft />
      </ButtonBack>
      <ButtonNext className={Styles.BtnNext}>
        <BsChevronRight />
      </ButtonNext>
    </CarouselProvider>
  );
}
