import axios from 'axios'

import { URL } from '../../constants'

import { setServicesValue } from '../reducers/services' 

export const fetchServices = () => async (dispatch) => {
    try {
        dispatch(setServicesValue('fetch'))

        const { data } = await axios.get(URL.SERVICES)

        dispatch(setServicesValue('success', data))

    } catch(e) {
        dispatch(setServicesValue('fail'))
        console.log(e)
    }
}
