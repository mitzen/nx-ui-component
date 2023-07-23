import Image from 'next/image'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '@/components/Protip';
import Copyright from '@/components/Copyright';
import MainAppBar from './navbar/MainNavBar';

export default function Default() {
  return (
    <Container maxWidth="sm">

    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Material UI - Next.js example
      </Typography>
        Go to the about page

    

      <Copyright />
    </Box>
  </Container>
  )
}
