import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'

//Import các trang
import Index from './pages/index'
import DiaDiem from './pages/diaDiem'
import DatCho from './pages/datCho'
import TimKiem from './pages/timKiem'
import ChiTietTour from './pages/chiTietTour'

const App = () => {
  //GET tất cả địa điểm
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
            {/* Mốt có thêm trang nào vào thì thêm trong Switch đây nhé */}

            <Route exact path="/">
              <Index arrDiaDiem={DiaDiems} />
            </Route>

            <Route exact path="/diaDiem">
              <DiaDiem />
            </Route>

            <Route expact path="/thongTinTour">
              <ChiTietTour />
            </Route>

            <Route exact path="/datCho">
              <DatCho />
            </Route>

            <Route exact path="/timKiem">
              <TimKiem />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>

    </Router>
  );
}

export default App;
