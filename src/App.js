import {useState, useContext, useEffect} from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import './App.css';

import { AppStateContext } from './AppStateContext/AppStateContext';

import Header from './components/header/header.js'
import Welcome, { Verify } from './components/Welcome/welcome';
import Hometab from './components/main-tab/Hometab.js';
import Exploretab from './components/explore-tab/Exploretab.js';
import Librarytab from './components/library-tab/Librarytab.js';
import Searchtab from './components/search-tab/Searchtab.js';
import Playlist from './components/Playlists/Playlist';
import PlaylistCategoryPage from './components/categories/PlaylistCategoryPage';
import TrackCategoryPage from './components/categories/TrackCategoryPage';
import PlayerNavigation from './components/PlayerOver/PlayerNavigation';
import PlayerOver from './components/PlayerOver/PlayerOver';
import MusicUploader from './components/MusicUploader/MusicUploader';

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
      case "/category/playlists":
      case "/w":
        setAppState({...appState, appearance: {...appState.appearance, headerHighlighted: true}});
        break;
      default:
        setAppState({...appState, appearance: {...appState.appearance, headerHighlighted: false}});
        break;
    }
  }, [loct.pathname])

  return (
    <div className="App">
          <Routes>
            <Route path={'/'} Component={Welcome}/>
            <Route path={'/verify'} Component={Verify}/>
            <Route path={'/Home'} Component={Hometab}/>
            <Route path={'/library'} Component={Librarytab}/>
            <Route path={'/explore'} Component={Exploretab}/>
            <Route path={'/search'} Component={Searchtab}/>
            <Route path={'/playlist/:id'} Component={Playlist}/>
            <Route path={'/category/playlists/:id'} Component={PlaylistCategoryPage}/>
            <Route path={'/category/tracks/:id'} Component={TrackCategoryPage}/>
            <Route path={'/w'} Component={PlayerOver}/>
            <Route path={'/*'} Component={Hometab}/>
          </Routes>
          <PlayerNavigation/>
          <AccountContextMenu/>
          <MusicUploader/>
          
      
    </div>
  );
}

export default App;
