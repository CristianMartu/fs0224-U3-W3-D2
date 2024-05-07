import { CLEAR_JOBS, SEARCH_JOBS } from '../actions'

const initialState = {
  content: [],
}

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_JOBS:
      return {
        ...state,
        content: [],
      }
    case SEARCH_JOBS:
      return {
        ...state,
        content: action.payload,
      }
    default:
      return state
  }
}

export default jobsReducer
