import { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import { history } from '../store/'
import { init } from '../store/actions/init'
import { routers } from '../utils/routers'

import { HomeContainer } from './containers/HomeContainer'
import {Article} from "./presentational/Article";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(init()), [dispatch])


  return routers([
    {
      path: '/',
      component: HomeContainer
    },{
      path: '/:article',
      component: Article
    },
  ], history)
}