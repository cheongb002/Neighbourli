import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Feed from './pages/feed';
import Login from './pages/login_landing';


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/feed" component={Feed} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
