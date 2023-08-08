
import { Model } from '../../../model/posting';

export const searchJobByCriteria = async (
  jobSearchCriteria: Model.JobSearch
  ): Promise<{ data: Model.PostingInfo[] }> => {
    
    //const serverHost = process.env['DATABASE_URL']
    //const port = process.env['DEFAULT_PORT']
    //const response = await fetch(`${serverHost}:${port}/api/jobs`, {
      
    const response = await fetch(`http://localhost:3000/api/jobs?searchText=${jobSearchCriteria.searchText}&location=${jobSearchCriteria.jobLocation}&category=${jobSearchCriteria.jobCategory}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })

  return await response.json()
}

export const getJobPostingById = async (
  postId: number
  ): Promise<{ data: Model.PostingInfo }> => {
    const response = await fetch(`http://localhost:3000/api/jobs/${postId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  return await response.json()
}