import {createContext, useState} from 'react';

export const CartContext = createContext ();

export const CartProvider = ({children}) => {
    const [count, setCount] = useState (0);
    const handleAdd = () => {
        setCount (count + 1);
    }
    const handleRemove = () => {
        setCount (count - 1);
} 

return (
    <CartContext.Provider value={{count, setCount, handleAdd, handleRemove}}>
        {children}
    </CartContext.Provider>
)
} 