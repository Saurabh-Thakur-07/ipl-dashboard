import './App.scss';
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import { TeamPage } from './Page/TeamPage';
import {MatchPage} from "./Page/MatchPage";
import {HomePage} from "./Page/HomePage"

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                <Route path={"/teams/:teamName/matches/:year"}>
                    <MatchPage />
                </Route>
                <Route path={"/teams/:teamName"}>
            <TeamPage />
                </Route>
                    <Route path={"/"}>
                        <HomePage/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
