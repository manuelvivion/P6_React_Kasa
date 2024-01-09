import { createSlice } from "@reduxjs/toolkit";


export const favoriteSlice = createSlice({
    name: 'favoriteList',
    initialState:{},
    reducers: {
        toggleFavorite: (currentState, action) => {
            const modifiedList = currentState.map(
                item => item.id === action.payload ? ({...item, like: !item.like}) : item
            )
            //console.log("modifiedlist ",modifiedList)
            return modifiedList

        }
    }
});