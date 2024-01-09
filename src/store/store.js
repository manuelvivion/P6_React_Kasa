import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { favoriteSlice } from '../components/Favorite/favoriteSlice.js';

//import Datas from Json file :  list of houses
import listJson from '../data/logements.json';
// and init the redux state with all houses
let houseList = [];
listJson.map((house)=>houseList.push({id:house.id,like:false}));

let state = {
    favoriteList: houseList
};

export const store = configureStore(
    {
        preloadedState: state,
        reducer: combineReducers({
            favoriteList: favoriteSlice.reducer,
        }),
    }
)
