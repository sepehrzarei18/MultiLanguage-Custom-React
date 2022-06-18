const setIntoSession = (key, name) => {
  const get = GetSessionItem(key);
  if (get == null) {
    sessionStorage.setItem(key, name);
  }
};

const GetSessionItem = (key) => {
  const getValue = sessionStorage.getItem(key);
  if (getValue == undefined) {
    return null;
  }

  return getValue;
};

export default { setIntoSession, GetSessionItem };
