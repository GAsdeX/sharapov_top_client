import React from "react";

import { Link } from "react-router-dom"

import styles from "./Header.module.scss"

export const Header = () => (
    <div
        className={styles.Header}
    >
        <Link>Главная</Link>
        <Link>О докторе</Link>
        <Link>Услуги</Link>
        <Link>Результаты</Link>
        <Link>Пациенту</Link>
    </div>
)