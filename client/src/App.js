import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Customer from './components/Customer/Customer.js';

function App() {
  return (
    <BrowserRouter>

    

    <Switch>
      
      <Route path='/' exact component={Customer}/> 
    </Switch>

    </BrowserRouter>
  );
}

export default App;
