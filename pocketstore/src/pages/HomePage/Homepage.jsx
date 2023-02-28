import HomeGrid from "../../components/HomeGrid/HomeGrid";
import MainCarousel from "../../components/MainCarousel/MainCarousel";
import Styles from "./Homepage.module.css";

function Homepage() {
  const array = [
    "https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
  ];

  return (
    <div style={{ width: "100%", margin: "auto" }}>
      {/* <h1>Homepage</h1> */}
      <div className={Styles.holder}>
        <div className={Styles.carouselMainHolder}>
          <MainCarousel
            visibleSlides={1}
            totalSlides={array.length}
            array={array}
          />
        </div>
        <div className={Styles.HomeGridHolder}>
          <HomeGrid />
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          height: "300px",
          border: "1px solid red",
          background: "red",
        }}
      >
        <h1>Don't remove it</h1>
      </div>
    </div>
  );
}

export default Homepage;
