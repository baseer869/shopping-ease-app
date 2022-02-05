// api url here ..
//  all end point will be here 
const BASE_URL = 'http://10.0.2.2:3000/api/v1';
// const BASE_URL = 'https://6650-58-65-152-116.ngrok.io/api/v1';


 export const apiConstant = {
 
    REGISTER: BASE_URL + '/register',
    LOGIN: BASE_URL + '/login',
    REGISTER: BASE_URL + '/register',
    LIST_MARKET: BASE_URL + '/listMarket',
    LIST_SHOP: BASE_URL + '/shop',
    TOP_CATEGORY: BASE_URL + '/list-category',
    LIST_PRODUCT: BASE_URL + '/listProduct',
    LIST_SHOP_CATEGORIES: BASE_URL + '/category',
    FEATURED_PRODUCT: BASE_URL + '/featured-list',
    ADD_TO_CART: BASE_URL + '/addToCart',
    LIST_CART: BASE_URL + '/listCart',
    REMOVE_FROM_CART: BASE_URL + '/removeFromCart',
    SEARCH : BASE_URL+ '/searchProduct',

}

