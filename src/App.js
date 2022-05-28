import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import PokemonInfo from './components/pokemonInfo/index';
import Provider from './context/Provider';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Provider>
      <Switch >
        <Route 
          exact
          path="/"
          component={ Home }
        />
        <Route 
          path="/pokemon-detail/:name"
          component={ PokemonInfo }
        />
        <Route 
          path="*"
          component={ NotFound }
        />
      </Switch >
    </Provider>
  );
}

export default App;
