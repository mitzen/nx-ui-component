import Image from 'next/image'
import Hello from '../components/hello'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '@/components/Protip';
import Copyright from '@/components/Copyright';
import Header from '../components/Header';

export default function Home() {
  return (
    <Container maxWidth="sm">

    <Header></Header>
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Material UI - Next.js example
      </Typography>

      <Hello></Hello>
        Go to the about page
      <ProTip />
      <Copyright />
    </Box>
  </Container>
  )
}
