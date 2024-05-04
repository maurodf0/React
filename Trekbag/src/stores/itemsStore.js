import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialItems } from "../lib/constants.js";


export const useItemsStore = create( 
    //passiamo il persist come parametro perchè vogliamo che l'elemento venga persistito con LocalStorage
    persist(
    //passiamo il set come parametro perchè vogliamo che l'elemento venga settato e passato in app
    (set ) => ({
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
}), {
    //lo stesso nome che usiamo con LocalStorage
    name: "items"
}
)
);