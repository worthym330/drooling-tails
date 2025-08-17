import { renderHook, act } from '@testing-library/react';
import { CartProvider, useCart } from '../context/CartContext';
import React from 'react';

const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;

describe('CartContext', () => {
  it('adds items and calculates total', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => result.current.dispatch({ type: 'ADD', item: { id: '1', name: 'Bone', price: 100, qty: 2 } }));
    act(() => result.current.dispatch({ type: 'ADD', item: { id: '2', name: 'Biscuit', price: 50, qty: 1 } }));
    expect(result.current.items.length).toBe(2);
    expect(result.current.total).toBe(250);
  });
});
