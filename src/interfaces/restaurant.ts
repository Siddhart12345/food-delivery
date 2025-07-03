export interface IRestaurant{
    _id: string;
    name: string;
    image: string;
 
    description:string;
    currentOffer:string;
    rating:number;
   

} export interface IMenuItems{
_id: string;
restaurantId:string;
name: string;
image: string;
price: number;
description: string;
}
export interface ICart{
    _id? : string;
    restaurantId : string;
    items : ICartItem[];
    totalPrice : number;
}
export interface ICartItem{
    itemImage:string;
    description:string;
    itemId: string;
    price : number;
    name : string;
    quantity : number;
    totalItemPrice : number;
}