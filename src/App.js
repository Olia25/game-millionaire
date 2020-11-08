import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import GameStart from "./pages/gameStart";
import Game from "./pages/game";
import GameOver from "./pages/gameOver";

function App() {
  return (
    <Router>
        <Switch>
            <Route path = '/game'>
                <Game />
            </Route>
            <Route path = '/gameOver'>
                <GameOver />
            </Route>
            <Route path = '/'>
                <GameStart />
            </Route>
        </Switch>
    </Router>

  );
}

export default App;
