export function saveAccount(accountObject) {
  const name = 'accounts';
  const parseAccount = JSON.stringify([accountObject]);
  if(!localStorage.getItem(name)) {
    localStorage.setItem(name, [parseAccount]);
  } else {
    const actualStorage = JSON.parse(localStorage.getItem(name));
    const savedStorage = JSON.stringify([...actualStorage, accountObject]);
    localStorage.setItem(name, [savedStorage]);
  }
}