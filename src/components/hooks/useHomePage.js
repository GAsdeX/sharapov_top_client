import { useSelector } from 'react-redux'
import { mapServicesValue } from '../../store/reducers/services'
import { mapFaqValue } from '../../store/reducers/faq'

export const useHomePage = () => {
    const {
        success : services,
        fail,
        fetch
    } = useSelector(mapServicesValue)

    const {
        success : faq,
    } = useSelector(mapFaqValue)

    return {
        services,
        faq
    }
}