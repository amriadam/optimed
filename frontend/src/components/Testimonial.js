import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/Testimonial.css";
// import { Avatar } from "@material-ui/core";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md'
// import SectionTitle from "./SectionTitle";

const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <MdOutlineArrowBackIos style={{ color: "#000000", fontSize: "45px" }} />
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <MdOutlineArrowForwardIos style={{ color: "#000000", fontSize: "45px" }} />
        </div>
    );
};
const Testimonial = () => {

    const settings = {
        dots: false,
        autoplay: false,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 500,
        arrows: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }

        ]
    };

    return (
        <div className="testimonial">
            <div className="testimonial-content">
                {/* <SectionTitle title="Témoignages" /> */}
                {/* <h1 style={{ marginBottom: 20 }}>TESTIMONIALS</h1> */}
                <Slider {...settings} prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
                    <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
                    <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
                    <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
                </Slider>
            </div>
        </div>
    );
};

const Card = ({ img }) => {
    return (
        <div className="card-img-container">
            {/* <Avatar
                imgProps={{ style: { borderRadius: "50%" } }}
                src={img}
                style={{
                    width: 120,
                    height: 120,
                    border: "1px solid lightgray",
                    padding: 7,
                    marginBottom: 20,
                }}
            /> */}
            <p className="testimonial-text">
                Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
                Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
                tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
                fringilla massa. Etiam hendrerit dolor eget rutrum
                Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
                Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
                tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
                fringilla massa. Etiam hendrerit dolor eget rutrum
            </p>
            <p className="testimonial-client">
                <span className="testimonial-client-name">Jack Sparrow</span> ,
                Media Analyst
            </p>
        </div>
    );
};

export default Testimonial;