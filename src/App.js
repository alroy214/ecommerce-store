import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EntryPage from './components/pages/EntryPage/EntryPage';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar />
      <Router>
        <Switch>
          <Route path='/'>
            <EntryPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
