import ProTip from '@/components/Protip';
import JobSearch from '@/components/containers/search/jobsearch';
import TopJobs from '@/components/containers/jobs/topjobs';

export default async function Home() {
  
  return (
  <div>
    <JobSearch />
    <TopJobs />
   </div>
  ) 
}
