import {  IonContent, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import './RestaurantMenuScreen.scss'
import MenuCard from "../component/menuComponents/MenuCard";
import { useHistory, useParams } from "react-router";
import { getItemsByRestaurantId } from "../services/api";
import { IMenuItems } from "../interfaces/restaurant";

const RestaurantMenuScreen: React.FC = () => {
    const[allRestaurantMenuItems,setAllRestaurantMenuItems]=useState<IMenuItems[]>([]);
    const {restaurantId}= useParams<{restaurantId:string}>();
    const history = useHistory()

    useEffect(()=>{getItemsByRestaurantId(restaurantId).then((response)=>{
        setAllRestaurantMenuItems(response);
console.log('response',response);

    })
.catch((error)=>{console.log(error)})},[])
  return (
    <IonPage>
      <IonContent fullscreen>
      
          <div className="restaurant_menu_screen">
            <div className="menu_header">
                <div className="back_button"onClick={()=>{history.goBack();}}></div>

                
              <div className="title">Lorem, ipsum dolor.</div>
            </div>
            <div className="menu_body">
              <div className="menu_card_section">
                {allRestaurantMenuItems && allRestaurantMenuItems.map((menuItems,menuItemsIndex)=>{
                return(<div className="menu_list" key = {menuItemsIndex}>
                <MenuCard itemData={menuItems}/>
              </div>)})}
            </div>
          </div>
          </div>
       
      </IonContent>
    </IonPage>
  );
};

export default RestaurantMenuScreen;
