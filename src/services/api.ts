import { IMenuItems, IRestaurant } from "../interfaces/restaurant";
import { menuItemsList, restaurantList } from "./jsonData";

export const getAllRestaurants= async():Promise <IRestaurant[]> => {
   return await new Promise((resolve,reject) => {
        const allRestaurants=restaurantList;
        resolve(allRestaurants)
        reject(null)

    })
    

}
export const getItemsByRestaurantId=async(restaurantId:string):Promise<IMenuItems[]>=>
   { return await new Promise((resolve,reject)=> {
       reject(null)
        const filteredMenuIetms= menuItemsList.filter((item)=> {
           return  item.restaurantId === restaurantId;
        })
        resolve(filteredMenuIetms)
        

        
    
    })}

