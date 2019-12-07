import React, { Component } from "react";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import SearchPage from '../../../components/SearchBar'
import StateDropDowm from '../../../components/StateDropDown';
import { Row, Col, Container} from "react-bootstrap";
class MedicalCourse extends Component {
    render() {
        //Welcome loop start
        const welcomedata = this.props.welcomesData.map((welcome, index) =>( 
            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                <div className="single-box">
                    <Icofont icon={welcome.icon} />
                    <h3>{welcome.title}</h3>
                    <p>{welcome.content}</p>
                </div>
            </div>
            ));
        //Welcome loop END

        return (
            <React.Fragment>
                <section className="welcome-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                           
                            {/* <span>{this.props.sectiontopTitle}</span> */}
                            {/* <h2>{this.props.sectionTitle} <b>{this.props.sectionTitleSpan}</b></h2> */}
                            <p>{this.props.sectionContent}</p>
                        </div>
                        <Container>
                            <Row>
                                <Col  sm = {12} xs={12} lg={8}>
                                    <SearchPage/>
                                </Col>
                                <Col  sm = {12} xs={12} lg={{span:3 , offset: 1}}>
                                    <StateDropDowm/>
                                </Col>
                            </Row>
                        </Container>
                        
                        <div className="row">
                            {welcomedata}
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

MedicalCourse.propTypes = {
    sectiontopTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionTitleSpan: PropTypes.string,
    sectionContent: PropTypes.string,
    welcomesData: PropTypes.array
};

MedicalCourse.defaultProps = {
    sectiontopTitle: "WE ARE CREATIVE",
    sectionTitle: "Welcome to",
    sectionTitleSpan: "Exolot",
    sectionContent:
        "Lists of Collleges",

        welcomesData: [
        {
            // icon: "icofont-magnet",
            title: "BANGALORE MEDICAL COLLEGE AND RESEARCH INSTITUTE",
            content:
                "Established during the year 1955, the Bangalore medical college is an autonomous college which is owned by the government. The Bangalore medical college is now ranked as the 11th most renowned colleges in Bangalore. With its widespread campus the campus has total faculty strength of 368 and a total of 2403 student enrolment till date."
        },
        {
            // icon: "icofont-laptop-alt",
            title: "Shimoga Institute of Medical Sciences",
            content:
                "Shimoga Institute of Medical Sciences, SIMS, started during 2005 in 25 acres of land, in the premises of Government Mc. Gann Hospital at Shimoga. SIMS has acquired affiliation from the Medical Council of India for its UG [MBBS] and PG courses. 150 seats are available for UG admission based on Government of Karnataka guidelines."
        },
        {
            // icon: "icofont-headphone-alt-2",
            title: "Mandya Institute of Medical Science, Mandya",
            content:
                "The Mandya Institute of Medical Sciences (MIMS), Mandya is an Autonomous Government Medical College of the Government of Karnataka. The institution is located on the State Highway No. 17 (Bengaluru – Mysore road) at a distance of 90 Kilometers from Bengaluru."
        }
    ]
};
export default MedicalCourse;
