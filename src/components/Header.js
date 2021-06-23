import { Link } from "react-router-dom";

const SiderDemo = () => {
	return (
		<div className="header">
			<nav className="header-nav">
				<h1>Partner Web</h1>
				<ul>
					<li><Link to='/'>Tour</Link></li>
					<li><Link to='/quanLyDat'>Đặt tour</Link></li>
				</ul>
			</nav>
		</div>
	);
};

export default SiderDemo;
// #components-layout-demo-side .logo {
//   height: 32px;
//   margin: 16px;
//   background: rgba(255, 255, 255, 0.3);
// }

// .site-layout .site-layout-background {
//   background: #fff;
// }
