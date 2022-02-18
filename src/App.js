
import Navbar from './Components/Navbar'
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourites from './Components/Favourites';
import { BrowserRouter as Router, Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>

      <Navbar />

      {/* https://www.moreonfew.com/attempted-import-error-switch-is-not-exported-from-react-router-dom */}
      {/* use react router version V5.0 */}

      <Switch>
        <Route exact path='/' render={(props) => (
          <>
            <Banner {...props} />
            <Movies {...props} />
          </>
        )} />

        <Route path='/favourites'>
          <>
            <Favourites />
          </>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
