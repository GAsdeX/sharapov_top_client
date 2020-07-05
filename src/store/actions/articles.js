import axios from 'axios'
import {setArticlesValue} from "../reducers/articles";
import {URL} from "../../constants";

export const fetchArticles = () => async (dispatch) => {
    try {
        dispatch(setArticlesValue('fetch'))

        const { data } = await axios.get(URL.ARTICLES)

        dispatch(setArticlesValue('success', data))

    } catch(e) {
        dispatch(setArticlesValue('fail'))
        console.log(e)
    }
}