import axios from 'axios'
import {setCertificatesValue} from "../reducers/certificates";
import {URL} from "../../constants";

export const fetchCertificates = () => async (dispatch) => {
    try {
        dispatch(setCertificatesValue('fetch'))

        const { data } = await axios.get(URL.CERTIFICATES)

        dispatch(setCertificatesValue('success', data))

    } catch(e) {
        dispatch(setCertificatesValue('fail'))
        console.log(e)
    }
}