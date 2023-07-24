import {useState, createContext, useCallback, useContext} from 'react';

import './App.css';

// import AppStateContextProvider from './AppStateContext/AppStateContextProvider.js';

import Header from './components/header/header.js'
import Hometab from './components/main-tab/Hometab.js';
import Exploretab from './components/explore-tab/Exploretab.js';
import Librarytab from './components/library-tab/Librarytab.js';
import Searchtab from './components/search-tab/Searchtab.js';
import AccountContextMenu from './supercomponents/AccountContextMenu/AccountContextMenu.js';

import ContextMenusContextProvider from './supercomponents/AccountContextMenu/ContextMenusContextProvider.js';
import PlayerOver from './components/PlayerOver/PlayerOver';

function App() {
  

  const [activeTab, setActiveTab] = useState("home-tab");
  let TabTag;

  switch (activeTab) {
    case "home-tab":
      TabTag = <Hometab/>
      break;

    case "explore-tab":
      TabTag = <Exploretab/>
      break;

    case "library-tab":
      TabTag = <Librarytab/>
      break;

    case "search-tab":
      TabTag = <Searchtab/>
      break;
  
    default:
      break;
  }

  return (
    <div className="App">
      {/* <AppStateContextProvider> */}
          <ContextMenusContextProvider>
            <Header/>
            {TabTag}
            <AccountContextMenu/>
          </ContextMenusContextProvider>
          
          {/* <PlayerOver/> */}
        {/* </AppStateContextProvider> */}
    </div>
  );
}

export default App;
