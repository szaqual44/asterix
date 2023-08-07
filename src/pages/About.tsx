import * as F from '../common/styles/forms.styles';
import {Grid, Typography} from '@mui/material';
import {Colors} from "../common/styles/variables.styles";
import {Text} from "../common/text/Text";

export const About = () => {

    return (
        <F.AboutStyling id={"about"}>
            <F.Container >
                <Grid container spacing={0}>
                    <Grid sx={{p: 0}} item md={6}>
                        <Typography sx={{color: Colors.white}} variant={'h1'}>
                            About
                        </Typography>
                        <Typography sx={{pt: 5, color: Colors.white, FontWeight:'light', letterSpacing:'0.3rem'}} variant={'h6'}>
                            {Text.getText(4)}
                        </Typography>
                        <F.MottoContainer>
                            <Typography sx={{pt: 1, color: Colors.white}} variant={'h5'}>
                                TURNING IDEAS INTO REALITY:
                            </Typography>
                            <Typography sx={{pt: 1, color: Colors.white}} variant={'h5'}>
                                WHERE INNOVATION SOARS!
                            </Typography>
                            <Typography sx={{pt: 2, color: Colors.white}} variant={'h5'}>
                                -INNOVIA
                            </Typography>
                        </F.MottoContainer>
                    </Grid>
                    <Grid sx={{p: 0, display: 'flex', justifyContent: 'right'}} item md={6}>
                        <F.Container style={{}}>
                            <F.Img src={'/assets/nerd.jpg'}/>
                        </F.Container>
                    </Grid>
                </Grid>
            </F.Container>
        </F.AboutStyling>

    );
};
