import { MainHeader } from './general/MainHeader';
import {  MainContainer, Overlay } from './common/styles/forms.styles';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { CarouselComponent } from './general/Carousel';
import { Services } from './pages/Services';
import { Footer } from './pages/Footer';

function App() {
  return (
    <MainContainer>
      <Overlay>
        <MainHeader />
        <main>
          <Home />
          <About />
          <CarouselComponent />
          <Services />
          <Footer />
        </main>
      </Overlay>
    </MainContainer>
  );
}

export default App;
