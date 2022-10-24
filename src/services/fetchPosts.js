import Cookies from 'universal-cookie';
const HOST = 'http://localhost:3400';

export const getPosts = async () => {
  const endpoint = `${HOST}/posts`;
  const request = await fetch(endpoint);
  const response = await request.json();
  return response;
};

export const publishPosts = async (post) => {
  const cookies = new Cookies();
  const endpoint = `${HOST}/posts`;
  const request = await fetch(endpoint,
    { method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': cookies.get('token'),
      }});
  const response = await request.json();
  return response;
};
