import { combineReducers, configureStore } from '@reduxjs/toolkit'
import favouriteJobReducer from '../reducers/favouriteJobReducer'
import jobsReducer from '../reducers/jobsReducer'

const rootReducers = combineReducers({
  favouriteJob: favouriteJobReducer,
  jobs: jobsReducer,
})

const store = configureStore({
  reducer: rootReducers,
})

export default store
