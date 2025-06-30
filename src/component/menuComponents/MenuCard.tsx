import React from 'react'
import './MenuCard.scss'
import { IMenuItems } from '../../interfaces/restaurant'
interface ItemsCardProps{
    itemData:IMenuItems
}

const MenuCard: React.FC<ItemsCardProps>= ({itemData}) => {
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
            <div className="button">
                Add Item
            </div>
        </div>
    
    </div>
  )
}

export default MenuCard
