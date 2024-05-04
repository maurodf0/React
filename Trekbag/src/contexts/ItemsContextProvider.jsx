import { useState, useEffect } from 'react';
import {initialItems} from '../lib/constants.js';
import { createContext } from 'react';

export const ItemsContext = createContext();

export default function ItemsContextProvider({children}) {

  const [items, setItems] =
      //if we have items in local storage, use them, otherwise use initial items
     useState(() => {
      return JSON.parse(localStorage.getItem('items')) || initialItems;
     });

  // creiamo una funzione generica per gestire le nuove tasks
  //in modo da non dover passare setItems in tutti i component
  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    }

    const newItems = [...items, newItem]
    setItems(newItems);
  }

  const handleRemoveItem = (id) => {
    const newItems = items.filter(item => item.id !== id)
    setItems(newItems);
  }

  const handleToggleItem = (id) => {
    const newItems = items.map(item => {
      if(item.id === id) {
        return {...item, packed: !item.packed}
      }
      return item
    })
    setItems(newItems);
  }

  const handleRemoveAllItems = () => {
    setItems([]);
  }

  const handleResetToInitial = () => {
    setItems(initialItems);
  }

  const handleMarkAllAsComplete = () => {
    const newItems = items.map(item => {
      //prendiamo tutto il valore di items e lo aggiorniamo
      //in modo che tutti i valori packed siano true
      return {...item, packed: true}
    })
    setItems(newItems);
  }

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map(item => {
      //prendiamo tutto il valore di items e lo aggiorniamo
      //in modo che tutti i valori packed siano false
      return {...item, packed: false}
    })
    setItems(newItems);
  }

  const totalNumberOfItems = items.length;

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider value={
      {
        items,
        handleAddItem,
        handleRemoveItem,
        handleToggleItem,
        handleRemoveAllItems,
        handleResetToInitial,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
        totalNumberOfItems
      }
    }>
      {children}
    </ItemsContext.Provider>
  )
}
