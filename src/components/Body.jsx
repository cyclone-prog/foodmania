import RestaurantCards from "./RestaurantCards";
import { restaurantList } from "../constants";
import { useState, useEffect } from "react";

const filterData = (searchText,restaurants) =>{
  const filterData = restaurants.filter((res)=>
  res.data.name.toLowerCase().includes(searchText.toLowerCase())
  )
  return filterData;
}

function Body() {
  const [restaurants,setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    getRestaurants();
  },[]);
  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json(); 
    console.log(json);
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards); //optional chaining
  }

  return (

    <>
    
      <div className="container">
        
        <div className="search-group">
        <input type="text" 
        placeholder="Search" 
        value={searchText}
        onChange={(e)=>setSearchText(e.target.value)}
        />
        <button onClick={()=>{
          const data = filterData(searchText,restaurants)
          setRestaurants(data);
        }}>Search Text</button>
        </div>
        <div className="res-cards">
        {restaurants.map((value)=>{
            return (
              <RestaurantCards {...value.data} key={value.data.id}/>
            )

        })}
        
        </div>
      </div>
      
    </>
  );
}

export default Body;
