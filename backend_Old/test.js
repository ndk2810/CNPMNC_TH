const axios = require('axios');
const Tour = require('./models/tour.model');

it('Add tour using POST', async () => {
    const tourToAdd = new Tour({ "tenTour": "test3", "diaDiem": "Phú Quốc", "gia": 300000, "diemNoiBat": "test", "gioiThieu": "test", "lichTrinh": "test", "hinhAnh": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Phu_My_Hung%2C_HCM_City_5.jpg" })
    const response = await addTour(tourToAdd);  // Run the function
    expect(response).toEqual('Done added test3 to database');  // Make an assertion on the result
});

it('Returns the specified dia diem', async () => {
    const tenDiaDiem = 'Phú Quốc'
    const dataDiaDiem = await getTourByDiaDiem(tenDiaDiem);  // Run the function
    expect(dataDiaDiem).toEqual(tenDiaDiem);  // Make an assertion on the result
});

//GET tên tour bằng tên địa điểm
async function getTourByDiaDiem(tenDiaDiem) {
    const response = await axios.get('http://localhost:5000/tour/' + tenDiaDiem);
    return response.data[0].diaDiem;
}

//POST tạo tour
async function addTour(tour) {
    const response = await axios.post('http://localhost:5000/tour/add', tour);
    return response.data;
}