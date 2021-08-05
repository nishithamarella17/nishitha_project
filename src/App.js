import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import dashBoard from './components/dashBoard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/dashBoard' component={dashBoard}/> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
