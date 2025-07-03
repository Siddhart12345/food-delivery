import React, { useEffect, useState } from "react";
import "./RestaurantMenuScreen.scss";
import { IonContent, IonPage } from "@ionic/react";
import MenuCard from "../component/menuComponents/MenuCard";
import { useHistory, useLocation, useParams } from "react-router";
import { getItemsByRestaurantId, getRestaurantById } from "../services/api";
import { ICart, IMenuItems, IRestaurant } from "../interfaces/restaurant";
const RestaurantMenuScreen: React.FC = () => {
  const [restaurantCart, setRestaurantCart] = useState<ICart|null>(null);
  const [allRestaurantMenuItems, setAllRestaurantMenuItems] = useState<
    IMenuItems[]
  >([]);
  const [restaurantData, setRestaurantData] = useState<IRestaurant>();
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const history = useHistory();
  const location=useLocation();

  useEffect(() => {
    getRestaurantById(restaurantId)
      .then((response) => {
        setRestaurantData(response);
      })
      .catch((error) => {
        console.log(error);
      });

    getItemsByRestaurantId(restaurantId)
      .then((response) => {
        setAllRestaurantMenuItems(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    const cartString = localStorage.getItem("restaurantCart");

    // if (cartString && cartString !== "undefined" && cartString !== "null") {
    //   const cartData: ICart = JSON.parse(cartString);
    //   setRestaurantCart(cartData);
    // } else {
    //   setRestaurantCart(null);
    // }
    if (cartString && cartString !== "undefined" && cartString !== "null") {
      try {
        const cartData: ICart = JSON.parse(cartString);

        if (cartData.restaurantId === restaurantId) {
          setRestaurantCart(cartData);
        } else {
          setRestaurantCart(null);
        }
      } catch (error) {
        console.error("Invalid cart data in localStorage:", error);
        setRestaurantCart(null);
      }
    }
  }, [location.key]);

  

  useEffect(() => {
    const cartString = localStorage.getItem("restaurantCart");

    if (cartString && cartString !== "undefined" && cartString !== "null") {
      const cartData: ICart = JSON.parse(cartString);
      setRestaurantCart(cartData);
    }
  }, []);

  useEffect(() => {
    console.log("restuarantCart", restaurantCart);
    localStorage.setItem("restaurantCart", JSON.stringify(restaurantCart));
  }, [restaurantCart]);

  const handleAddItemsInCart = (menuItem: IMenuItems) => {
    console.log(menuItem);
    let newCart: ICart;
    if (restaurantCart !== null) {
      newCart = { ...restaurantCart, items: [...restaurantCart.items] };
    } else {
      localStorage.removeItem("restaurantCart");
      newCart = {
        restaurantId: restaurantId,
        items: [],
        totalPrice: 0,
      };
    }
    const isItemInclude = newCart.items.find((item) => {
      return item.itemId === menuItem._id;
    });
    if (isItemInclude) {
      return;
    } else {
      const newCartItem = {
        itemId: menuItem._id,
        price: menuItem.price,
        name: menuItem.name,
        quantity: 1,
        totalItemPrice: menuItem.price,
        itemImage: menuItem.image,
        description: menuItem.description,
      };
      newCart.items.push(newCartItem);

      newCart.totalPrice = newCart.items.reduce(
        (acc, item) => acc + item.totalItemPrice,
        0
      );
      setRestaurantCart(newCart);
    }
  };

  const handleRemoveItemFromCart = (menuItemId: string) => {
    if (restaurantCart) {
      const newCartItems = restaurantCart?.items.filter((cartItem) => {
        return cartItem.itemId !== menuItemId;
      });

      setRestaurantCart((prev) => {
        if (!prev) {
          return prev;
        }
        return {
          ...prev,
          items: newCartItems,
        };
      });
    }
  };
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="restaurant_menu_screen">
          <div className="menu_header">
            <div
              className="back_button"
              onClick={() => {
                history.goBack();
              }}
            >
              back
            </div>
            <div className="title">{restaurantData?.name}</div>
            {restaurantCart !== null && (
            <div
              className="back_button"
              onClick={() => {
                history.push("/cart-screen");
              }}
            >
              Go to Cart
            </div>
            )}
          </div>
            
          <div className="menu_body">
            <div className="menu_card_section">
              {allRestaurantMenuItems &&
                allRestaurantMenuItems.map((menuItems, menuItemsIndex) => {
                  const filteredCartItem = restaurantCart?.items.find(
                    (cartItem) => {
                      return cartItem.itemId === menuItems._id;
                    }
                  );
                  return (
                    <div className="menu_list" key={menuItemsIndex}>
                      <MenuCard
                        addItem={handleAddItemsInCart}
                        itemData={menuItems}
                        isIncluded={filteredCartItem ? true : false}
                        removeItem={handleRemoveItemFromCart}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RestaurantMenuScreen;
