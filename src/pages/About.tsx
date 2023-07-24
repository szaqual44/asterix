import {Typography} from "@mui/material";
import * as F from '../common/styles/forms.styles'
import {Text} from "../common/text/Text";

export const About = () => {

    return <>
        <F.ContainerWithShadow>
            <F.Block>
                <F.TextContainer slidein={"left"} id={1}>
                    <Typography variant={"h1"}>About</Typography>
                    <div style={{width:'60%'}}>
                        <Typography variant={"p"}>{Text.getText(1)}</Typography>
                    </div>
                </F.TextContainer>
                <F.ImgContainer slidein={"right"} id={2}>
                    <F.Img src={'./src/common/images/2.jpg'}/>
                </F.ImgContainer>
            </F.Block>

        </F.ContainerWithShadow>
    </>
}