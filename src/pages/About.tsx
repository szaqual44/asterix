import {Text} from "../common/text/Text";
import * as F from '../common/styles/forms.styles'
import {Typography} from "@mui/material";


export const About = () => {
const height="500px";
    return <>
        <F.Bar/>
        <F.Section height={height}>
            <F.Block>
                <F.Img src={'./src/common/images/2.jpg'}/>
            </F.Block>
            <F.Block>
                <F.TextContainer>
                    <Typography variant={"h1"}>About</Typography>
                    <Typography variant={"h3"}>{Text.getText(2)}</Typography>
                </F.TextContainer>

            </F.Block>
        </F.Section>
    </>
}