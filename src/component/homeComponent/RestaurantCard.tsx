import React from 'react'
import './RestaurantCard.scss'
import { FaStar } from "react-icons/fa6";
import { IRestaurant } from '../../interfaces/restaurant';
interface IRestaurantCardProps{
    restaurantData:IRestaurant
}

const RestaurantCard:React.FC<IRestaurantCardProps> = ({restaurantData}) => {
  return (
    <div className='restaurant_card'>
        <div className="image_section">
            <img src={restaurantData.image} alt="" />
        </div>
        <div className="content_section">
            <div className="title">
            {restaurantData.name}
            </div>
            <div className="description">
                {restaurantData.description}</div>
            <div className="rating_section">
               
                <div className="offer">
                    {restaurantData.currentOffer}
                </div>
                <div className="rating">
                    
               <FaStar />
               <span> {restaurantData.rating}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RestaurantCard
