import { xhrReducerProvider } from '../../utils/redux'

const [certificates, setCertificatesValue, mapCertificatesValue] = xhrReducerProvider('certificates')


export {
    setCertificatesValue,
    mapCertificatesValue
}
export default {
    certificates
}