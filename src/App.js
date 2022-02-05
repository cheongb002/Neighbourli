import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import CreateEvent from './pages/event_creation';
import Feed from './pages/feed';
import Login from './pages/login_landing';


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/feed" component={Feed} />
      <Route path="/create_event" component={CreateEvent} />
      {/* <Route path="/test_form" component={TestForm} /> */}

    </Switch>
    </BrowserRouter>
  );
}

export default App;
