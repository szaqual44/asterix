import { MainHeader } from './general/MainHeader';
import {  MainContainer, Overlay } from './common/styles/forms.styles';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { CarouselComponent } from './general/Carousel';
import { Services } from './pages/Services';
import { Footer } from './pages/Footer';
import * as F from "./common/styles/forms.styles";

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
          <F.Bar/>
          <Footer />
        </main>
      </Overlay>
    </MainContainer>
  );
}

export default App;
