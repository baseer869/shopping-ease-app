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
