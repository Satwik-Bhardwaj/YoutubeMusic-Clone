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
      token: "BQB2AKX93VexSET6Ac0HZvgQKQrxDC7oVsMsyr8p1IJF21ZPgwdWPkKM7f58ECmEZ0kalWvdVKsQtSPo71T8e8uQJqaI21UvZZywNqGaXE0zNvIKr2jL89OWQOnMGA6VYhaq6fn1a5hPLMp0xOIYUc5BT7PkNZj4eZaW5HDO_LPIOkeYtP-x0mhPJpCE1JQXCED25p8bOud4O773fNLCooZKVeYY"
    });

  return (
    <AppStateContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateContextProvider;