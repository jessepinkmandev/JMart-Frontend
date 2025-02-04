import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";

const Categorys = () => {
  const { categorys } = useSelector((state) => state.home);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    Desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mdTablet: {
      breakpoint: { max: 991, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
    smMobile: {
      breakpoint: { max: 640, min: 0 },
      items: 2,
    },
    xsMobile: {
      breakpoint: { max: 440, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="w-[87%] mx-auto relative">
      <div className="w-[85%] flex flex-wrap mx-auto ">
        <div className="w-full">
          <div className="text-center flex justify-center items-center flex-col text-3xl text-slate-600 font-bold relative pb-12 ">
            <h2>Categories </h2>
            <div className="w-24 h-1 bg-slate-300 mt-4"></div>
          </div>
        </div>
      </div>
      <Carousel
        autoPlay={true}
        infinite={true}
        arrows={true}
        responsive={responsive}
        transitionDuration={500}
      >
        {categorys.map((cat, i) => (
          <Link
            to={`/products?category=${cat.name}`}
            className="h-48 border block"
            key={i}
          >
            <div className="w-full h-full relative p-3 ">
              <img src={cat.image} alt="" />
              <div className="absolute bottom-6 w-full mx-auto font-bold left-0 flex justify-center text-white bg-[#3330305d] items-center ">
                <span>{cat.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default Categorys;
