import React from 'react'
import { useState, useEffect } from 'react'


const ThongTinTour = () => {
    return (
        <div className="page-dattour">
            <div className="noidung-dattour" >
                <div className="diadiem-dattour">
                    <p className="tieude-diadiem">di bien</p>
                    <p>Tour</p>
                    <img className="card-tour-locationImg" src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/e437c4bab99263e4f59a3c7b03552858.svg" width="12" height="12"></img>
                    <p className="card-tour-info-diaDiem">Vung tau</p>
                </div>
                <div className="image-dattour">
                    <div className="image">
                        <div className="image-dattour-1">
                            <img src="https://photo-baomoi.zadn.vn/w700_r1/2019_01_01_17_29196381/325b4dca7f8996d7cf98.jpg"></img>
                        </div>
                        <div className="image-dattour-2">
                            <div className="img-2"><img src="https://photo-baomoi.zadn.vn/w700_r1/2019_01_01_17_29196381/325b4dca7f8996d7cf98.jpg"></img></div>
                            <div className="img"><img src="https://photo-baomoi.zadn.vn/w700_r1/2019_01_01_17_29196381/325b4dca7f8996d7cf98.jpg"></img></div>
                            <div className="img1"><img src="https://photo-baomoi.zadn.vn/w700_r1/2019_01_01_17_29196381/325b4dca7f8996d7cf98.jpg"></img></div>
                            <div className="img1"><img src="https://photo-baomoi.zadn.vn/w700_r1/2019_01_01_17_29196381/325b4dca7f8996d7cf98.jpg"></img></div>
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
                        <div className="type-khoanhkhac" >Khoanh khac dang nho</div>
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
                <div className="type-hoatdong">Chi tiet hoat dong</div>
                <div className="DiemNoiBat-hoatdong">
                    <div className="NoiDung-DiemNoiBat ">
                        Trầm trồ trước vẻ đẹp ấn tượng của các hòn đảo ở Nha Trang Khám phá Hòn Mun, khu bảo tồn biển duy nhất tại Việt Nam Thưởng thức các món ăn dân dã, đậm đà hương vị biển ở Vịnh San Hô tại Hòn Một Nằm phơi nắng dưới hàng dừa ở bãi biển Mini tuyệt đẹp tại Hòn Miễu Phù hợp cho: Yêu thích thiên nhiên, Gia đình vui vẻ Lịch trình Tour
                    </div>
                    <div className="Noidung-DatTour-small-hoatdong ">
                        asdasdasds
                    </div>
                </div>
            </div>
            <div className="ThongTin-DuaDon">
                <div className=""></div>
                <div className=""></div>
            </div>
            <div className="Dattour">
                <div className="Content-Dattour">Kha dung vao ngay khac</div>
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
