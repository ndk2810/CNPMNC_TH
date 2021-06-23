import axios from "axios";

//COMPONENTS
import FormThemTour from "../components/PageQLTour/FormThemTour";
import TableTour from "../components/PageQLTour/TableTour";
import server from "../serverAddress";



//Hàm thêm tour
const addTour = (e) => {
	e.preventDefault();
	const DiaDiem = document.getElementById("diaDiem").value;
	const TheLoai = document.getElementById("theLoai").value;
	const TenTour = document.getElementById("tenTour").value;
	const DiaChiTour = document.getElementById("diaChiTour").value;
	const DiemNoiBat = document.getElementById("diemNoiBat").value;
	const LichTrinh = document.getElementById("lichTrinh").value;
	const NoiDung = document.getElementById("noiDung").value;
	const DoDai = document.getElementById("doDai").value;
	const GiaNguoiLon = document.getElementById("giaNguoiLon").value;
	const GiaTreEm = document.getElementById("giaTreEm").value;

	if (
		!DiaDiem ||
		!TheLoai ||
		!TenTour ||
		!DiaChiTour ||
		!DiemNoiBat ||
		!LichTrinh ||
		!NoiDung ||
		!DoDai ||
		!GiaNguoiLon ||
		!GiaTreEm
	) {
		alert("Không được để trống các trường thông tin");
		return;
	}

	if (window.confirm("Thêm tour vào CSDL ?")) {
		axios
			.post(server + "/tour/add", {
				DiaDiem: DiaDiem,
				TheLoai: TheLoai,
				TenTour: TenTour,
				DiaChiTour: DiaChiTour,
				DiemNoiBat: DiemNoiBat,
				LichTrinh: LichTrinh,
				NoiDung: NoiDung,
				DoDai: DoDai,
				GiaNguoiLon: GiaNguoiLon,
				GiaTreEm: GiaTreEm,
			})
			.then(() => window.location.reload())
			.catch((err) => alert(err));
	}
};

//Hàm xoá tour
const deleteTour = (IDTour) => {
	const data = {
		IDTour: IDTour,
	};

	if (window.confirm("Xoá tour ?")) {
		axios
			.post(server + "/tour/remove", data)
			.then(() => console.log("success"))
			.catch((err) => console.log(err));

		window.location.reload();
	}
};

const modalThemTour = () => {
	const FormThemTour = document.getElementById("modal");

	FormThemTour.style.display === "block"
		? (FormThemTour.style.display = "none")
		: (FormThemTour.style.display = "block");
};

const quanLyTour = ({ Tours, DiaDiems, ListTheLoaiTour }) => {
	return (
		<div >
			<button className="btn-modal-show" onClick={modalThemTour}>
				Thêm tour
			</button>
			<FormThemTour
				addTour={addTour}
				DiaDiems={DiaDiems}
				ListTheLoaiTour={ListTheLoaiTour}
			/>
			<TableTour Tours={Tours} deleteTour={deleteTour} />
		</div>
	);
};

export default quanLyTour;
