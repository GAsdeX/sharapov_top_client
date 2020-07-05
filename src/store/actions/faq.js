import axios from 'axios'
import {setFaqValue} from "../reducers/faq";
import {URL} from "../../constants";

export const fetchFaq = () => async (dispatch) => {
    try {
        dispatch(setFaqValue('fetch'))

        const { data } = await axios.get(URL.FAQ)

        dispatch(setFaqValue('success', data))

    } catch(e) {
        dispatch(setFaqValue('fail'))
        console.log(e)
    }
}