import { Link } from 'react-router-dom'

const Header = () => {
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
    )
}

export default Header
