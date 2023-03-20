import { IMG_CDN_URL, restaurantList } from "../constants";
import React from 'react'

const RestaurantCards = ({name,cloudinaryImageId,cuisines,sla,avgRating,costForTwoString}) => {
  return (
    <>
            <div className="cards">
            <img className="cards-image" src={IMG_CDN_URL+cloudinaryImageId} alt="this is image" />
            <div className="cards-detail">
            <h4>{name}</h4>
            <p className="cards-cuisine">{cuisines.join(",")}</p>
            <div className="cards-bottom">
            <p>{sla.deliveryTime} minutes</p>
            <p className="cards-rating" style={(avgRating>=4)?{ backgroundColor:"#90ef90"}:{backgroundColor:"#ff686b"}}>{avgRating} stars</p>
            <p>{costForTwoString}</p>
            </div>
            </div>
            </div>
        
    </>
  )
}

export default RestaurantCards