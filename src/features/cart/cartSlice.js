import { createSlice } from "@reduxjs/toolkit";
import Cart from "../../pages/Cart";


const loadCart = () => {
    try {
        const data = localStorage.getItem("cart");
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
};
const initialState = {
    cartItems: loadCart()
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action)=>{
            const item = action.payload;
            
            const existing = state.cartItems.find((i)=>(
                i.id === item.id
            ))
            if(existing){
                existing.quantity += 1;
            }else{
                state.cartItems.push({...item, quantity: 1})
            }            
            localStorage.setItem("cart", JSON.stringify(state.cartItems))
        },
        removeFromCart: (state, action)=>{
            state.cartItems = state.cartItems.filter((item)=>(
                item.id !== action.payload
            ))
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        increseQty : (state, action)=>{
            const item = state.cartItems.find((i)=>(
                i.id === action.payload
            ))
            if(item) item.quantity += 1
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        decreaseQty : (state, action)=>{
            const item = state.cartItems.find((i)=>(
                i.id === action.payload
            ))
            if(item && item.quantity>1){
                item.quantity -= 1
            }else{
                state.cartItems = state.cartItems.filter((i)=>(
                    i.id !== action.payload
                ))
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        clearQuantity : (state, action)=>{
            const item = state.cartItems.find((i)=>(
                i.id === action.payload
            ))
            if(item){
                state.cartItems = state.cartItems.filter((i)=>(
                    i.id !== action.payload
                ))
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        clearCart: (state)=>{
            state.cartItems = []
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        }
    }
})


export const {
    addToCart,
    removeFromCart,
    increseQty,
    decreaseQty,
    clearCart,
    clearQuantity
} = cartSlice.actions;

export default cartSlice.reducer;