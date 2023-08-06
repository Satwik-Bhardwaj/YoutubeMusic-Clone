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
          onPlay: true,
          playNStop: true,
          playerSlideOpen: false,
          musicLink: "NA",
          musicPoster: "NA",
          playerTab: "up-next",
          musicName: "Halka Halka",
          artistName: "Rahat Fateh Ali Khan",
          musicID: "232323212121-temp",
          musicDuration: "4:03",
          isFavorite: true,
          onShuffleMode: false,
          
          panelTab: "music",
          slideCloseClicking: null
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