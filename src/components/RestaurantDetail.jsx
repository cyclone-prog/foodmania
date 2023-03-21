import { useState,useEffect } from "react"
import { IMG_CDN_URL } from "../constants";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import SkeletonUI from "./SkeletonUI";
function RestaurantDetail() {
    const [restaurantDetailData, setRestaurantDetailData] = useState([]);
    const {id,name,cuisines,slugs,sla,cloudinaryImageId,costForTwoMessage,avgRating,totalRatings} = restaurantDetailData;
    
    const {urlId} = useParams();

    useEffect(()=>{
        getRestaurantData();
    },[]);

    async function getRestaurantData(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId="+urlId);
        const json = await data.json();
        // setRestaurantDetailData(json.data)
        setRestaurantDetailData(json?.data?.cards[0]?.card?.card?.info)
        console.log(json?.data?.cards[0]?.card?.card?.info?.name); 
    }
    
   return (restaurantDetailData===0)?<SkeletonUI/> :(
    <div className="container container-top-margin">
    


    {/* <p>{restaurantDetailData?.cards[0]?.card?.card?.info?.name}</p> */}
    {/*     <p>{json.data.cards[0].card.card.info.name}</p> */}
    <div className="resDetailData">
        <h2 className="resDetailName">{name}</h2>
        <p className="resDetailCuisines">{cuisines}</p>
        <p className="resDetailResName">{slugs?.restaurant}</p>
        <div className="resDetailFlex">
            <p>{totalRatings}+ ratings</p>
            <h4><FaStar/>{avgRating} stars</h4>
            <p>{costForTwoMessage}</p>
        </div>
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
        {console.log(totalRatings)}

    </div>
    </div>
  )
}

export default RestaurantDetail