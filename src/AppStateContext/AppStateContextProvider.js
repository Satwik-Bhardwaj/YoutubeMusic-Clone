import React, { createContext, useState } from 'react';

import { AppStateContext } from './AppStateContext';

const AppStateContextProvider = ({ children }) => {
  
  const [ appState, setAppState ] = useState(
    {
      appearance: {
          theme: "dark-theme",
          headerHighlighted: false
      },
      searchBoxOpened: false,
      contextMenuOpened: false,
      tabOpened: "home",
      player: {
          onPlay: false,
          playNpause: "stop",
          playerSlideOpen: false,
          musicLink: "NA",
          musicPoster: "NA"
      }
    }
  );

  return (
    <AppStateContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateContextProvider;