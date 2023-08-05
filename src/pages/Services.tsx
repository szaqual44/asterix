import {Grid, Typography} from '@mui/material';
import * as F from '../common/styles/forms.styles';
import {Colors} from '../common/styles/variables.styles';

//https://icons8.com/

export const Services = () => {
    const puzzle = [
        {
            title: 'Precise targeting',
            text: 'A cutting-edge technology that empowers us to finely target our ads, ensuring the perfect match between ad content and user interests, presented at the optimal moment',
            icon: '/puzzle/target.png',
        },
        {
            title: 'Premium inventory',
            text:
                "You'll have complete oversight and transparency throughout the campaign execution, allowing us" +
                ' to meet and surpass your expectations by consistently delivering high-quality traffic, guided by KPIs',
            icon: '/puzzle/medal.png',
        },
        {
            title: 'Fraud prevention',
            text: 'Our platform is fortified with automated fraud prevention mechanisms, guaranteeing the integrity and security of your campaigns',
            icon: '/puzzle/shield.png',
        },
        {
            title: 'Performance and growth',
            text: 'We work hand in hand with you to craft strategic growth plans that transcend fleeting trends, emphasizing steady and sustainable progress for your business',
            icon: '/puzzle/chart.png',
        },
        {
            title: 'Long-term relationships',
            text: "At Innovia, we believe in the magic of long-term relationships. We don't just focus on short-term gains; we are committed to nurturing partnerships that stand the test of time.",
            icon: '/puzzle/handshake.png',
        },
        {
            title: 'Dedicated team',
            text: 'Your success is our success! Each partner is assigned a skilled and attentive senior UA strategy manager, ensuring you receive personalized support and campaign advising that is second to none',
            icon: '/puzzle/monitor.png',
        },
    ];

    return (
        <>
            <F.ServicesStyling>
                <F.Container>
                    <F.Section dir={'column'} id={'services'}>
                        <F.ServicesBlock>
                            <Typography sx={{ mt: 10, color: Colors.white}} variant={'h1'}>
                                Services
                            </Typography>
                        </F.ServicesBlock>
                        <Grid container spacing={0}>
                            {puzzle.map((p) => (
                                <Grid item md={4} key={p.icon}>
                                    <F.ServiceElementContainer>
                                        <F.Svg src={p.icon}/>
                                        <F.ServicePuzzelContainer>
                                            <Typography  variant={'h4'}>
                                                {p.title}
                                            </Typography>
                                            <Typography sx={{my: 2, textAlign: 'center'}} variant={'h6'}>
                                                {p.text}
                                            </Typography>
                                        </F.ServicePuzzelContainer>
                                    </F.ServiceElementContainer>
                                </Grid>
                            ))}
                        </Grid>
                    </F.Section>
                </F.Container>
            </F.ServicesStyling>
        </>
    );
};
