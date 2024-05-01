'use client'
import React, {useState, createContext, useContext, useReducer} from 'react';
import { foodsType } from './types';



export type StateType = {
  cartItems: foodsType[];
  totalPrice : number
};


export type Action = {
  type: string;
  payload: any;
};





const initialState:StateType = {
  cartItems: [],
  totalPrice : 0
};

const StoreContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<Action>;
}>({
  state:initialState,
  dispatch: ()=>null
});

const StoreReducer = (state: StateType, action: Action) => {
  switch (action.type) {
    case 'cart':
      return {
        ...state,
        cartItems:  action.payload.cartItems,
        totalPrice : action.payload?.totalPrice || 0
      };
    default:
      return state;
  }
};

export const useStore = () => useContext(StoreContext);

const MyStoreProvider = ({children}:{children:React.ReactElement|React.ReactElement[]} ) => {
  const [state, dispatch] = useReducer(StoreReducer, initialState);

  return (
    <StoreContext.Provider value={{state,dispatch}}>
      {children}
    </StoreContext.Provider>
  );
};

export default MyStoreProvider;
