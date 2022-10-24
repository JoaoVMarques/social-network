import Cookies from 'universal-cookie';

const HOST = 'http://localhost:3400';

const createToken = (token) => {
  const cookies = new Cookies();
  cookies.set('token', token, { path: '/' });
};

export const createAccount = async (account) => {
  const endpoint = `${HOST}/account`;
  const request = await fetch(endpoint,
    { method: 'POST',
      body: JSON.stringify(account),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }});
  const { error, token } = await request.json();
  if(error) {
    return false;
  }
  createToken(token);
  return true;
};

export const loginAccount = async (loginObject) => {
  const endpoint = `${HOST}/account/login`;
  const request = await fetch(endpoint,
    { method: 'POST',
      body: JSON.stringify(loginObject),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }});
  const { error, token } = await request.json();
  if(error) {
    return false;
  }
  createToken(token);
  return true;
};
