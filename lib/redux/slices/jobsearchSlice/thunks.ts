/* Instruments */
//import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { searchJobByCriteria as FetchJobs, getJobPostingById } from './fetchJobs'
import { counterSlice, JobSearch } from './jobsearchSlice'
import type { ReduxThunkAction } from '@/lib/redux'
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const searchJobAsync = createAppAsyncThunk(
  'counter/fetchIdentityCount',
  async (jobsearchCriteria: JobSearch) => {
    const response = await FetchJobs(jobsearchCriteria)

    // The value we return becomes the `fulfilled` action payload
    return response.data
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
  const response = await getJobPostingById(postingId)
  dispatch(counterSlice.actions.setCurrentJobPosting(response.data))
}