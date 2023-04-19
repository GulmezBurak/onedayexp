//store.ts//

import { createContext, useContext } from "react";
import configStore from "./configStore";

const store = {
  configStore: configStore,
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};

export default store;
