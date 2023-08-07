import {Grid, Typography} from '@mui/material';
import * as F from '../common/styles/forms.styles';
import {bannerFontSize, Colors, myEmail} from '../common/styles/variables.styles';


export const Footer = () => {
    const linkedinUrl = 'https://www.linkedin.com/company/97913362/admin/feed/posts/?feedType=following'
    const textColor = Colors.white;
    const letterSpacing = "0.3rem";
    return (
        <>
            <F.ConctactBlock id={'contact'}>
                <F.CenterBlock kolor>
                    <Typography variant={'h2'}
                                sx={{color: Colors.white, fontSize: bannerFontSize, fontWeight: 'bold'}}>
                        LET’S KEEP IN TOUCH!
                    </Typography>
                </F.CenterBlock>
                <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
                    <F.FooterContainer>
                        <F.ContactDataContainer justify={'start'}>
                            <F.Svg logo src={'/assets/logo.png'}/>
                            <F.LogoContainer>
                                <Typography variant={'h2'} sx={{color: Colors.white}}>
                                    In
                                </Typography>
                                <Typography variant={'h2'} sx={{color: Colors.primary}}>
                                    novia
                                </Typography>
                            </F.LogoContainer>
                        </F.ContactDataContainer>

                        <F.ContactDataContainer>
                            <Grid container>
                                <Grid item xs={8}>
                                    <Typography sx={{mt: 5, mb: 1, color: textColor}} variant={'h5'}>
                                        Białowieska 99
                                    </Typography>
                                    <Typography sx={{mb: 1, color: textColor}} variant={'h5'}>
                                        55-234 Wroclaw
                                    </Typography>
                                    <Typography sx={{mb: 10, color: textColor}} variant={'h5'}>
                                        Poland
                                    </Typography>
                                </Grid>

                                <Grid item xs={1}>
                                    <F.ElementContainer>
                                        <a href={linkedinUrl} target='_blank'>
                                            <F.Svg size={'small'} color={'white'} src={'/services/linked.png'}/>
                                        </a>
                                    </F.ElementContainer>
                                    <F.ElementContainer>
                                        <a href='skype:example123?chat'>
                                            <F.Svg size={'small'} color={'white'} src={'/services/skype.png'}/>
                                        </a>
                                    </F.ElementContainer>
                                </Grid>

                                <Grid item xs={3}>
                                    <F.ElementContainer>
                                        <a href={`mailto:${myEmail}`}>
                                            <F.Svg size={'small'} color={'white'} src={'/services/mail.png'}/>
                                        </a>
                                        <F.PuzzelContainer>
                                            <a href={`mailto:${myEmail}`}>
                                                <Typography
                                                    variant={'h5'}
                                                    sx={{
                                                        color: textColor,
                                                        letterSpacing: letterSpacing
                                                    }}
                                                >
                                                    {myEmail}
                                                </Typography>
                                            </a>
                                        </F.PuzzelContainer>
                                    </F.ElementContainer>
                                    <F.ElementContainer>
                                        <F.Svg size={'small'} color={'white'} src={'/services/mobile.png'}/>
                                        <F.PuzzelContainer>
                                            <Typography variant={'h5'}
                                                        sx={{color: textColor, letterSpacing: letterSpacing}}>
                                                +48 576 317 374
                                            </Typography>
                                        </F.PuzzelContainer>
                                    </F.ElementContainer>
                                </Grid>
                            </Grid>
                        </F.ContactDataContainer>
                    </F.FooterContainer>
                </div>
                    <F.Rights>
                        <Typography sx={{color: Colors.mediumGrey, fontSize: 15}} variant={'h5'}>
                            © 2023 innovia.click All Rights Reserved
                        </Typography>
                    </F.Rights>
            </F.ConctactBlock>
        </>
);
};
