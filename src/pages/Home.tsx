import * as F from '../common/styles/forms.styles';
import { Typography} from "@mui/material";
import {Colors} from "../common/styles/variables.styles";

export const Home = () => {
    return (
        <>
            <F.Section id={'home'}>
                <F.BackgroundGif>
                    <F.CenterBlock>
                        <F.NameBlock>
                            {/*<F.Svg  src={'/star.png'}/>*/}
                            <Typography variant={'h1'} sx={{color: Colors.white}}>In</Typography>
                            <Typography variant={'h1'} sx={{color: Colors.primary}}>novia</Typography>
                        </F.NameBlock>
                        <Typography variant={'h3'}
                                    sx={{color: Colors.white, fontFamily: [`Gabriola`, 'sans-serif'].join(','),}}>An
                            innovative performance marketing
                            agency </Typography>
                    </F.CenterBlock>

                </F.BackgroundGif>

            </F.Section>
        </>
    );
};
