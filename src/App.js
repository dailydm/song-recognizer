import { Router } from '@reach/router';
import './App.css';
import HomePage from './pages/HomePage';
import SongPage from './pages/SongPage';

const App = () => (
  <div className="app">
    <Router>
      <HomePage path="/" />
      <SongPage path="/song/:id" />
    </Router>
  </div>
);

export default App;
