import * as F from '../common/styles/forms.styles';
import {Typography} from '@mui/material';
import {bannerFontSize, Colors} from '../common/styles/variables.styles';

export const LetsTalk = () => {
    return (
        <>
        <F.LetsTalkSection>


            <F.Section dir={'column'} id={'letstalk'}>
                <F.CenterBlock kolor>
                    <Typography variant={'h1'}
                                sx={{color: Colors.white, fontSize: bannerFontSize, fontWeight: 'bold'}}>
                        LET`S TALK MOBILE APPS!{' '}
                    </Typography>
                </F.CenterBlock>



                <F.Container >
                    <F.Img  src={'/assets/2.png'}/>
                </F.Container>

            </F.Section>
        </F.LetsTalkSection>
        </>
    );
};
