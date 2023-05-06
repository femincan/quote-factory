import { MotionConfig } from 'framer-motion';
import { Container, Footer, Logo, QuoteCard } from './components';

const App = () => (
  <MotionConfig reducedMotion='user'>
    <Container>
      <Logo />
      <QuoteCard />
      <Footer />
    </Container>
  </MotionConfig>
);

export default App;
