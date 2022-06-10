import { startTransition } from "react";


export const getBasketTotal=(basket)=>basket?.reduce((amount,item) =>item.price+amount,0);  
export const initialState={
    basket:[],
    user:null,
};
function reducer(state, action){
    console.log(action)
 
    switch(action.type){
        case "Set_User":
            return{
                ...state,
                user:action.user
            }
        case "Add_To_Basket":
            return {
                ...state,
            basket:[...state.basket,action.item]
            };
        break;
        case "Remove_From_Basket":
            //cloned the basket
           let newBasket=[...state.basket];

           const index=state.basket.findIndex((basketItem)=>  basketItem.id===action.id)
           if(index>=0){
               //item  exists in basket remove it
              newBasket.splice(index,1)
           }else{
               console.warn(
                   "Cant remove product (id:${action.id}) as it is not in basket"
               );
           }

            return {...state,basket:newBasket};
            break;
       default :
       return state;

     }
}
export default reducer