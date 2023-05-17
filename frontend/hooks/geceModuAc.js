import { useState } from "react";
import useLocalStorageKullan from "./localStorageKullan";

const useGeceModuAc = () => {
  const [mod, setMod] = useLocalStorageKullan("geceModu", false);

  return [mod, setMod];
};

export default useGeceModuAc;
