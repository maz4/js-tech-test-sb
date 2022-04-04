import React, { createContext, useReducer } from "react";
import initialState from "./initialState";
import reducer from '../reducers'

const StoreContext = createContext<{
  state: any;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

const StoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
