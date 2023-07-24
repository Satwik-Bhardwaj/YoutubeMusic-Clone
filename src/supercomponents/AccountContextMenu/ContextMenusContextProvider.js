import React from 'react';
import { ContextMenusContext } from './ContextMenusContext';
import { ContextMenusState } from './ContextMenusState';

const MyContextProvider = ({ children }) => {
  const { contextMenuState, setContextMenuState } = ContextMenusState(false);

  return (
    <ContextMenusContext.Provider value={{ myState: contextMenuState, setMyState: setContextMenuState }}>
      {children}
    </ContextMenusContext.Provider>
  );
};

export default MyContextProvider;
