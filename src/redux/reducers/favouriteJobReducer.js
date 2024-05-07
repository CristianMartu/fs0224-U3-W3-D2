import { ADD_FAVOURITE_JOB, REMOVE_FAVOURITE_JOB } from '../actions'

const initialState = {
  content: [],
}

const favouriteJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE_JOB:
      return {
        ...state,
        content: [...state.content, action.payload],
      }

    case REMOVE_FAVOURITE_JOB:
      return {
        ...state,
        content: state.content.filter((data) => data._id !== action.payload),
      }
    default:
      return state
  }
}
export default favouriteJobReducer
