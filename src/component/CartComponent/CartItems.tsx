import React from "react";
import "./CartItems.scss";
import { ICartItem } from "../../interfaces/restaurant";

interface ICartItemProps {
  cartItemData: ICartItem;
  itemIndex: number;
  incrementOrDecrement: (index: number, method: string) => void;
}
const CartItem: React.FC<ICartItemProps> = ({
  cartItemData,
  itemIndex,
  incrementOrDecrement,
}) => {
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
            <button
              onClick={() => {
                incrementOrDecrement(itemIndex, "decrement");
              }}
            >
              -
            </button>
            <span>{cartItemData.quantity}</span>
            <button
              onClick={() => {
                incrementOrDecrement(itemIndex, "increment");
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
