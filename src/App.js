
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react'

//COMPONENTS
import Header from './components/Header'

//import các trang
import Index from './pages/quanLyDiaDiem'
import QuanLyTour from './pages/quanLyTour'

function App() {
  const [DiaDiems, setDiaDiems] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/diaDiem/")
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
        <div className="body">
          <Switch>
            {/* Mốt có thêm trang nào vào thì thêm trong Switch đây nhé */}

            <Route exact path="/">
              <Index DiaDiems={DiaDiems} />
            </Route>

            <Route exact path="/quanLyTour">
              <QuanLyTour />
            </Route>

          </Switch>
        </div>
      </div>

    </Router>
  );
}

export default App;
