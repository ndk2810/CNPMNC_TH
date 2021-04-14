import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const OwlCarouselTest = ({ arrDiaDiem }) => {
    return (
        <div>
            <div class='container-fluid' >
                <div className="row title" style={{ marginBottom: "20px" }} >
                    <div class="col-sm-12 btn btn-info">
                    </div>
                </div>
            </div>
            <div class='container-fluid' >
                <OwlCarousel items={3} className="owl-theme" nav margin={8} >
                    {arrDiaDiem.length > 0 ? (arrDiaDiem.map(diaDiem => (
                        <div style={{ backgroundImage: diaDiem.hinhAnh }}>
                        </div>
                    ))) : 'No data to show'}
                </OwlCarousel>
            </div>

        </div>
    )
}

export default OwlCarouselTest
