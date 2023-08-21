import {useState, useContext, useEffect} from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import './App.css';

import { AppStateContext } from './AppStateContext/AppStateContext';

import Header from './components/header/header.js'
import Hometab from './components/main-tab/Hometab.js';
import Exploretab from './components/explore-tab/Exploretab.js';
import Librarytab from './components/library-tab/Librarytab.js';
import Searchtab from './components/search-tab/Searchtab.js';
import Playlist from './components/Playlists/Playlist';

import PlayerNavigation from './components/PlayerOver/PlayerNavigation';
import PlayerOver from './components/PlayerOver/PlayerOver';

import AccountContextMenu from './supercomponents/AccountContextMenu/AccountContextMenu.js';

function App() {
  const {appState, setAppState} = useContext(AppStateContext);
  const [way, setWay] = useState([
    {
      "/": Hometab,
      "/explore": Exploretab,
      "/library": Librarytab,
      "/search": Searchtab,
      "/playlist": Playlist,
      "/*": Hometab
    }
  ]);

  const loct = useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
    switch (loct.pathname) {
      case "/explore":
      case "/library":
      case "/search":
      case "/playlist":
      case "/w":
        setAppState({...appState, appearance: {...appState.appearance, headerHighlighted: true}});
        break;
      default:
        setAppState({...appState, appearance: {...appState.appearance, headerHighlighted: false}});
        break;
    }
    // if (loct.pathname !== '/w'){
    //   if(way.some(obj => obj.hasOwnProperty(loct.pathname))){
    //     setWay(prevWay => [
    //         {
    //           ...prevWay[0], // Keep other properties unchanged
    //           "/*": way[0][loct.pathname]
    //         },
    //         ...prevWay.slice(1) // Keep other objects unchanged
    //       ]);
    //   }else if(loct.pathname === '/playlist'){
    //     console.log('called')
    //   }else{
    //     console.log('redirecting')
    //     navigate('/')
    //   } 
    // }
  }, [loct.pathname])

  return (
    <div className="App">
          <Header/>
          <Routes>
            {/* <Route path={'/'} Component={way[0]['/']}/>
            <Route path={'/explore'} Component={way[0]['/explore']}/>
            <Route path={'/library'} Component={way[0]['/library']}/>
            <Route path={'/search'} Component={way[0]['/search']}/>
            <Route path={'/welcome'} Component={way[0]['/welcome']}/>
            <Route path='/playlist/:id' Component={way[0]['/playlist']}/>
            <Route path={'/*'} Component={way[0]['/*']}/> */}
            <Route path={'/'} Component={Hometab}/>
            <Route path={'/explore'} Component={Exploretab}/>
            <Route path={'/library'} Component={Librarytab}/>
            <Route path={'/search'} Component={Searchtab}/>
            <Route path={'/playlist/:id'} Component={Playlist}/>
            <Route path={'/*'} Component={Hometab}/>
          </Routes>
          <AccountContextMenu/>
          <PlayerOver/>
          <PlayerNavigation/>
      
    </div>
  );
}

export default App;
