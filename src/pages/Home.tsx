import * as F from '../common/styles/forms.styles';


export const Home = () => {
    return (
        <>
            {/*<F.Section id={'home'}>*/}
                <F.BackgroundHome id={'home'}>
                    <F.BackgroundImageHome>
                        {/*<F.CenterBlock>*/}
                            {/*<F.NameBlock style={{background: 'black'}}>*/}
                                {/*<F.Svg logo src={'/assets/logo.png'}/>*/}
                                {/*<Typography variant={'h1'} sx={{color: Colors.white, fontSize: logoFontSize}}>*/}
                                {/*    In*/}
                                {/*</Typography>*/}
                                {/*<Typography variant={'h1'} sx={{color: Colors.primary, fontSize: logoFontSize}}>*/}
                                {/*    novia*/}
                                {/*</Typography>*/}
                            {/*</F.NameBlock>*/}
                            {/*<F.NameBlock style={{background: 'black'}}>*/}
                                {/*<Typography variant={'h3'}*/}
                                {/*            sx={{*/}
                                {/*                letterSpacing: '0.5rem',*/}
                                {/*                pb: 4,*/}
                                {/*                color: Colors.white,*/}
                                {/*                fontFamily: [`Gabriola`, 'sans-serif'].join(','),*/}
                                {/*                fontWeight:'light'*/}
                                {/*            }}>*/}
                                {/*    An innovative performance marketing agency{' '}*/}
                                {/*</Typography>*/}
                            {/*</F.NameBlock>*/}
                        {/*</F.CenterBlock>*/}
                    </F.BackgroundImageHome>
                </F.BackgroundHome>
            {/*</F.Section>*/}
        </>
    );
};
