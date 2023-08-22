import JobSearch from '@/components/containers/search/jobsearch';
import TopJobs from '@/components/containers/jobs/topjobs';
import SearchResult from '@/components/containers/search/searchresult';
export default async function Home() {
  
  return (
  <div>
    <JobSearch />
    <TopJobs />
    <SearchResult/>
   </div>
  ) 
}
