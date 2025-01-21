import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import Categorys from "../components/Categorys";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import FeatureProducts from "../components/products/FeatureProducts";
import { useEffect } from "react";
import { get_products } from "../store/reducers/homeReducer";

const Home = () => {
  const dispatch = useDispatch();
  const { products, latestProducts, topRatedProducts, discountProducts } =
    useSelector((state) => state.home);

  useEffect(() => {
    dispatch(get_products());
  }, []);

  return (
    <div className="w-full">
      <Header />
      <Banner />
      <Categorys />
      <div className="py-12">
        <FeatureProducts products={products} />
      </div>
      <div className="py-10">
        <div className="w-[85%] flex flex-wrap mx-auto">
          <div className="grid w-full grid-cols-3 md-lg:grid-cols-2 md:grid-cols-1 gap-7">
            <div className="overflow-hidden">
              <Products products={latestProducts} title="Latest Products" />
            </div>
            <div className="overflow-hidden">
              <Products products={discountProducts} title="Discount Products" />
            </div>
            <div className="overflow-hidden">
              <Products
                products={topRatedProducts}
                title="Top Rated Products"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
