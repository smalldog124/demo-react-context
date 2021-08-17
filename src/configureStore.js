import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import Reducer from './redux/reducers'

const { composeWithDevTools } = require('redux-devtools-extension')
const composeEnhancers = composeWithDevTools({ realtime: true, port: 3000 })

export default () =>createStore(Reducer,process.env.NODE_ENV === 'development'? composeEnhancers(applyMiddleware(thunkMiddleware)): applyMiddleware(thunkMiddleware),)
