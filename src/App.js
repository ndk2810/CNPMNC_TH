import { BrowserRouter as Router, Route, Switch, Link, Redirect, BrowserRouter } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'

import { useState, useEffect } from 'react'

//Import các trang
import Index from './pages/index'
import DiaDiem from './pages/diaDiem'

const App = () => {
  const [DiaDiems, setDiaDiems] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/diaDiem")
      .then(data => {
        return data.json();
      })
      .then(data => {
        setDiaDiems(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Router>

      <div className='App'>
        <Header />

        <div className='body'>
          <Switch>
            {/* Mốt có thêm trang nào vào thì thêm dưới đây nhé */}

            <Route exact path="/">
              <Index arrDiaDiem={DiaDiems} />
            </Route>

            <Route exact path="/diaDiem">
              <DiaDiem />
            </Route>

          </Switch>
        </div>

        <Footer />
      </div>

    </Router>
  );
}

export default App;
