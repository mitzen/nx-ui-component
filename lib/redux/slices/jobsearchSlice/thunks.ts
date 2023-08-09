/* Instruments */
//import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { searchJobByCriteria as FetchJobs, getJobPostingById } from './fetchJobs'
import { Model } from '@/lib/model/posting'
import type { ReduxThunkAction } from '@/lib/redux'
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'

// createAppAsyncThunk should always return promise 
// otherwise you will get unexpected behaviour 

export const searchJobAsync = createAppAsyncThunk(
  'jobsearch/searchJobAsync',
  async (jobsearchCriteria: Model.JobSearch) => {
    return await FetchJobs(jobsearchCriteria);
  }
)

// export const searchJob =
// (jobsearchCriteria: JobSearch): ReduxThunkAction =>
// async (dispatch, getState) => {
//   const response = await FetchJobs(jobsearchCriteria)
//   dispatch(counterSlice.actions.setSearchResult(response.data))
// }

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const getJobById =
(postingId: number): ReduxThunkAction =>
async (dispatch, getState) => {
  //const response = await getJobPostingById(postingId)
  const response = getJobPostingById(postingId);
  //dispatch(jobsearchSlice.actions.setCurrentJobPosting())
}

