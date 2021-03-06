import React, {useEffect} from "react"
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

import {FormWrapper} from "../../common/FormWrapper";
import {useHomePage} from "../../hooks/useHomePage";
import {Footer} from "../Footer";

import {Header} from "../Header";
import style from "./Article.module.scss"
import {replaceBold} from "../../../utils/text";

export const Article = ({
    match: {
        params: {
            article
        }
    }
}) => {
    const {
        articles
    } = useHomePage()

    const entry = articles
        ? articles
            .find(({ServiceResults: [rules]}) => rules.id === Number(article))
        : null;

    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])

    return (
        <>
            <Header isArticle/>
            <Container
                className={style.Article}
            >
                <Row>
                    <Col md={12}>
                        <Link to="/#services" className={style.back}>Назад</Link>
                    </Col>
                    <Col
                        md={8}
                    >
                        {
                            entry &&
                            <>
                                <span
                                    className={style.title}
                                >
                                    {entry.ServiceTitle}
                                </span>
                                 <p
                                     dangerouslySetInnerHTML={{__html: entry && replaceBold(entry.ServiceDescription)}}
                                 />
                            </>
                        }

                    </Col>
                    {/*<Col*/}
                    {/*    md={4}*/}
                    {/*>*/}
                    {/*    <FormWrapper*/}
                    {/*        withMessage*/}
                    {/*    />*/}
                    {/*</Col>*/}
                </Row>
            </Container>
            <Footer />
        </>

    );
}