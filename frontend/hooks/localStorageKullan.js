import { useState } from "react";

const useLocalStorageKullan = (keyValue, baslangicDegeri) => {
  const [val, setVal] = useState(() => {
    if (localStorage.getItem(keyValue) == null) {
      localStorage.setItem(keyValue, baslangicDegeri);
      return baslangicDegeri;
    } else {
      return JSON.parse(localStorage.getItem(keyValue));
    }
  });

  function setLocal(newVal) {
    localStorage.setItem(keyValue, newVal);
    setVal(newVal);
  }

  return [val, setLocal];
};

export default useLocalStorageKullan;
