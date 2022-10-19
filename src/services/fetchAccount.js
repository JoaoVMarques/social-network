const HOST = 'http://localhost:3400';

export const createAccount = async (account) => {
  const endpoint = `${HOST}/account`;
  const request = await fetch(endpoint,
    { method: 'POST',
      body: JSON.stringify(account),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }});
  const response = await request.json();
  return response;
};

export const loginAccount = async (loginObject) => {
  const endpoint = `${HOST}/account/login`;
  const request = await fetch(endpoint,
    { method: 'POST',
      body: JSON.stringify(loginObject),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }});
  const { error } = await request.json();
  return error ? false : true;
};
