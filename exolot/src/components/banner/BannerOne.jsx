import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel3";
// import Icofont from "react-icofont";
import PropTypes from "prop-types";
import VisibilitySensor from "react-visibility-sensor";
import "react-modal-video/css/modal-video.min.css";
import ModalVideo from "react-modal-video";

class HomeSlides extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({ isOpen: true });
    }
    render() {
        //Home Slides loop start
        const homeslidesdata = this.props.homeslidesData.map(
            (homeslides, index) => (
                <React.Fragment key={index}>
                    <div className={homeslides.bgImgClass}>
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                        <div className="hero-content">
                                            <h5
                                                className={
                                                    isVisible
                                                        ? "animated fadeInDown slow opacityOne"
                                                        : "opacityZero"
                                                }
                                            >
                                                {homeslides.toptitle}
                                            </h5>
                                            <h1
                                                className={
                                                    isVisible
                                                        ? "animated fadeInUp slow opacityOne"
                                                        : "opacityZero"
                                                }
                                            >
                                                {homeslides.mainlefttitle}{" "}
                                                <span>
                                                    {
                                                        homeslides.mainspantitle
                                                    }
                                                </span>{" "}
                                                {homeslides.mainrighttitle}
                                            </h1>
                                            <p
                                                className={
                                                    isVisible
                                                        ? "animated zoomIn Slow opacityOne"
                                                        : "opacityZero"
                                                }
                                            >
                                                {homeslides.content}
                                            </p>
                                            <a
                                                href={
                                                    homeslides.leftbtnlink
                                                }
                                                className={
                                                    isVisible
                                                        ? "btn btn-primary animated fadeInDown slow opacityOne"
                                                        : " btn btn-primary opacityZero"
                                                }
                                            >
                                                {homeslides.leftbtn}
                                            </a>
                                            
                                            {/* <button onClick={this.openModal} className={
                                                    isVisible
                                                        ? "video-btn animated fadeInDown slow opacityOne"
                                                        : "video-btn opacityZero"
                                                }>
                                                <Icofont icon="icofont-play-alt-2" /> {homeslides.videobtn}
                                            </button> */}
                                        </div>
                                    )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                        <div className="animation-box1">
                            <img
                                src={this.props.animationImg1}
                                alt="sliderimage"
                            />
                        </div>
                        <div className="animation-box2">
                            <img
                                src={this.props.animationImg2}
                                alt="sliderimage"
                            />
                        </div>
                        <div className="animation-box3">
                            <img
                                src={this.props.animationImg3}
                                alt="sliderimage"
                            />
                        </div>
                        <div className="animation-box4">
                            <img
                                src={this.props.animationImg4}
                                alt="sliderimage"
                            />
                        </div>
                        <div className="animation-box6">
                            <img
                                src={this.props.animationImg5}
                                alt="sliderimage"
                            />
                        </div>
                        <div className="animation-box7">
                            <img
                                src={this.props.animationImg6}
                                className="rotateme"
                                alt="sliderimage"
                            />
                        </div>
                    </div>
                </React.Fragment>
            )
        );
        //Home Slides END
        return (
            <React.Fragment>
                <div id="home">
                    <ModalVideo
                        channel="youtube"
                        isOpen={this.state.isOpen}
                        videoId={this.props.homeslidesData[0].videoId}
                        onClose={() =>
                        this.setState({
                            isOpen: false
                        })
                        }
                    />
                    <OwlCarousel
                        className="home-slides owl-theme"
                        items={1}
                        nav={true}
                        dots={false}
                        loop={true}
                        touchDrag={false}
                        mouseDrag={false}
                        autoplay={true}
                        autoplayHoverPause={true}
                        animateOut={"slideOutDown"}
                        animateIn={"slideInDown"}
                        smartSpeed={700}
                        autoplayTimeout ={8000}
                        navText={[
                            "<i class='icofont-swoosh-right'></i>",
                            "<i class='icofont-swoosh-right'></i>"
                        ]}
                    >
                    
                        {homeslidesdata}
                    </OwlCarousel>
                </div>
            </React.Fragment>
        );
    }
}

HomeSlides.propTypes = {
    animationImg1: PropTypes.string,
    animationImg2: PropTypes.string,
    animationImg3: PropTypes.string,
    animationImg4: PropTypes.string,
    animationImg5: PropTypes.string,
    animationImg6: PropTypes.string,
    homeslidesData: PropTypes.array
};

HomeSlides.defaultProps = {
    animationImg1: require("../../assets/img/1.png"),
    animationImg2: require("../../assets/img/2.png"),
    animationImg3: require("../../assets/img/1.png"),
    animationImg4: require("../../assets/img/5.png"),
    animationImg5: require("../../assets/img/6.png"),
    animationImg6: require("../../assets/img/7.png"),

    homeslidesData: [
        {
            bgImgClass: "main-banner item-bg-one",
            toptitle: "MechMee",
            mainlefttitle: "Find about ",
            mainspantitle: "40,000 ",
            mainrighttitle: "colleges & 500 exams",
            content:
            "Education has one of its fundamental goals, to impart the culture with best resources from generation to generation. It escalates the best sense of realization of self-potential and latent talents of an individual. With this ideology, an education portal named MechMee came into light. MechMee- India’s one of the rising education portal was launched on 21 March, 2013. Since, its opening, the portal has been excelling in providing good knowledge regarding education. It is praiseworthy to note that within a span of two years, it has built a strong consolidating platform to abide by the knowledge for taking admissions in well deserved colleges. As a matter of fact there is no denial, to accept that it provides profound information on a very large scale.",
          leftbtn: "Coming Soon",
          leftbtnlink: "#",
          videoId: "vr0qNXmkUJ8",
          videobtn: "Watch Video"
        },
        {
            bgImgClass: "main-banner item-bg-two",
            toptitle: "MechMee",
            mainlefttitle: "Find about ",
            mainspantitle: "40,000 ",
            mainrighttitle: "colleges & 500 exams",
            content:
            "Education has one of its fundamental goals, to impart the culture with best resources from generation to generation. It escalates the best sense of realization of self-potential and latent talents of an individual. With this ideology, an education portal named MechMee came into light. MechMee- India’s one of the rising education portal was launched on 21 March, 2013. Since, its opening, the portal has been excelling in providing good knowledge regarding education. It is praiseworthy to note that within a span of two years, it has built a strong consolidating platform to abide by the knowledge for taking admissions in well deserved colleges. As a matter of fact there is no denial, to accept that it provides profound information on a very large scale.",
          leftbtn: "Coming Soon",
          leftbtnlink: "#",
          videoId: "vr0qNXmkUJ8",
          videobtn: "Watch Video"
        },
        {
            bgImgClass: "main-banner item-bg-three",
            toptitle: "MechMee",
            toptitle: "MechMee",
            mainlefttitle: "Find about ",
            mainspantitle: "40,000 ",
            mainrighttitle: "colleges & 500 exams",
            content:
            "Education has one of its fundamental goals, to impart the culture with best resources from generation to generation. It escalates the best sense of realization of self-potential and latent talents of an individual. With this ideology, an education portal named MechMee came into light. MechMee- India’s one of the rising education portal was launched on 21 March, 2013. Since, its opening, the portal has been excelling in providing good knowledge regarding education. It is praiseworthy to note that within a span of two years, it has built a strong consolidating platform to abide by the knowledge for taking admissions in well deserved colleges. As a matter of fact there is no denial, to accept that it provides profound information on a very large scale.",
          leftbtn: "Coming Soon",
          leftbtnlink: "#",
          videoId: "vr0qNXmkUJ8",
          videobtn: "Watch Video"
        }
    ]
};

export default HomeSlides;
