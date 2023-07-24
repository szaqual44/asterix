import {Typography} from "@mui/material";
import * as F from '../common/styles/forms.styles'
import {CarouselComponent} from "../general/Carousel";

export const Home = () => {

    return <>
        <F.ContainerWithShadow>
            <Typography variant={"h1"}>Home</Typography>
            <CarouselComponent/>
        </F.ContainerWithShadow>
    </>
}