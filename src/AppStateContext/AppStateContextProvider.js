import React, { useState } from 'react';

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
      musicUploader: false,
      player: {
          onPlay: false,
          playNStop: false,
          playerSlideOpen: false,
          musicLink: "NA",
          musicPoster: "NA",
          playerTab: "up-next",
          musicName: "NA",
          artistName: "NA",
          musicID: "232323212121-temp",
          musicDuration: "NaN",
          isFavorite: true,
          onShuffleMode: false,
          
          panelTab: "music",
      },
      token: null
    });

  return (
    <AppStateContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateContextProvider;