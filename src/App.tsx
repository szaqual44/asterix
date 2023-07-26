import {MainHeader} from "./general/MainHeader";
import {Main, MainContainer, Overlay} from "./common/styles/forms.styles";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {CarouselComponent} from "./general/Carousel";
import {Services} from "./pages/Services";
import {Footer} from "./pages/Footer";


function App() {

    return (
        <MainContainer>
            <Overlay>
                <MainHeader/>
                <Main>
                    <Home/>
                    <About/>
                    <CarouselComponent/>
                    <Services/>
                    <Footer/>
                </Main>
            </Overlay>
        </MainContainer>
    );
}

export default App;
