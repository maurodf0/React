import { create } from "zustand";
import { initialItems } from "../lib/constants.js";


export const useItemsStore = create( (set ) => ({
    items: initialItems,
    removeAllItems: () => {
        set(() => ({items: []}));
    },
    resetToInitial: () => {
        set(() => ({items: initialItems}));
    },
    markAllAsComplete: () => {
        set((state) => {
            const newItems = state.items.map(item => {
                //prendiamo tutto il valore di items e lo aggiorniamo
                //in modo che tutti i valori packed siano true
                return {...item, packed: true}
            })
            return {items: newItems};
        })
    },
    markAllAsIncomplete: () => {
        set((state) => {
            const newItems = state.items.map(item => {
                //prendiamo tutto il valore di items e lo aggiorniamo
                //in modo che tutti i valori packed siano false
                return {...item, packed: false}
            })
            return {items: newItems};
        })
    },
    toggleItem: (id) => {
        set((state) => {
            const newItems = state.items.map(item => {
                if(item.id === id) {
                    return {...item, packed: !item.packed}
                }
                return item
            })
            return {items: newItems};
        })
    },
    removeItem: (id) => {
        set((state) => {
            const newItems = state.items.filter(item => item.id !== id)
            return {items: newItems};
        })
    },
    addItem: (newItemText) => {
        set((state) => {
            const newItem = {
                id: new Date().getTime(),
                name: newItemText,
                packed: false,
            }
            const newItems = [...state.items, newItem]
            return {items: newItems};
        })
    },
}))