import axios from 'axios'
import FormThemDD from './components/FormThemDD'
import TableDD from './components/TableDD'
import { useState, useEffect } from 'react'
import { Resource } from 'ra-core'

const submitForm = (e) => {
  e.preventDefault()
  const TenDiaDiem = document.getElementById('tenDiaDiem').value
  const HinhAnh = document.getElementById('hinhAnh').value

  console.log(TenDiaDiem)
  console.log(HinhAnh)

  axios.post('http://localhost:5000/diaDiem/add', {
    tenDiaDiem: TenDiaDiem,
    hinhAnh: HinhAnh,
  })
    .then(() => console.log('Successful'))
    .catch(err => console.log(err))
}

const deleteDD = (tenDiaDiem) => {
  const data = {
    tenDiaDiem: tenDiaDiem,
  }
  axios.post('http://localhost:5000/diaDiem/remove', data)
    .then(() => console.log('success'))
    .catch(err => console.log(err))

  window.location.reload()
}


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
    <div className="App">
      <FormThemDD submitForm={submitForm} />
      <TableDD DiaDiems={DiaDiems} deleteDD={deleteDD} />
    </div>
  );
}

export default App;
