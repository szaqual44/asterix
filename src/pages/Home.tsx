import * as F from '../common/styles/forms.styles';
import {Typography} from '@mui/material';
import {Colors} from '../common/styles/variables.styles';

export const Home = () => {
    return (
        <>
            <F.Section id={'home'}>
                <F.BackgroundHome>
                    <F.BackgroundImageHome>

                        <F.CenterBlock>
                            <F.NameBlock style={{background:'black'}}>
                                <F.Svg logo src={'/assets/logo.png'}/>
                                <Typography variant={'h1'} sx={{color: Colors.white}}>
                                    In
                                </Typography>
                                <Typography variant={'h1'} sx={{color: Colors.primary}}>
                                    novia
                                </Typography>
                            </F.NameBlock>
                            <F.NameBlock style={{background:'black'}}>
                            <Typography variant={'h3'}
                                        sx={{ pb:4,color: Colors.white, fontFamily: [`Gabriola`, 'sans-serif'].join(',')}}>
                                An innovative performance marketing agency{' '}
                            </Typography>
                            </F.NameBlock>
                        </F.CenterBlock>
                    </F.BackgroundImageHome>
                </F.BackgroundHome>
            </F.Section>
        </>
    );
};
