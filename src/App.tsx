import {MainHeader} from "./general/MainHeader";
import {Main, MainContainer, Overlay} from "./common/styles/forms.styles";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {CarouselComponent} from "./general/Carousel";



function App() {

    return (
        <MainContainer>
            <Overlay>
            <MainHeader/>
            <Main >
                <Home/>
                <About/>
                <CarouselComponent/>
            </Main>
            </Overlay>
        </MainContainer     >
    );
}

export default App;
