import { useSelector } from 'react-redux'
import { mapServicesValue } from '../../store/reducers/services'
import { mapFaqValue } from '../../store/reducers/faq'
import {mapArticlesValue} from "../../store/reducers/articles";

export const useHomePage = () => {
    const {
        success : services,
        fail,
        fetch
    } = useSelector(mapServicesValue)

    const {
        success : faq,
    } = useSelector(mapFaqValue)

    const {
        success : articles,
    } = useSelector(mapArticlesValue)


    return {
        services,
        faq,
        articles
    }
}