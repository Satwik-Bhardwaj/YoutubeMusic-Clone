import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.js'
import Hometab from './components/main-tab/hometab.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hometab/>
    </div>
  );
}

export default App;
