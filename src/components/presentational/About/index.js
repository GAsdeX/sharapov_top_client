import React, { useState } from "react"
import Masonry from 'react-masonry-css'
import { Container, Row, Col } from "react-bootstrap";

import {FullScrennView} from "../FullScreenView";
import {AboutText} from "./AboutText";
import {certs} from "../../../img/certs"

import FsLightbox from 'fslightbox-react';

import style from "./About.module.scss";

export const About = () => {
    const [toggler, setToggler] = useState(false);
    const [slide, setSlide] = useState(false);

    return (
        <FullScrennView
            title="О Докторе"
            className={style.About}
        >
            <FsLightbox
                toggler={toggler}
                sources={certs}
                slide={slide}
            />
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
                                certs.map((image, index) => (
                                    <img
                                        src={image}
                                        onClick={() => {
                                            setToggler(!toggler)
                                            setSlide(index + 1)
                                        }}
                                    />
                                ))
                            }
                        </Masonry>
                    </Col>
                </Row>
            </Container>
        </FullScrennView>
    )
}