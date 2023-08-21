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
      token: "BQBdCDox4ORz5oHPFhemaS3cP0L98qzJP7buofzh5RCJsLs-mpB57juju6BP8VIOODaV0yRNiBKHgGR1mj0AzAUOxMj5vFpiO3Z8m_dlrUEYn_wa6PLedmCLR2eiLvqemLjJ7PMnSyyG233oc0WV4_S9VD3vktsb7jyR4y0SE5Dz5JMn5bq_YFeHjVVHf1S6duzb3ssilB8qlGUyaatB2zNUDRer"
    });

  return (
    <AppStateContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateContextProvider;