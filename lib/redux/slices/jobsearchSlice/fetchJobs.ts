
import { Model } from '../../../model/posting';

export const searchJobByCriteria = async (
  jobSearchCriteria: Model.JobSearch
  ): Promise<{ data: Model.PostingInfo[] }> => {
    
    const serverHost = process.env['NEXT_PUBLIC_SERVER_URL']

    console.log(serverHost);
      
    const response = await fetch(`${serverHost}/api/jobs?searchText=${jobSearchCriteria.searchText}&location=${jobSearchCriteria.jobLocation}&category=${jobSearchCriteria.jobCategory}`, 
    {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' 
    },
  })

  console.log(response);
  
  return await response.json();
}

export const getJobPostingById = async (
  postId: number
  ): Promise<{ data: Model.PostingInfo }> => {
    
    const serverHost = process.env['NEXT_PUBLIC_SERVER_URL']
    const response = await fetch(`${serverHost}/api/jobs/${postId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  return await response.json()
}