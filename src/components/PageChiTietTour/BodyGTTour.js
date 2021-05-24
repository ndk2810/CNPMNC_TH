const zoomImage = (src) => {
    document.getElementById('img-main').src = src
}

const BodyTour = ({ HinhAnhTour }) => {
    let src = 'https://semantic-ui.com/images/wireframe/white-image.png'
    if (HinhAnhTour[0]) {
        let hinhAnhBase64 = Buffer.from(HinhAnhTour[0].HinhAnh).toString('base64')
        src = `data:image/jpeg;base64,${hinhAnhBase64}`
    }
    return (
        <div className="image-dattour">
            <div className="image">
                <div className="image-dattour-1">
                    <img id="img-main" src={src}></img>
                </div>
                <div className="image-dattour-2">
                    {
                        HinhAnhTour.map(hinhAnhTour => {
                            //Decode hình ảnh từ binary thành base64 để hiển thị
                            let src = 'https://semantic-ui.com/images/wireframe/white-image.png'
                            if (hinhAnhTour) {
                                let hinhAnhBase64 = Buffer.from(hinhAnhTour.HinhAnh).toString('base64')
                                src = `data:image/jpeg;base64,${hinhAnhBase64}`
                            }
                            return (
                                <div className="img-2">
                                    <img src={src} onClick={(e) => zoomImage(e.target.src)}></img>
                                    <img src={src} onClick={(e) => zoomImage(e.target.src)}></img>
                                    <img src={src} onClick={(e) => zoomImage(e.target.src)}></img>
                                    <img src={src} onClick={(e) => zoomImage(e.target.src)}></img>
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>

            <div className="giatien-tour">
                <div className="noidung-giatien-tour"></div>
                <div className="giatien">
                    <img className="btn-favorite" src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/745a2dacef20a88638b724cfa87c7fd8.svg"></img>
                    <div className="giatien-noidung">Giá từ</div>
                    <div className="giatien-chitiet-tour">700.000 VND</div>
                    <div className="btn-timtour">Tìm tour</div>
                </div>
            </div>
        </div>
    )
}

export default BodyTour
