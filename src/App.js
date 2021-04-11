import { BrowserRouter as Router, Route, Switch, Link, Redirect, BrowserRouter } from 'react-router-dom';

//Import các trang
import index from './pages/index'
import diaDiem from './pages/diaDiem'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Router>
          <Route exact path="/" component={index} />
          <Route exact path="/diaDiem" component={diaDiem} />
        </Router>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
