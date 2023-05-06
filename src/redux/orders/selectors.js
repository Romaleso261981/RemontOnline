export const getStateOrders = state => state.orders.items;
export const getIsLoading = state => state.orders.isLoading;
export const getError = state => state.orders.error;
export const getOrder = state => state.orders.orderList;
;
;

export const getOwnOrders = state => state.orders.ownList;
export const getFavoriteOrders = state => state.orders.favoriteList;
export const getSearchBtnIsActive = state => state.orders.searchBtnIsActive;
export const getSearchTitleError = state => state.orders.searchError;
