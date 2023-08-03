import {Grid, Typography} from '@mui/material';
import * as F from '../common/styles/forms.styles';
import {Colors, myEmail} from '../common/styles/variables.styles';
import {NavLink} from "react-router-dom";

export const Footer = () => {
    const textColor = Colors.white;
    return (
        <>
            <F.ConctactBlock id={'contact'}>
                <F.CenterBlock kolor>
                    <Typography variant={'h1'} sx={{color: Colors.white, fontSize: 100, p: 3}}>
                        LET’S KEEP IN TOUCH!
                    </Typography>
                </F.CenterBlock>

                <F.ContactDataContainer justify={'start'}>
                    <F.Svg logo src={'/assets/logo.png'}/>
                    <F.LogoContainer>
                        <Typography variant={'h1'} sx={{color: Colors.white}}>
                            In
                        </Typography>
                        <Typography variant={'h1'} sx={{color: Colors.primary}}>
                            novia
                        </Typography>
                    </F.LogoContainer>
                </F.ContactDataContainer>

                <F.ContactDataContainer>
                    <Grid container>
                        <Grid item xs={5}>
                            <Typography sx={{my: 1, color: textColor}} variant={'h5'}>
                                Białowieska 99
                            </Typography>
                            <Typography sx={{mb: 1, color: textColor}} variant={'h5'}>
                                55-234 Wroclaw
                            </Typography>
                            <Typography sx={{mb: 10, color: textColor}} variant={'h5'}>
                                Poland
                            </Typography>
                            <NavLink to={'/privacypolicy'}>
                                <Typography variant={'h5'} sx={{color: 'white', fontWeight: 'bold'}}>
                                    PRIVACY POLICY
                                </Typography>
                            </NavLink>
                        </Grid>
                        <Grid item xs={4}>
                            <F.ElementContainer>
                                <F.Svg size={'small'} color={'white'} src={'/services/mobile.png'}/>
                                <F.PuzzelContainer>
                                    <Typography variant={'h5'} sx={{color: 'white', fontWeight: 'bold'}}>
                                        +48 576 317 374
                                    </Typography>
                                </F.PuzzelContainer>
                            </F.ElementContainer>
                            <F.ElementContainer>
                                <a href={`mailto:${myEmail}`}>
                                    <F.Svg size={'small'} color={'white'} src={'/services/mail.png'}/>
                                </a>
                                <F.PuzzelContainer>
                                    <a href={`mailto:${myEmail}`}>
                                        <Typography
                                            variant={'h5'}
                                            sx={{
                                                color: 'white',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {myEmail}
                                        </Typography>
                                    </a>
                                </F.PuzzelContainer>
                            </F.ElementContainer>
                        </Grid>

                        <Grid item xs={3}>
                            <F.ElementContainer>
                                <a href='https://www.linkedin.com/in/krzysztof-zawislak-1a1853138/' target='_blank'>
                                    <F.Svg size={'small'} color={'white'} src={'/services/linked.png'}/>
                                </a>
                            </F.ElementContainer>
                            <F.ElementContainer>
                                <a href='skype:example123?chat'>
                                    <F.Svg size={'small'} color={'white'} src={'/services/skype.png'}/>
                                </a>
                            </F.ElementContainer>
                        </Grid>
                    </Grid>
                </F.ContactDataContainer>
                <F.Rights>
                    <Typography sx={{color: Colors.mediumGrey, fontSize: 15}} variant={'h5'}>
                        © 2023 innovia.click All Rights Reserved
                    </Typography>
                </F.Rights>
            </F.ConctactBlock>
        </>
    );
};
