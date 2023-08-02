import { JobSearch, PostingInfo } from "."

export const searchJobByCriteria = async (
  jobSearchCriteria: JobSearch
): Promise<{ data: PostingInfo[] }> => {
 
  console.log('getting search criteria');
  const response = await fetch('http://localhost:3000/api/identity-count', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount: jobSearchCriteria }),
  })

  console.log('fetch job');
  const result = await response.json()
  return result
}

export const getJobPostingById = async (
  postId: number
): Promise<{ data: PostingInfo }> => {
  const response = await fetch('http://localhost:3000/api/identity-count', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ postId }),
  })
  const result = await response.json()
  return result
}

