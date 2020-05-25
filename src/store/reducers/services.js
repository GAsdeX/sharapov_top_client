import { xhrReducerProvider } from '../../utils/redux'

const [services, setServicesValue, mapServicesValue] = xhrReducerProvider('services')

export {
    setServicesValue, 
    mapServicesValue
}

export default {
    services
}