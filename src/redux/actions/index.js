export const ADD_FAVOURITE_JOB = 'ADD_FAVOURITE_JOB'
export const REMOVE_FAVOURITE_JOB = 'REMOVE_FAVOURITE_JOB'
export const SEARCH_JOBS = 'SERCH_JOBS'
export const CLEAR_JOBS = 'CLEAR_JOBS'

export const addFavourite = (data) => ({ type: ADD_FAVOURITE_JOB, payload: data })
export const removeFavourite = (id) => ({ type: REMOVE_FAVOURITE_JOB, payload: id })

export const setJobs = (jobs) => ({ type: SEARCH_JOBS, payload: jobs })

const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search='

export const getJob = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + '&limit=20')
      if (response.ok) {
        const { data } = await response.json()
        dispatch(setJobs(data))
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const clearJobs = () => ({ type: CLEAR_JOBS })
