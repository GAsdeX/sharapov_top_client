import { useSelector } from 'react-redux'
import { mapServicesValue } from '../../store/reducers/services'
import { mapFaqValue } from '../../store/reducers/faq'
import {mapArticlesValue} from "../../store/reducers/articles";
import {mapCertificatesValue} from "../../store/reducers/certificates";

export const useHomePage = () => {
    const {
        success : services,
    } = useSelector(mapServicesValue)

    const {
        success : faq,
    } = useSelector(mapFaqValue)

    const {
        success : articles,
    } = useSelector(mapArticlesValue)

    const {
        success : certs,
    } = useSelector(mapCertificatesValue)

    const { successappState } = useSelector(({appState}) => appState)

    return {
        services,
        faq,
        articles,
        certs,
        appState: successappState
    }
}