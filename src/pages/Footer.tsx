import {Grid, Typography} from '@mui/material';
import * as F from '../common/styles/forms.styles';
import {Colors} from '../common/styles/variables.styles';

export const Footer = () => {
    return (
        <F.FooterStyling>
            <F.Section direction={'column'} id={'contact'}>
                <F.ServicesBlock>
                    <div style={{width: '100%', textAlign: 'center'}}>
                        <Typography sx={{mt: 10, color: Colors.footerText}} variant={'h1'}>
                            Contact us
                        </Typography>
                    </div>
                </F.ServicesBlock>

                <Grid container spacing={5}>
                    <Grid item xs={6}>
                        <Typography sx={{my: 3}} variant={'h2'}>
                            Jupiter ads
                        </Typography>
                        <Typography sx={{my: 1}} variant={'h3'}>
                            +48 576 317 374
                        </Typography>
                        <Typography sx={{my: 1}} variant={'h3'}>
                            krzysztof@jupiterads.com
                        </Typography>
                        <Typography sx={{my: 1}} variant={'h3'}>
                            ul. Białowieska 99/28
                        </Typography>
                        <Typography sx={{mb: 10}} variant={'h3'}>
                            Wroclaw, 55-234, Poland
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <a href='http://www.onet.pl'  target="_blank">
                            <F.Svg src={'/twitter.png'}/>
                        </a>
                    </Grid>
                </Grid>
            </F.Section>
        </F.FooterStyling>
    );
};
