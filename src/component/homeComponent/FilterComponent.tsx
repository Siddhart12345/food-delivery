import React from 'react'
import "./FilterComponent.scss"
import { IoSearch } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
const FilterComponent:React.FC = () => {
  return (
    <>
    <div className = 'filter_component'>
      <div className = 'filter_section'>
        <div className= 'location_container'>
          <div className="location_title"> 
            your location
          </div>
          <div className="location">
            Lorem, ipsum dolor.
          </div>
        </div>
        <div className="search_container">
          <div className="search_icon">
            < IoSearch className='icon' />
            <RxCross1  className='icon_2'/>
          </div>
          
          <input type="text" className="search_input" placeholder='search restaurant'/>
        
        
          
        </div>
      </div>
    </div>
  </>
  )
}

export default FilterComponent

