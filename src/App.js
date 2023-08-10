import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link, useHistory } from 'react-router-dom';
import './App.css';

const BackComponent = ({ name, to }) => (
  <div className="back-component">
    <h2>{name}</h2>
    <Link to={to}>Open Pop-up</Link>
  </div>
);

const PopUpComponent = () => {
  const history = useHistory();

  const handleCancel = () => {
    history.goBack();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Pop-up Component</h2>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
    <Route path="/" exact component={Home} />
    <Route path="/popup" component={PopUpComponent} />
    <Route path="/back1" render={() => <BackComponent name="Back 1" to="/popup" />} />
    <Route path="/back2" render={() => <BackComponent name="Back 2" to="/popup" />} />
    <Route path="/back3" render={() => <BackComponent name="Back 3" to="/popup" />} />
    </Routes>
  </Router>
);

const Home = () => (
  <div>
    <BackComponent name="Back 1" to="/back1" />
    <BackComponent name="Back 2" to="/back2" />
    <BackComponent name="Back 3" to="/back3" />
  </div>
);

export default App;
