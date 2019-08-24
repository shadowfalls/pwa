import React from 'react';
import {
    Row, Col, Card, CardBody, Container,
    CardTitle
} from 'reactstrap';
import axios from 'axios';
import { Link } from "react-router-dom";

import './LandingPage.scss';

export default class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {"catId":"angular_7","catName":"Angular 7","count":3},
                {"catId":"reactjs 1","catName":"ReactJS","count":1},
                {"catId":"angular_8","catName":"Angular 8","count":3},
                {"catId":"reactjs 2","catName":"ReactJS","count":1},
                {"catId":"angular_9","catName":"Angular 9","count":3},
                {"catId":"reactjs 3","catName":"ReactJS","count":1},
                {"catId":"angular_2","catName":"Angular 1","count":3},
                {"catId":"reactjs 4","catName":"ReactJS","count":1},
            ]
        }
    }

    componentDidMount() {
        // const baseUrl = 'https://raw.githubusercontent.com/shadowfalls/mirror/master/src';
        // axios.get(`${baseUrl}/api/categories/_categorieTypes.json`)
        //     .then((res) => {
        //         if (res)
        //             this.setState({
        //                 categories: res.data && res.data.length ? res.data.slice(0, 4) : []
        //             });
        //     })
        //     .catch(err => {
        //     });
    }

    render() {

        const cats = this.state.categories.map(c => {
            return <Col xs="11" lg="2" md="5" sm="5" className="card-margin" key={c.catId}>
                <Card>
                    <CardBody>
                        <CardTitle>{c.catName}</CardTitle>
                        <Link to={{ pathname: '/', search: `?id=${c.catId}&name=${c.catName}` }}>more</Link>
                    </CardBody>
                </Card>
            </Col>;
        });

        return <span className="landing-page">
            <div className="landing-page__container">
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Col xs="12">
                                    <div className="welcome-text">
                                        Welcome to WebTutor
                                    </div>
                                    <p className="lead">Learn web-technology the right way. We have blog articles for the following technologies</p>
                                </Col>
                                {cats}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </span>;
    }
}
