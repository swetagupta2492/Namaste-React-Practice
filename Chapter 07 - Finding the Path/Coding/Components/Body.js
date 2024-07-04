import { restaurantList } from "../Utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";



// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index
const Body = () => {
  // useState: To create a state variable, searchText is local state variable
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filterData,  setFilterData] = useState([]);
  useEffect(()=>{
    const json = fetchData()
  },[])

  function filterResData(searchText, restaurants) {
    const data = restaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log("data", data)
    return data;
  }
  
  const fetchData = async()=>{ 
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const json = await data.json();
  const resList = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
  setRestaurants(resList)
  setFilterData(resList);
  }
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterResData(searchText, restaurants);
            // update the state of restaurants list
            console.log("data",data)
debugger
            setFilterData(data);
            console.log("FilterData", filterData)
          }}
        >
          Search
        </button>
      </div>
      { filterData.length === 0 ? (<Shimmer/>): (
      <div className="restaurant-list">
        {
        filterData.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
          );
        })}
      </div>)}
    </>
  );
};

export default Body;
