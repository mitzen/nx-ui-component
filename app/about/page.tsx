import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '@/components/Protip';
import Copyright from '@/components/containers/footer/Copyright';
import NavLinks from '@/components/Header';

export default function Home() {
  return (
    <Container maxWidth="sm">
  
    <Box sx={{ my: 4 }}>
      <Typography variant="normal" component="h1" gutterBottom>
      Start building today using the latest AI models and your favorite Azure tools. Get started now with pay-as-you-go pricing. There’s no upfront commitment—cancel anytime. Or try Azure free for up to 30 days.
      </Typography>

    </Box>
  </Container>
  )
}
