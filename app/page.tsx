import Image from 'next/image'
import Hello from '../components/hello'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ProTip from '@/components/Protip';
import JobSearch from '@/components/containers/search/jobsearch';
import TopJobs from '@/components/containers/jobs/topjobs';
export default function Home() {
  return (
  <div>
    <ProTip/>
    <JobSearch />
    <TopJobs />
    
   </div>
  )
}
