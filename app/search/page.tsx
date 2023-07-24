import SearchResult from '@/components/containers/search/searchresult';
import JobSearch from '@/components/containers/search/jobsearch';

export default function Home() {
  return (
    <div>
      <JobSearch />
      <SearchResult/>
   </div>
  )
}