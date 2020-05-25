import { xhrReducerProvider } from '../../utils/redux'

const [faq, setFaqValue, mapFaqValue] = xhrReducerProvider('faq')


export {
    setFaqValue, 
    mapFaqValue
}
export default {
    faq
}