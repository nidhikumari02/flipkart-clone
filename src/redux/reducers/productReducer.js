import * as actionType from '../constants/productConstant';


export const getProductsReducer = (state = {products: []}, action) => {
    console.log("In reducer: ", action);
    switch(action.type) {
        case actionType.GET_PRODUCTS_SUCCESS:
            console.log("in get products success")
            return { products: action.payload }
        case actionType.GET_PRODUCTS_FAIL:
            console.log("inside products fail")
            return {error: action.payload }
        default:
            return state
    }
}
export const getProductDetailsReducer = (state = { product: {}}, action) => {
    
    switch(action.type){
        case actionType.GET_PRODUCT_DETAILS_REQUEST:
            return { loading: true }
        case actionType.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case actionType.GET_PRODUCT_DETAILS_FAIL:
            return { cdloading: false,error: action.payload}
        case actionType.GET_PRODUCT_DETAILS_RESET: 
            return {product: {} }
        default:
            return state
        }
    }


