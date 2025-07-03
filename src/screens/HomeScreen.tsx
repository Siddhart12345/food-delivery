import { IonContent, IonPage } from "@ionic/react";
import "./HomeScreen.scss";
import FilterComponent from "../component/homeComponent/FilterComponent";
import HomeBanner from "../component/homeComponent/HomeBanner";
import RestaurantCard from "../component/homeComponent/RestaurantCard";
import { useEffect, useState } from "react";
import { getAllRestaurants } from "../services/api";
import { IRestaurant } from "../interfaces/restaurant";
import { Link } from "react-router-dom";
const HomeScreen: React.FC = () => {
  const [allrestaurants, setAllRestaurants] = useState<IRestaurant[]>();
  useEffect(() => {
    void getAllRestaurants().then((response) => {
      setAllRestaurants(response);
    });
  }, []);
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="home_screen">
          <div className="header_section">
            
            <FilterComponent />
          </div>

          <div className="body_section">
            <div className="banner_section">
              <HomeBanner />
            </div>
            <div className="restaurant_section">
              {allrestaurants &&
                allrestaurants.map((restaurant, restaurantIndex) => {
                  return (
                    <div key={restaurantIndex}>
                      <Link to ={`/restaurant-menu/${restaurant._id}`}>
                        <RestaurantCard restaurantData={restaurant} />
                      </Link>
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

export default HomeScreen;
