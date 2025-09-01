const localStorageAvailabel = () => {
  try {
    const key = "KEY";

    window.localStorage.setItem(key, key);
    window.localStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
};

const localStorageGetItem = (key: string, defalutVale = "") => {
  const storageAvailable = localStorageAvailabel();

  let value;

  if (storageAvailable) {
    value = localStorage.getItem(key) || defalutVale;
  }

  return value;
};
