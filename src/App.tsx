import { MainHeader } from './general/MainHeader';
import { MainContainer } from './common/styles/forms.styles';
import { Home } from './pages/Home';
import { CarouselComponent } from './general/Carousel';
import { Footer } from './pages/Footer';
import { LetsTalk } from './pages/LetsTalk';
import { Services } from './pages/Services';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Innovia';
  }, []);
  return (
    <MainContainer>
      <MainHeader />
      <main>
        <Home />
        <LetsTalk />
        <CarouselComponent />
        <Services />
        <Footer />
      </main>
    </MainContainer>
  );
}

export default App;
