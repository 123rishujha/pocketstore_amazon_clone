import MultiProductCarousel from "../../components/CategoriesCarousel/ProductCarousel";
import Styles from "./ProductPage.module.css";

function ProductPage() {
  return (
    <div>
      <div className={Styles.carouselHolder}>
        <MultiProductCarousel />
      </div>
    </div>
  );
}

export default ProductPage;
