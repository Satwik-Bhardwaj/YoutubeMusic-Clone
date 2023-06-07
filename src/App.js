import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.js'
import Hometab from './components/main-tab/Hometab.js';
import { AccountContextMenu } from './supercomponents/AccountContextMenu/AccountContextMenu';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hometab/>
      <AccountContextMenu/>
    </div>
    // this is a temp line for commit checks
  );
}

export default App;
