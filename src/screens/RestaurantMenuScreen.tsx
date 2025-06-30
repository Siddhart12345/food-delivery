import {  IonContent, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import './RestaurantMenuScreen.scss'
import MenuCard from "../component/menuComponents/MenuCard";
import { useHistory, useParams } from "react-router";
import { getItemsByRestaurantId } from "../services/api";
import { ICart,  IMenuItems } from "../interfaces/restaurant";

const RestaurantMenuScreen: React.FC = () => {
    const [restaurantCart,setRestaurantCart]=useState<ICart>();
    const[allRestaurantMenuItems,setAllRestaurantMenuItems]=useState<IMenuItems[]>([]);
    const {restaurantId}= useParams<{restaurantId:string}>();
    const history = useHistory()

    useEffect(()=>{getItemsByRestaurantId(restaurantId).then((response)=>{
        setAllRestaurantMenuItems(response);
console.log('response',response);

    })
.catch((error)=>{console.log(error)})},[])
useEffect(()=>{
    console.log('restaurantCart',restaurantCart);
},[restaurantCart])
const handleAddItemInCart=(menuItem:IMenuItems)=>{
    console.log(menuItem);
    let newCart:ICart
    if (restaurantCart!==undefined){
        newCart=restaurantCart;
    } else {
        newCart={
            restaurantId:restaurantId,
            items:[],
            totalPrice:0,}
        }
        const isItemInclude=newCart.items.find((item)=>{
            return item.itemId=== menuItem._id;
        })
        if(isItemInclude){
        return;
    }else{
        const newCartItem={itemId:menuItem._id,
            price: menuItem.price,
            name: menuItem.name,
            quantity:1,
            totalItemPrice: menuItem.price,
        }
        newCart.items.push(newCartItem);
        setRestaurantCart(newCart);
    }
    }
    

  return (
    <IonPage>
      <IonContent fullscreen>
      
          <div className="restaurant_menu_screen">
            <div className="menu_header">
                <div className="back_button"onClick={()=>{history.goBack();}}>
                    back
                </div>

                
              <div className="title">Lorem, ipsum dolor.</div>
            </div>
            <div className="menu_body">
              <div className="menu_card_section">
                {allRestaurantMenuItems && allRestaurantMenuItems.map((menuItems,menuItemsIndex)=>{
                return(<div className="menu_list" key = {menuItemsIndex}>
                <MenuCard addItem={handleAddItemInCart} itemData={menuItems}/>
              </div>)})}
            </div>
          </div>
          </div>
       
      </IonContent>
    </IonPage>
  );
};

export default RestaurantMenuScreen;
