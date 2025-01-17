// import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "../types";

// export const productReducers = (state={}, action) =>{
//     switch(action.type){

//         case FILTER_PRODUCTS_BY_SIZE:
//             return{
//                 ...state,
//                 filteredItems: action.payload.items,
//                 size: action.payload.size
//             };

//         case ORDER_PRODUCTS_BY_PRICE:
//             return{
//                 ...state,
//                 filteredItems: action.payload.items,
//                 sort: action.payload.sort
//             }

//         case FETCH_PRODUCTS:
//             return { items: action.payload, filteredItems: action.payload };
//         default:
//             return state;
//     }
// }

import {
    FETCH_PRODUCTS,
    FILTER_PRODUCTS_BY_SIZE,
    ORDER_PRODUCTS_BY_PRICE,
  } from "../types";
  
  export const productReducers = (state = {}, action) => {
    switch (action.type) {
      case FILTER_PRODUCTS_BY_SIZE:
        return {
          ...state,
          size: action.payload.size,
          filteredItems: action.payload.items,
        };
      case ORDER_PRODUCTS_BY_PRICE:
        return {
          ...state,
          sort: action.payload.sort,
          filteredItems: action.payload.items,
        };
      case FETCH_PRODUCTS:
        return { items: action.payload, filteredItems: action.payload };
      default:
        return state;
    }
  };