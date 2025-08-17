import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find(i => i.id === action.item.id);
      if (existing) {
        return { ...state, items: state.items.map(i => i.id === existing.id ? { ...i, qty: i.qty + action.item.qty } : i) };
      }
      return { ...state, items: [...state.items, action.item] };
    }
    case 'REMOVE':
      return { ...state, items: state.items.filter(i => i.id !== action.id) };
    case 'QTY':
      return { ...state, items: state.items.map(i => i.id === action.id ? { ...i, qty: action.qty } : i) };
    case 'CLEAR':
      return { ...state, items: [] };
    default:
      return state;
  }
};

const init = () => {
  try { return JSON.parse(localStorage.getItem('cart')) || { items: [] }; } catch { return { items: [] }; }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, undefined, init);
  useEffect(() => { localStorage.setItem('cart', JSON.stringify(state)); }, [state]);
  const total = state.items.reduce((s, i) => s + i.price * i.qty, 0);
  return (
    <CartContext.Provider value={{ ...state, total, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
