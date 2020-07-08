import React, { useState } from "react"
import Masonry from 'react-masonry-css'
import { Container, Row, Col } from "react-bootstrap";
import {BASE_URL} from "../../../constants";

import {FullScrennView} from "../FullScreenView";
import {AboutText} from "./AboutText";
// import {certs} from "../../../img/certs"

import FsLightbox from 'fslightbox-react';

import style from "./About.module.scss";

const composeImagePath = (url) => `${BASE_URL}${url}`

export const About = ({certs}) => {
    const [toggler, setToggler] = useState(false);
    const [slide, setSlide] = useState(false);

    const fullCerts = certs && certs.map(({CertificateImage, MinifiedImage}) => ({mini: MinifiedImage.url, full: CertificateImage.url}))

    return (
        <FullScrennView
            title="О Докторе"
            className={style.About}
        >
            {
                certs &&
                <FsLightbox
                    toggler={fullCerts.map(({full}) => composeImagePath(full))}
                    sources={certs}
                    slide={slide}
                />
            }
            <Container>
                <Row>
                    <Col
                        md={6}
                        sm={12}
                    >
                        <AboutText />
                    </Col>
                    <Col
                        md={6}
                    >
                        {
                            certs &&
                            <Masonry
                                breakpointCols={5}
                                className="my-masonry-grid"
                                columnClassName="my-masonry-grid_column"
                            >
                                {
                                    fullCerts.map(({mini}, index) => (
                                        <img
                                            src={composeImagePath(mini)}
                                            onClick={() => {
                                                setToggler(!toggler)
                                                setSlide(index + 1)
                                            }}
                                        />
                                    ))
                                }
                            </Masonry>
                        }

                    </Col>
                </Row>
            </Container>
        </FullScrennView>
    )
}