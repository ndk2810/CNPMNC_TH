import React from 'react'
import { useState, useEffect } from 'react'


const ThongTinTour = () => {
    return (
        <div className="page-dattour">
            <div className="noidung-dattour" >
                <div className="diadiem-dattour">
                    <p className="tieude-diadiem">Đi biển</p>
                    <p className="cardtour">Tour</p>
                    <img className="cardtourlocationImg" src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/e437c4bab99263e4f59a3c7b03552858.svg" width="12" height="12"></img>
                    <p className="cardtourinfodiaDiem">Vung tau</p>
                </div>
                <div className="image-dattour">
                    <div className="image">
                        <div className="image-dattour-1">
                            <img src="https://photo-baomoi.zadn.vn/w700_r1/2019_01_01_17_29196381/325b4dca7f8996d7cf98.jpg"></img>
                        </div>
                        <div className="image-dattour-2">
                            <div className="img-2"><img src="https://photo-baomoi.zadn.vn/w700_r1/2019_01_01_17_29196381/325b4dca7f8996d7cf98.jpg"></img></div>
                            <div className="img-2"><img src="https://photo-baomoi.zadn.vn/w700_r1/2019_01_01_17_29196381/325b4dca7f8996d7cf98.jpg"></img></div>
                            <div className="img-2"><img src="https://photo-baomoi.zadn.vn/w700_r1/2019_01_01_17_29196381/325b4dca7f8996d7cf98.jpg"></img></div>
                            <div className="img-2"><img src="https://photo-baomoi.zadn.vn/w700_r1/2019_01_01_17_29196381/325b4dca7f8996d7cf98.jpg"></img></div>
                        </div>
                    </div>
                    <div className="giatien-tour">
                        <div className="noidung-giatien-tour">Traveloka</div>
                        <div className="giatien">
                            <img className="btn-favorite" src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/745a2dacef20a88638b724cfa87c7fd8.svg"></img>
                            <div className="giatien-noidung">Giá từ</div>
                            <div className="giatien-chitiet-tour">700.000VND</div>
                            <div className="btn-timtour">Tim tour</div>
                        </div>
                    </div>
                    <div className="khoanhkhac">
                        <div className="type-khoanhkhac" >Khoảnh khắc đáng nhớ</div>
                        <div className="image-khoanhkhac">
                            <div className="img-khoanhkhac"><img src="https://photo-baomoi.zadn.vn/w700_r1/2019_01_01_17_29196381/325b4dca7f8996d7cf98.jpg"></img></div>
                            <div className="img-khoanhkhac"><img src="https://photo-baomoi.zadn.vn/w700_r1/2019_01_01_17_29196381/325b4dca7f8996d7cf98.jpg"></img></div>
                            <div className="img-khoanhkhac"><img src="https://photo-baomoi.zadn.vn/w700_r1/2019_01_01_17_29196381/325b4dca7f8996d7cf98.jpg"></img></div>
                            <div className="img-khoanhkhac"><img src="https://photo-baomoi.zadn.vn/w700_r1/2019_01_01_17_29196381/325b4dca7f8996d7cf98.jpg"></img></div>
                            <div className="img-khoanhkhac"><img src="https://photo-baomoi.zadn.vn/w700_r1/2019_01_01_17_29196381/325b4dca7f8996d7cf98.jpg"></img></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hoatdong">
                <div className="type-hoatdong">Chi tiết hoạt động</div>
                <div className="DiemNoiBat-hoatdong">
                    <div className="NoiDung-DiemNoiBat ">
                        Trầm trồ trước vẻ đẹp ấn tượng của các hòn đảo ở Nha Trang Khám phá Hòn Mun, khu bảo tồn biển duy nhất tại Việt Nam Thưởng thức các món ăn dân dã, đậm đà hương vị biển ở Vịnh San Hô tại Hòn Một Nằm phơi nắng dưới hàng dừa ở bãi biển Mini tuyệt đẹp tại Hòn Miễu Phù hợp cho: Yêu thích thiên nhiên, Gia đình vui vẻ Lịch trình Tour
                    </div>
                    <div className="Noidung-DatTour-small-hoatdong ">
                        <div className="tieude-diadiem">Tour 3 đảo Nha Trang bằng tàu siêu tốc - 1 ngày</div>
                        <div className="btn-Noidung-DatTour-small-hoatdong">Tim tour</div>
                        <div className="Ve-Noidung-DatTour-small-hoatdong">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2020/02/24/1582532977248-c01603da7f91217b28788f2c9642158f.png?tr=h-16,w-16"></img>
                            <p className="title-Ve-Noidung-DatTour-small-hoatdong">Ngày có vé tiếp theo: Chủ,09 May 2021</p>
                        </div>
                        <div className="ThoiGian-Noidung-DatTour-small-hoatdong">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2020/02/24/1582533047443-34d220e4b4d814bd55e67b2677144ca4.png?tr=h-16,w-16"></img>
                            <p className="title-ThoiGian-Noidung-DatTour-small-hoatdong">Độ dài: 1 Day</p>
                        </div>
                        <div className="TinhNang-Noidung-DatTour-small-hoatdong">Tính năng</div>
                        <div className="Easy-Noidung-DatTour-small-hoatdong">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/03/22/1616400208843-5663daf4fb49618b48d0b3994b2eb396.png"></img>
                            <p className="title-Easy-Noidung-DatTour-small-hoatdong">Easy Refund</p>
                        </div>
                        <div className="Gia-Noidung-DatTour-small-hoatdong">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2020/02/24/1582533156947-8b600d26b18117730c2ce64fbb2bc3a0.png"></img>
                            <p className="title-Gia-Noidung-DatTour-small-hoatdong">Giá đặc biệt</p>
                        </div>
                        <div className="Accept-Noidung-DatTour-small-hoatdong">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2020/02/24/1582540787301-acbdf7cfb83202c8f12f58580001f5fe.png"></img>
                            <p className="title-Accept-Noidung-DatTour-small-hoatdong">Xác nhận tức thì</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ThongTin-DuaDon">
                <div className="Type-ThongTin-DuaDon"></div>
                <div className=""></div>
            </div>
            <div className="Dattour">
                <div className="Content-Dattour">Khả dụng vào ngày khác</div>
                <div className="Chon-Dattour">
                    <div className="Content-Chon-Dattour">Tour mở - Khởi hành tại Nha Trang</div>
                    <div className="Btn-Chon-giatien">
                        <div className="giatien-chitiet">700.000VND</div>
                        <div className="btn-Chon">Chon</div>
                    </div>
                </div>
            </div>
        </div >
        //<Button className="btn btn-primary" color="danger">Danger!</Button>
    )
}

export default ThongTinTour
