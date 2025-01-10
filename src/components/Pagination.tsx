import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const Pagination = ({
  pageNumber,
  setPageNumber,
  totalItem,
  perPage,
  showItem,
}) => {
  let totalPage = Math.ceil(totalItem / perPage);
  let startPage = pageNumber;
  let difference = totalPage - pageNumber;
  if (difference <= showItem) {
    startPage = totalPage - showItem;
  }
  let endPage = startPage < 0 ? showItem : showItem + startPage;

  if (startPage <= 0) {
    startPage = 1;
  }
  const createBtn = () => {
    const btns = [];

    for (let i = startPage; i < endPage; i++) {
      btns.push(
        <li
          onClick={() => {
            setPageNumber(i);
          }}
          className={` ${
            pageNumber === i
              ? "bg-slate-800 shadow-lg shadow-green-300/50 text-white"
              : "bg-slate-500 hover:bg-green-400 shadow-lg hover:shadow-indigo-500/50  hover:text-white text-white"
          } 
          w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer `}
        >
          {i}
        </li>
      );
    }
    return btns;
  };

  return (
    <ul className="flex gap-3">
      {pageNumber > 1 && (
        <li
          onClick={() => {
            setPageNumber(pageNumber - 1);
          }}
          className="flex justify-center items-center rounded-full bg-slate-800 text-white h-[33px] w-[33px] cursor-pointer"
        >
          <MdOutlineKeyboardDoubleArrowLeft />
        </li>
      )}
      {createBtn()}
      {pageNumber < totalPage && (
        <li
          onClick={() => {
            setPageNumber(pageNumber + 1);
          }}
          className="flex justify-center items-center rounded-full bg-slate-800 text-white h-[33px] w-[33px] cursor-pointer"
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </li>
      )}
    </ul>
  );
};

export default Pagination;
