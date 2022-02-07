import Api from './index';
import { apiConstant } from './apiConstant';

// LOGIN
export const loginMethod = (params, token) => {
    return Api(apiConstant.LOGIN, 'POST', params, token )
} 



// REGITSER
export const registerMethod = (params, token) => {
    return Api(apiConstant.REGISTER, 'POST', params, token )
} 


// list shop
export const listShopMethod = (params, token) => {
    return Api(`${apiConstant.LIST_MARKET}?city=${params}`, 'GET',  token )
} 

export const listShop  = (params, token) => {
    return Api(`${apiConstant.LIST_SHOP}?id=${params}`, 'GET',  token )
}  



//LIST SHOP CATEGORY 
export const listShopCategory  = (params, token) => {
    return Api(`${apiConstant.LIST_SHOP_CATEGORIES}?id=${params}`, 'GET',  token )
}  



//LIST product 
export const listProduct = (params, token) => {
    return Api(`${apiConstant.LIST_PRODUCT}?id=${'1'}&categoryId=${params.id}`, 'GET',  token )
}  

//LIST product 
export const listAllProduct = (params, token) => {
    return Api(`${apiConstant.LIST_PRODUCT}?id=${'1'}`, 'GET',  token )
}  

//LIST product 
export const AddToCart = (params, token) => {
    return Api(`${apiConstant.ADD_TO_CART}?id=${params?.ProductId}&userId=${params?.UserId}`, 'POST',  params, token )
}  


// list cart
export const listCart = (id, token) => {
    return Api(`${apiConstant.LIST_CART}?id=${id}`, 'GET', token )
} 



// list cart
export const RemoveItemCart = (data, token) => {
    return Api(`${apiConstant.REMOVE_FROM_CART}`, 'POST', data,  token )
} 

// list cart
export const filter = (text, token) => {
    return Api(`${apiConstant.SEARCH}?search=${text}`, 'GET',  token )
} 

export const clearCart = (id, token) => {
    return Api(`${apiConstant.CLEAR_CART}?UserId=${id}`, 'POST',  token )
} 


export const checkCart = (id, token) => {
    return Api(`${apiConstant.CHECK_CART}?UserId=${id}`, 'GET',  token )
} 


export const userInfo = (id, token) => {
    return Api(`${apiConstant.USER_INFO}?id=${id}`, 'GET',  token )
} 


export const updateUserProfile = (data, token) => {
    return Api(`${apiConstant.UPDATE_PROFILE}`, 'POST', data, token )
} 

export const placeOrder = (data, token) => {
    return Api(`${apiConstant.PLACE_ORDER}`, 'POST', data, token )
} 


export const getOrder = (data, token) => {
    return Api(`${apiConstant.GET_ORDER}`, 'POST', data, token )
} 


export const updateCartStatus = (data, token) => {
    return Api(`${apiConstant.UPDATE_CART_STATUS}?id=${data.id}`, 'POST', data, token )
} 