import { xhrReducerProvider } from '../../utils/redux'

const [articles, setArticlesValue, mapArticlesValue] = xhrReducerProvider('articles')


export {
    setArticlesValue,
    mapArticlesValue
}
export default {
    articles
}