import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <nav className="main-nav">
                <a href="#" style={{ marginRight: 8 }}><img src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/8e5cadd29984fb1d2acd37e86225fbd1.svg" alt="#" /></a>
                <Link to="/"><img src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/97f3e7a54e9c6987283b78e016664776.svg" alt="#" /></Link>
                <ul>
                    <li>
                        <a href="#" className="container">
                            <img className="service-logo" src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/f2171ac260ed89a6b04b4097e1fcd4c0.svg" alt="" />
                            <div className="text">Khuyến mãi</div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="container">
                            <img className="service-logo" src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/849dc83ea16f4f29a1fb0555c4aa441b.svg" alt="" />
                            <div className="text">Hộp thư của tôi</div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="container">
                            <img className="service-logo" src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/1e398766a2be8d967bd2823cd972a251.svg" alt="" />
                            <div className="text">Đã lưu</div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="container">
                            <img className="service-logo" src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/93d02ab488090cdfe57f83abf7e7dcd3.svg" alt="" />
                            <div className="text">Đặt chỗ của tôi</div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="container">
                            <img className="service-logo" src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/f2171ac260ed89a6b04b4097e1fcd4c0.svg" alt="" />
                            <div className="text">Ngôn ngữ</div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="container">
                            <img className="service-logo" src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/f2171ac260ed89a6b04b4097e1fcd4c0.svg" alt="" />
                            <div className="text">Tài khoản</div>
                        </a>
                    </li>
                </ul>
            </nav>
            <nav className="services-nav">
                <ul>
                    <li>
                        <a href="#" className="container">
                            <img className="service-logo" src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/f2af6a468273efe5073464eccb48118e.svg" alt="" />
                            <div className="text">Vé máy bay</div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="container">
                            <img className="service-logo" src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/6a33c3a06072cf3a77c3cea1d65d524b.svg" alt="" />
                            <div className="text">Khách sạn</div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="container">
                            <img className="service-logo" src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/15aa00dbe64582d3ba0a148236da25b0.svg" alt="" />
                            <div className="text">Combo tiết kiệm</div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="container">
                            <img className="service-logo" src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/70ab54b3c82fa5f3739bb114d41b6abb.svg" alt="" />
                            <div className="text">Đưa đón sân bay</div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="container">
                            <img className="service-logo" src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/841107e3ee5dae66f6c15c41a74f5cce.svg" alt="" />
                            <div className="text">Xperience</div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="container">
                            <img className="service-logo" src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/2acc9de899660c31b1420f2e970e5273.svg" alt="" />
                            <div className="text">Cho thuê xe</div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="container">
                            <img className="service-logo" src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/b36a6545a75ec453f0b8cae327158cb2.svg" alt="" />
                            <div className="text">JR Pass</div>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
