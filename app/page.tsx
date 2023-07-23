import Image from 'next/image'
import Hello from '../components/hello'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ProTip from '@/components/Protip';
import Copyright from '@/components/Copyright';
import Header from '../components/Header';

export default function Home() {
  return (
  <div>
    <Header></Header>
    <ProTip/>
    <Copyright/>
   </div>
  )
}
