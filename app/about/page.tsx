import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '@/components/Protip';
import Copyright from '@/components/containers/footer/Copyright';
import Header from '@/components/Header';

export default function Home() {
  return (
    <Container maxWidth="sm">
  
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        actual about
      </Typography>
        Go to the about page
    
    </Box>
  </Container>
  )
}
