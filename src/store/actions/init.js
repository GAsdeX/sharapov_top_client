import { batch } from 'react-redux'

import { fetchServices } from '../../store/actions/services';


export const init = () => (dispatch) => {
    batch(() => {
        dispatch(fetchServices())
    })
}