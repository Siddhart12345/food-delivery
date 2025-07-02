import { IonContent, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { ICart, IRestaurant } from "../interfaces/restaurant";
import { getRestaurantById } from "../services/api";
import "./CartScreen.scss";
import { useHistory } from "react-router";
import CartItem from "../component/CartComponent/CartItems";

const CartScreen: React.FC = () => {
  const [restaurantCart, setRestaurantCart] = useState<ICart>();
  const [restaurantData, setRestaurantData] = useState<IRestaurant>();

  const history = useHistory();

  useEffect(() => {
    const cartString = localStorage.getItem("restaurantCart");

    // Check if the value is null, "null", or "undefined"
    if (cartString && cartString !== "undefined" && cartString !== "null") {
      try {
        const cartData: ICart = JSON.parse(cartString);
        setRestaurantCart(cartData);
        console.log("cartData", cartData);

        getRestaurantById(cartData.restaurantId)
          .then((response) => {
            setRestaurantData(response);
            console.log("response", response);
          })
          .catch((error) => {
            console.error("Failed to fetch restaurant:", error);
          });
      } catch (error) {
        console.error("Invalid cart data in localStorage:", error);
      }
    }
  }, []);
  useEffect(() => {});

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
                      <CartItem cartItemData={cartItem} />
                    </div>
                  );
                })}
             
            </div>
            <div className="footer_section">
              <div className="total_section">
                <span>Payable Amount</span>
                <span>₹ 25.47</span>
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
