import React from 'react'

import { FullScrennView } from '../FullScreenView'

import style from './style.module.scss'

export const Home = () => (
    <FullScrennView
        className={style['Home']}
    >
        <div
            className={style['info-bar-container']}
        >
            <div
                className={style['info-bar']}
            >
                <div
                    className={style['name']}
                >
                    Шарапов
                    <br />
                    Игори Владимирович
                </div>
                <ul 
                    className={style['qualification-list']}
                >
                    <li>Кандидат иедицинских наук</li>
                    <li>Врач-хирург высшей категории</li>
                    <li>Пластический хирург</li>
                </ul>
            </div>
        </div>
        
        <div
            className={style['qualification-list']}
        >

        </div>
    </FullScrennView>
)