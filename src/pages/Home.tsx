
import * as F from '../common/styles/forms.styles';

export const Home = () => {
    return (
        <>
            <F.Section id={'home'}>

                <F.SideBlock/>


                <F.Block>
                    {/*<F.Anim dir='right' id={'1'}>*/}
                    <F.Img src={'/assets/img/1.png'}/>
                    {/*</F.Anim>*/}
                </F.Block>

            </F.Section>
        </>
    );
};
