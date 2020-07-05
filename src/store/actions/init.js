import { batch } from 'react-redux'

import { fetchServices } from '../../store/actions/services';
import { fetchFaq } from '../../store/actions/faq';
import {fetchArticles} from "./articles";


export const init = () => (dispatch) => {
    batch(() => {
        dispatch(fetchServices())
        dispatch(fetchFaq())
        dispatch(fetchArticles())
    })
}