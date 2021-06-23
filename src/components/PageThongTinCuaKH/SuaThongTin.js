import "antd/dist/antd.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
const SuaThongTin = ({ ThongTinKhach }) => {
	// const [visiable, setVisiable] = useState(false);
	// const handleSwitch = () => setVisiable(!visiable);

	// const [visiable1, setVisiable1] = useState(false);
	// const handleSwitch1 = () => setVisiable1(!visiable1);

	// const [visiable2, setVisiable2] = useState(false);
	// const handleSwitch2 = () => setVisiable2(!visiable2);
	return (
		<div>
			<div className="box-group">
				<div className="box-ten">
					<FaUser style={{ marginRight: 8, fontWeight: 500 }} />
					<span style={{ fontWeight: "bold", fontSize: 17 }}>{ThongTinKhach.ten}</span>


				</div>
				<div className="box-sodienthoai">
					<FaPhone style={{ marginRight: 8, fontWeight: 500 }} />
					<span style={{ fontSize: 18, fontWeight: "bold" }}>Điện thoại</span>

					<div className="sodienthoai-kh">{ThongTinKhach.sdt}</div>

				</div>
				<div className="box-email">
					<FaEnvelopeOpenText style={{ marginRight: 8, fontWeight: 500 }} />
					<span style={{ fontSize: 18, fontWeight: "bold" }}>Email</span>

					<div className="email-kh">
						{ThongTinKhach.email}{" "}
						<FaTrashAlt style={{ float: "right", marginTop: 5 }} />
					</div>

				</div>
			</div>
		</div>
	);
};

export default SuaThongTin;
