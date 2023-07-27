import ProTip from '@/components/Protip';
import JobSearch from '@/components/containers/search/jobsearch';
import TopJobs from '@/components/containers/jobs/topjobs';

export default async function Home() {
  
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo1 = await res.json()
  console.log(repo1)

  return (
  <div>
    <ProTip/>
    <JobSearch />
    <TopJobs />
   </div>
  ) 
}
