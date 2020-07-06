import React from "react";

import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container";

import styles from "./Header.module.scss"

export const Header = () => (
    <div
        className={styles.Header}
    >
        <Container>
            <Link>Главная</Link>
            <Link>О докторе</Link>
            <Link>Услуги</Link>
            <Link>Результаты</Link>
            <Link>Пациенту</Link>
        </Container>
    </div>
)