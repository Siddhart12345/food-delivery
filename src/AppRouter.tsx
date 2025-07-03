import { IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import RestaurantMenuScreen from './screens/RestaurantMenuScreen'
import CartScreen from './screens/CartScreen'

const AppRouter = () => {
  return (
    <>
      <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <HomeScreen />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route  exact path="/restaurant-menu/:restaurantId">
        <RestaurantMenuScreen/>
        </Route>
         <Route  exact path="/cart-screen">
        <CartScreen/>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
    </>
  )
}

export default AppRouter
