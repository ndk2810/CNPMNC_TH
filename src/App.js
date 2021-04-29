import axios from 'axios'
import { useState, useEffect } from 'react'

//COMPONENTS
import Header from './components/Header'
import FormThemDD from './components/FormThemDD'
import TableDD from './components/TableDD'

const submitForm = (e) => {
  e.preventDefault()
  const TenDiaDiem = document.getElementById('tenDiaDiem').value
  const hinhAnhBase64 = document.getElementById('hinhAnh').src
  const HinhAnh = hinhAnhBase64.replace(/^data:image\/\w+;base64,/, "")

  if (!TenDiaDiem || !hinhAnhBase64) {
    alert('Không được để trống các trường thông tin')
    return;
  }

  if (window.confirm('Thêm địa điểm vào CSDL ?')) {
    axios.post('http://localhost:5000/diaDiem/add', {
      tenDiaDiem: TenDiaDiem,
      hinhAnh: HinhAnh,
    })
      .then(() => console.log('Successful'))
      .catch(err => console.log(err))
  }
}

const deleteDD = (IDDiaDiem) => {
  const data = {
    IDDiaDiem: IDDiaDiem,
  }

  if (window.confirm('Xoá địa điểm ?')) {
    axios.post('http://localhost:5000/diaDiem/remove', data)
      .then(() => console.log('success'))
      .catch(err => console.log(err))

    window.location.reload()
  }
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
      <Header />
      <FormThemDD submitForm={submitForm} />
      <TableDD DiaDiems={DiaDiems} deleteDD={deleteDD} />
    </div>
  );
}

export default App;
