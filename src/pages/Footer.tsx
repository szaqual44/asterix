import {Grid, Typography} from '@mui/material';
import * as F from '../common/styles/forms.styles';
import {Colors} from '../common/styles/variables.styles';


export const Footer = () => {
    return (
        <>
          <F.ContactStyling>
                    <F.ServicesBlock>
                            <Typography sx={{pl:7,mt: 10, color: Colors.black}} variant={'h1'}>
                                Contact us
                            </Typography>
                    </F.ServicesBlock>
            </F.ContactStyling>
            <F.ConctactBlock>
                <Grid container spacing={5} sx={{px:7}}>
                    <Grid item xs={6}>
                        <F.LogoContainer>
                            <F.Img src={'/assets/logo.jpeg'} objectFit={'contain'}/>
                        </F.LogoContainer>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{my: 3}} variant={'h2'}>
                            Innovia
                        </Typography>
                        <Typography sx={{my: 1}} variant={'h3'}>
                            krzysztof@innovia.com
                        </Typography>
                        <Typography sx={{my: 1}} variant={'h3'}>
                            +48 576 317 374
                        </Typography>
                        <Typography sx={{my: 1}} variant={'h3'}>
                            ul. Białowieska 99/28
                        </Typography>
                        <Typography sx={{mb: 10}} variant={'h3'}>
                            Wroclaw, 55-234, Poland
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <a href='http://www.onet.pl' target="_blank">
                            <F.Svg src={'/twitter.png'}/>
                        </a>
                    </Grid>
                </Grid>
            </F.ConctactBlock>
        </>
    );
};
