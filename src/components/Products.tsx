import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Products = ({ title, products }) => {
  // const products = [
  //   [1, 2, 3],
  //   [4, 5, 6],
  // ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    Desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const ButtonGroup = ({ next, previous }) => {
    return (
      <div className="flex justify-between items-center ">
        <div className="text-xl font-bold text-slate-600 ">{title}</div>
        <div className="flex justify-center items-center gap-3 text-slate-600">
          <button
            onClick={() => previous()}
            className="w-8 h-8 flex justify-center items-center bg-slate-300 border border-slate-200"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={() => next()}
            className="w-8 h-8 flex justify-center items-center bg-slate-300 border border-slate-200"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex gap-8 flex-col-reverse">
      <Carousel
        autoPlay={false}
        infinite={false}
        arrows={false}
        responsive={responsive}
        transitionDuration={500}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
      >
        {products.map((p, i) => {
          return (
            <div key={i} className="flex flex-col justify-start gap-2">
              {p.map((pl, j) => (
                <Link key={j} className="flex justify-start items-start" to="#">
                  <img className="w-28 h-28" alt="" />
                  <div className="px-3 flex justify-start items-start gap-1 flex-col text-slate-600">
                    <h2>{pl.name} </h2>
                    <span className="text-lg font-bold">${pl.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Products;
