import React from "react"
import Masonry from 'react-masonry-css'
import { Container, Row, Col } from "react-bootstrap";

import {FullScrennView} from "../FullScreenView";
import {AboutText} from "./AboutText";
import {certs} from "../../../img/certs"
import style from "./About.module.scss";

export const About = () => {


    return (
        <FullScrennView
            title="О Докторе"
            className={style.About}
        >
            <Container>
                <Row>
                    <Col
                        md={6}
                    >
                        <AboutText />
                    </Col>
                    <Col
                        md={6}
                    >
                        <Masonry
                            breakpointCols={5}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column"
                        >
                            {
                                certs.map((i) => (
                                    <img src={i}>

                                    </img>
                                ))
                            }
                        </Masonry>
                    </Col>
                </Row>
            </Container>
        </FullScrennView>
    )
}