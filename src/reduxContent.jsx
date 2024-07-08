import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import CardTwo from './components/cardTwo';
import countReducer from './reducers/counter';

const store=configureStore({
    reducer:{
      counter:countReducer
    }
})

export default function ReduxContent() {
  return (
   <>
   <Provider store={store}>
    <CardTwo/>
   </Provider>
   
   </>
  )
}
