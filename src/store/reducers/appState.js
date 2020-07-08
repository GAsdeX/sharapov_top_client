import { xhrReducerProvider } from '../../utils/redux'

const [appState, setAppState] = xhrReducerProvider('appState')


export {
    setAppState
}
export default {
    appState
}