import { IonContent, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { ICart, IRestaurant } from "../interfaces/restaurant";
import { getRestaurantById } from "../services/api";
import "./CartScreen.scss";
import { useHistory, useLocation } from "react-router";
import CartItem from "../component/CartComponent/CartItems";

const CartScreen: React.FC = () => {
  const [restaurantCart, setRestaurantCart] = useState<ICart>();
  const [restaurantData, setRestaurantData] = useState<IRestaurant>();

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const cartString = localStorage.getItem("restaurantCart");

    // Check if the value is null, "null", or "undefined"
    if (cartString && cartString !== "undefined" && cartString !== "null") {
      try {
        const cartData: ICart = JSON.parse(cartString);
        setRestaurantCart(cartData);

        getRestaurantById(cartData.restaurantId)
          .then((response) => {
            setRestaurantData(response);
          })
          .catch((error) => {
            console.error("Failed to fetch restaurant:", error);
          });
      } catch (error) {
        console.error("Invalid cart data in localStorage:", error);
        history.goBack();
      }   
    }else {
      history.goBack();
    }
  }, [location.key]);

  const handleIncrementOrDecrement = (itemIndex: number, method: string) => {
    if (!restaurantCart) {
      return;
    }
    const newCart = { ...restaurantCart };
    const newCartItems = [...restaurantCart.items];
    const selectedCartItem = { ...newCartItems[itemIndex] };

    if (method === "increment") {
      selectedCartItem.quantity += 1;

      selectedCartItem.totalItemPrice =
        selectedCartItem.price * selectedCartItem.quantity;

      newCartItems[itemIndex] = selectedCartItem;
    } else if (method === "decrement") {
      if (selectedCartItem.quantity <= 1) {
        newCartItems.splice(itemIndex, 1);
      } else {
        selectedCartItem.quantity -= 1;

        selectedCartItem.totalItemPrice =
          selectedCartItem.price * selectedCartItem.quantity;

        newCartItems[itemIndex] = selectedCartItem;
      }
    }

    newCart.items = newCartItems;

    newCart.totalPrice = newCart.items.reduce(
      (acc, item) => acc + item.totalItemPrice,
      0
    );

    if (newCart.items.length <= 0) {
      history.goBack();
      localStorage.removeItem("restaurantCart");
    } else {
      setRestaurantCart(newCart);
      localStorage.setItem("restaurantCart", JSON.stringify(newCart));
    }
  };

  return (
    <IonPage>
      <IonContent>
        <div className="cart_screen">
          <div className="cart_container">
            <div className="header_section">
              <div
                className="back_button"
                onClick={() => {
                  history.goBack();
                }}
              >
                Back
              </div>
              <div className="restaurant_name">{restaurantData?.name}</div>
            </div>

            <div className="cart_item_section">
              {restaurantCart &&
                restaurantCart.items?.map((cartItem, itemIndex) => {
                  return (
                    <div key={itemIndex}>
                      <CartItem
                        cartItemData={cartItem}
                        itemIndex={itemIndex}
                        incrementOrDecrement={handleIncrementOrDecrement}
                      />
                    </div>
                  );
                })}
            </div>
            <div className="footer_section">
              <div className="total_section">
                <span>Payable Amount</span>
                <span>₹ {restaurantCart?.totalPrice}</span>
              </div>

              <button className="place_order_btn">Place Order</button>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CartScreen;
