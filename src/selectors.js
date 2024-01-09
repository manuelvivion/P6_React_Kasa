

export const getFavoriteList = (state) => state?.favoriteList


export const getLike = (id) => (state) => getFavoriteList(state).filter((house) => house.id === id)[0].like

export const getFavoriteQty = (state) => getFavoriteList(state).filter((house) => house.like === true).length

export const getFavoritesOnly = (state) => getFavoriteList(state).filter((house) => house.like === true)


