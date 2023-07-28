import {Typography} from '@mui/material';
import * as F from '../common/styles/forms.styles';
import {Text} from '../common/text/Text';
import {Prettier} from "./Prettier";

export const Home = () => {
    return (
        <>
            <F.Section id={'home'}>
                <F.FirstBlock>
                    <div style={{width: '60%', textAlign: 'center'}}>
                        <Typography variant={'h2'}>{Text.getText(1)}</Typography>
                        <Prettier/>
                    </div>
                </F.FirstBlock>
                <F.Block>
                    <F.Anim dir='right' id={'1'}>
                        <F.Img src={'/assets/img/1.jpg'}/>
                    </F.Anim>
                </F.Block>
            </F.Section>
        </>
    );
};
