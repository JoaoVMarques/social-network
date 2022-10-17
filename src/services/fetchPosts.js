const HOST = 'http://localhost:3400';

export const getPosts = async () => {
  const endpoint = `${HOST}/posts`;
  const request = await fetch(endpoint);
  const response = await request.json();
  return response;
};
