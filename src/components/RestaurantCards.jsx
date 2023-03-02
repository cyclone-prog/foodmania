import { IMG_CDN_URL, restaurantList } from "../constants";
import React from 'react'

const RestaurantCards = ({name,cloudinaryImageId,cuisines,lastMileTravel}) => {
  return (
    <>
            <div className="cards">
            <img src={IMG_CDN_URL+cloudinaryImageId} alt="this is image" />
            <div className="cards-detail">
            <h4>{name}</h4>
            <p>{cuisines.join(",")}</p>
            <p>{lastMileTravel} minutes</p>
            </div>
            </div>
        
    </>
  )
}

export default RestaurantCards