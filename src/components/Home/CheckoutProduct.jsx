import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Quentity from "../Checkout/Quentity";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";
import "./CheckoutProduct.css";

function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  hasPrime,
  quantity,
  totalPrice,
}) {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-5 border-gray-300 border-b my-3 grid-style min-h-fit ">
        <img src={image} className="checkoutProduct__image object-contain " />

      <div className=" col-span-3 min-w-fit">
        <p className="m-0 text-lg font-medium">{title}</p>
        <div>
          {Array(5)
            .fill()
            .map((_, idx) => {
              if (rating - idx >= 0.75) {
                return <StarIcon key={idx} className="starIcons" />;
              } else if (rating - idx > 0.3 && rating - idx < 0.75) {
                return <StarHalfIcon key={idx} className="starIcons" />;
              } else {
                return <StarOutlineIcon key={idx} className="starIcons" />;
              }
            })}
        </div>
        <div className="text-xs my-2 line-clamp-2">{description}</div>
        <div className="grid  pb-2 grid-cols-5 lg:grid-cols-7  " >
          <div className="mt-2 ">
            <Quentity id={id} key={id} />
          </div>
          <div className="checkout__actions__aContainer ml-2">
            <a
              className="checkout__actions__a"
              onClick={() => {
                dispatch(removeFromCart(id));
              }}
            >
              Delete
            </a>
          </div>
          <div className="checkout__actions__aContainer col-span-2 ml-2">
            <a className="checkout__actions__a">Save for later</a>
          </div>

          <div className="checkout__actions__aContainer  mb-3 col-span-3 ">
            <a className="checkout__actions__a">Compare with similar items</a>
          </div>
        </div>
      </div>

      <div className="">
        <p className="text-right text-lg font-bold ">${price}</p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
