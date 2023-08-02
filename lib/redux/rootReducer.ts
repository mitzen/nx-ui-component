/* Instruments */
import { counterSlice, jobsearchSlice } from './slices'

export const reducer = {
  counter: counterSlice.reducer,
  job: jobsearchSlice.reducer
}
