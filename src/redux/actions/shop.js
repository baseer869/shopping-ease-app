import { listShopMethod, listShop, listShopCategory, listProduct,  listAllProduct, filter } from '../../../api/Methods';

export const addShop = (payload) =>{
    return {
        type: ADD_SHOPS,
        payload: payload       
    
    }

}


export const listShopActionHandler =   data => dispatch => {
  return new Promise(async function (resolve) {
    listShopMethod(data)
      .then(response => {
        return resolve(response);
      })
      .catch(() => {
        return resolve(false);
      });
  });
};


export const  listShopHandler2 =   data => dispatch => {
  return new Promise(async function (resolve) {
    listShop(data)
      .then(response => {
        return resolve(response);
      })
      .catch(() => {
        return resolve(false);
      });
  });
};


export const listCategoryActionHandler =   id => dispatch => {
  return new Promise(async function (resolve) {
    listShopCategory(id)
      .then(response => {
        return resolve(response);
      })
      .catch(() => {
        return resolve(false);
      });
  });
};

export const listProductActionHandler =   data => dispatch => {
  return new Promise(async function (resolve) {
    listProduct(data)
      .then(response => {
        return resolve(response);
      })
      .catch(() => {
        return resolve(false);
      });
  });
};
//

export const listAllProductActionHandler =   data => dispatch => {
  console.log('product and shop id-->', data)
  return new Promise(async function (resolve) {
    listAllProduct(data)
      .then(response => {
        return resolve(response);
      })
      .catch(() => {
        return resolve(false);
      });
  });
};


export const listCartActionHandler =   id => dispatch => {
  console.log('user id and shop id-->', id)
  return new Promise(async function (resolve) {
    listAllProduct(id)
      .then(response => {
        return resolve(response);
      })
      .catch(() => {
        return resolve(false);
      });
  });
};



// FILTER PRODUCT 
export const filterAndSearchProduct =   text => dispatch => {
  return new Promise(async function (resolve) {
    filter(text)
      .then(response => {
        console.log('respnse---->', response)
        return resolve(response?.data);
      })
      .catch(() => {
        return resolve(false);
      });
  });
};
