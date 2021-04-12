import { BrowserRouter as Router, Route, Switch, Link, Redirect, BrowserRouter } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'

//Import các trang
import index from './pages/index'
import diaDiem from './pages/diaDiem'

const App = () => {
  return (
    <Router>

      <div className='App'>
        <Header />

        <div className='body'>
          <Switch>
            {/* Mốt có thêm trang nào vào thì thêm dưới đây nhé */}

            <Route exact path="/">
              {index}
            </Route>

            <Route exact path="/diaDiem">
              {diaDiem}
            </Route>

          </Switch>
        </div>

        <Footer />
      </div>

    </Router>
  );
}

export default App;
