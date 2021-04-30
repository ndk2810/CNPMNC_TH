import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <nav className="header-nav">
                <h1>Administrator Web</h1>
                <ul>
                    <li><Link to='/'>Địa điểm</Link></li>
                    <li><Link to='/quanLyTour'>Tour</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
