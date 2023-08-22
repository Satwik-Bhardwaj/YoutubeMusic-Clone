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
      },
      token: "BQCtZfgQAdw43uHtKFVHEl1yIeB9owMUqLKs-I895V1svU7jKUOMs3rEDukWd87b830-GZeofoAb_7I21786hszoe6H9myJt_0VhW2mwfTFmlWFrEq7T8w9eHHzwvFH3UqjjKnkHN0NKi0llrmIYJsS2go04IDEv9CzCSivMrMm2G9l26hwQk3U5qf3YSXZu9qPYmz_Z-xlwjOYBdr2b7CfluYTy"
    });

  return (
    <AppStateContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateContextProvider;