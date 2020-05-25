import { useSelector } from 'react-redux'
import { mapServicesValue } from '../../store/reducers/services'

export const useHomePage = () => {
    const {
        success : services,
        fail,
        fetch
    } = useSelector(mapServicesValue)

    console.log(useSelector(mapServicesValue));
    
    
    return {
        services
    }
}