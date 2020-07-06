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
                    <span className={style['lastName']}>Шарапов</span>
                    <br />
                    Игорь Владимирович
                </div>
                <ul 
                    className={style['qualification-list']}
                >
                    <li>Кандидат медицинских наук</li>
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