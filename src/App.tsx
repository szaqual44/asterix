import {MainHeader} from './general/MainHeader';
import {MainContainer} from './common/styles/forms.styles';
import {Home} from './pages/Home';
import {CarouselComponent} from './general/Carousel';
import {Footer} from './pages/Footer';
import {LetsTalk} from './pages/LetsTalk';
import {Services} from './pages/Services';
import {useEffect} from 'react';
import {Routes as RoutesGroup, Route} from "react-router-dom";
import {Policy} from "./pages/Policy";

function App() {
    useEffect(() => {
        document.title = 'Innovia';
    }, []);
    return (
        <MainContainer>
            <MainHeader/>
            <main>
                <RoutesGroup>
                    <Route path='/' element={
                        <>
                        <Home/>
                        <LetsTalk/>
                        <CarouselComponent/>
                        <Services/>
                        <Footer/>
                        </>}
                    />
                    <Route path={"/privacypolicy"} element={<Policy/>} />
                </RoutesGroup>
            </main>
        </MainContainer>
    );
}

export default App;
