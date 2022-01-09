export default Api = async (path, method, params, token) => {
  console.log('params in api--> ', params)
    let options;
  
    options = {
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      method: method,
      ...(params) &&  { body: JSON.stringify(params) }
    };
  
    try {
    const resp = await fetch(path, options);
    const json = await resp.json();
    // console.log('--->--> response \n', json);
    return json;
  } catch (error) {
    // console.log('===> error \n', error);
    return false;
  }
  };
  