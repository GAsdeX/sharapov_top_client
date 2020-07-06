import React, {useState} from "react";
import BeforeAfterSlider from 'react-before-after-slider'
import {FullScrennView} from "../../presentational/FullScreenView";



import { before } from "./img/before"
import { after } from "./img/after"

import style from "./Results.module.scss"

const setImage = (path) => ({
    backgroundImage: `url(${path})`
})

export const Results = () => {
    const [activeImage, setActiveImage] = useState(0)

    const goPrev = () => void (activeImage === 0 ? setActiveImage(0) : setActiveImage(activeImage - 1) )
    const goNext = () => void (activeImage === after.length - 1 ? setActiveImage(after.length - 1) : setActiveImage(activeImage + 1))

    const isMedia = window.innerWidth > 767

    return (
        <FullScrennView
            title="Результаты работы"
            className={style.ResultsWrapper}
        >
            <div className={style.Results}>
                <BeforeAfterSlider
                    before={before[activeImage]}
                    after={after[activeImage]}
                    width={isMedia ? 600 : 300}
                    height={isMedia ? 600 : 300}
                />

                <div className={style.mediaSlider}>

                </div>
                <div className={style.navigation}>
                    <div className={style.prev} onClick={goPrev}/>
                    <div className={style.next} onClick={goNext}/>
                </div>
            </div>
        </FullScrennView>
    )
}