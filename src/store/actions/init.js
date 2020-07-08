import { batch } from 'react-redux'

import axios from "axios";
import {URL} from "../../constants";
import {setServicesValue} from "../reducers/services";
import {setFaqValue} from "../reducers/faq";
import {setArticlesValue} from "../reducers/articles";
import {setCertificatesValue} from "../reducers/certificates";
import {setAppState} from "../reducers/appState";


export const init = () => async (dispatch) => {
    const [
        services,
        faq,
        articles,
        certificates,
    ] = (await Promise.all([
        axios.get(URL.SERVICES),
        axios.get(URL.FAQ),
        axios.get(URL.ARTICLES),
        axios.get(URL.CERTIFICATES),
    ]))
        .map(({data}) => data)

    batch(() => {
        dispatch(setServicesValue('success',services))
        dispatch(setFaqValue('success',faq))
        dispatch(setArticlesValue('success',articles))
        dispatch(setCertificatesValue('success',certificates))
    })

    dispatch(setAppState('success', 'DONE'))
}