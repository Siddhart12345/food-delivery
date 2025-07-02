import React from "react";
import "./CartItems.scss";
import { ICartItem } from "../../interfaces/restaurant";

interface ICartItemProps {
  cartItemData: ICartItem;
}
const CartItem: React.FC<ICartItemProps> = ({ cartItemData }) => {
  return (
    <>
      <div className="cart_item">
        <img
          src={cartItemData.itemImage}
          alt="Margherita"
          className="item_image"
        />
        <div className="item_info">
          <h3 className="item_name">{cartItemData.name}</h3>
          <p className="item_desc">{cartItemData.description}</p>
        </div>
        <div className="item_controls">
          <span>₹ {cartItemData.totalItemPrice}</span>
          <div className="quantity_buttons">
            <button>-</button>
            <span>{cartItemData.quantity}</span>
            <button>+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
