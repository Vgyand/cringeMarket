import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../redux/cart/reducer";

export const OrderItem = ({ good, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem(id));
  };

  return (
    <tr className="cart_item">
      <td className="product-remove">
        <Link
          to=""
          title="Remove this item"
          className="remove"
          onClick={handleDelete}
        >
          ×
        </Link>
      </td>
      <td className="product-thumbnail">
        <Link to=""></Link>
      </td>
      <td className="product-name">
        <a href="single-product.html">{good.name}</a>
      </td>
      <td className="product-price">
        <span className="amount">{good.price}$</span>
      </td>
    </tr>
  );
};
