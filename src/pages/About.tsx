import {Typography} from "@mui/material";
import * as F from '../common/styles/forms.styles'
import {Text} from "../common/text/Text";

export const About = () => {

    return <>
        <F.ContainerWithShadow>
            <F.Block>
                <F.ImgContainer>
                    <F.Img src={'./src/common/images/1.jpg'}/>
                </F.ImgContainer>
                <F.TextContainer>
                    <Typography variant={"p"}>{Text.getText(1)}</Typography>
                    <Typography variant={"p"}>{Text.getText(1)}</Typography>
                    <Typography variant={"p"}>{Text.getText(1)}</Typography>
                </F.TextContainer>
            </F.Block>
        {/*    */}
            <F.Block>
                <F.TextContainer>
                    <Typography variant={"p"}>{Text.getText(1)}</Typography>
                    <Typography variant={"p"}>{Text.getText(1)}</Typography>
                    <Typography variant={"p"}>{Text.getText(1)}</Typography>
                </F.TextContainer>
                <F.ImgContainer>
                    <F.Img src={'./src/common/images/2.jpg'}/>
                </F.ImgContainer>
            </F.Block>

        </F.ContainerWithShadow>
    </>
}