import RestaurantCards from "./RestaurantCards";
import { restaurantList } from "../constants";
import { useState } from "react";


function Body() {
  const [restaurants,setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
  const filterData = (searchText,restaurants) =>{
    const filterData = restaurants.filter((res)=>
    res.data.name.toLowerCase().includes(searchText.toLowerCase())
    )
    return filterData
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
