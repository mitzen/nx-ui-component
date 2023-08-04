
import { Model } from '../../../model/posting';

export const searchJobByCriteria = async (
  jobSearchCriteria: Model.JobSearch
  ): Promise<{ data: Model.PostingInfo[] }> => {
    
    console.log('getting search criteria');
    const response = await fetch('http://localhost:3000/api/identity-count', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount: jobSearchCriteria }),
  })

  return await response.json()
}

export const getJobPostingById = async (
  postId: number
  ): Promise<{ data: Model.PostingInfo }> => {
    const response = await fetch('http://localhost:3000/api/identity-count', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ postId }),
  })
  return await response.json()
}