import { MainHeader } from './general/MainHeader';
import {  MainContainer, Overlay } from './common/styles/forms.styles';
import { Home } from './pages/Home';
import { CarouselComponent } from './general/Carousel';
import { Footer } from './pages/Footer';
import {LetsTalk} from "./pages/LetsTalk";

function App() {
  return (
    <MainContainer>
      <Overlay>
        <MainHeader />
        <main>
          <Home />
          <LetsTalk/>

          <CarouselComponent />
          {/*<Services />*/}
          {/*<F.Bar/>*/}
          <Footer />
        </main>
      </Overlay>
    </MainContainer>
  );
}

export default App;
