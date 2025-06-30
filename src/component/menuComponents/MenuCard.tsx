import React from 'react'
import './MenuCard.scss'
import { IMenuItems } from '../../interfaces/restaurant'
interface ItemsCardProps{
    itemData:IMenuItems,
    addItem:(Data:IMenuItems)=> void;
}

const MenuCard: React.FC<ItemsCardProps>= ({itemData,addItem}) => {
  return (
    
      <div className="menu_card">
        <div className="image_section">
            <img src={itemData.image}/>
        </div>
        <div className="content_section">
            <div className="title">
                {itemData.name}
            </div>
            <div className="description">
                {itemData.description}
            </div>
            <div className="price_detail">
                <div className="price">
                    ₹
                    {itemData.price}
                </div>
                <div className="button" onClick={()=>{addItem(itemData);}}>
                Add Item
            </div>
            </div>
            
        </div>
    
    </div>
  )
}

export default MenuCard
